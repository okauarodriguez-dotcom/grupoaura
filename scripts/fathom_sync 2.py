"""
fathom_sync.py — Monitor Gmail para transcrições do Fathom e salva em inbox/

Requisitos:
    pip install python-dotenv beautifulsoup4

Configuração:
    Crie o arquivo scripts/.env com:
        GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx

Como rodar:
    python scripts/fathom_sync.py

Agendamento automático (Windows):
    Execute scripts/setup_agendamento.bat como Administrador
"""

import imaplib
import email
import os
import re
from datetime import datetime
from email.header import decode_header
from pathlib import Path

try:
    from dotenv import load_dotenv
    load_dotenv(Path(__file__).parent / ".env")
except ImportError:
    pass

try:
    from bs4 import BeautifulSoup
    HAS_BS4 = True
except ImportError:
    HAS_BS4 = False

# ── Configurações ──────────────────────────────────────────────────────────────
GMAIL_USER        = "okauarodriguez@gmail.com"
GMAIL_APP_PASSWORD = os.getenv("GMAIL_APP_PASSWORD", "")
VAULT_INBOX       = Path(__file__).parent.parent / "inbox"
FATHOM_REMETENTES = ["fathom.video", "fathom.ai", "noreply@fathom"]
# ──────────────────────────────────────────────────────────────────────────────


def conectar_gmail():
    if not GMAIL_APP_PASSWORD:
        raise ValueError(
            "GMAIL_APP_PASSWORD não encontrado.\n"
            "Crie o arquivo scripts/.env com:\n"
            "  GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx\n"
            "Veja o README para instruções de como gerar."
        )
    mail = imaplib.IMAP4_SSL("imap.gmail.com")
    mail.login(GMAIL_USER, GMAIL_APP_PASSWORD)
    return mail


def decodificar_assunto(assunto_raw):
    partes = decode_header(assunto_raw or "reuniao")
    assunto = ""
    for parte, enc in partes:
        if isinstance(parte, bytes):
            assunto += parte.decode(enc or "utf-8", errors="ignore")
        else:
            assunto += parte
    return assunto.strip()


def extrair_texto(msg):
    """Extrai texto do corpo do e-mail (plain text ou HTML)."""
    texto_plain = ""
    texto_html  = ""

    if msg.is_multipart():
        for part in msg.walk():
            ct = part.get_content_type()
            cd = str(part.get("Content-Disposition", ""))
            if "attachment" in cd:
                continue
            payload = part.get_payload(decode=True)
            if not payload:
                continue
            charset = part.get_content_charset() or "utf-8"
            decoded = payload.decode(charset, errors="ignore")
            if ct == "text/plain":
                texto_plain += decoded
            elif ct == "text/html":
                texto_html += decoded
    else:
        payload = msg.get_payload(decode=True)
        charset = msg.get_content_charset() or "utf-8"
        texto_plain = payload.decode(charset, errors="ignore") if payload else ""

    # Prefere plain text; se não tiver, converte HTML
    if texto_plain.strip():
        return texto_plain.strip()

    if texto_html.strip():
        if HAS_BS4:
            soup = BeautifulSoup(texto_html, "html.parser")
            return soup.get_text(separator="\n").strip()
        # fallback sem bs4: remove tags
        return re.sub(r"<[^>]+>", "", texto_html).strip()

    return ""


def nome_arquivo(assunto, data):
    data_str   = data.strftime("%Y-%m-%d")
    slug       = re.sub(r"[^\w\s-]", "", assunto)
    slug       = re.sub(r"\s+", "-", slug).lower()[:60].strip("-")
    slug       = slug or "reuniao"
    return f"{data_str}-{slug}.md"


def salvar_inbox(assunto, corpo, data):
    VAULT_INBOX.mkdir(parents=True, exist_ok=True)
    arquivo  = VAULT_INBOX / nome_arquivo(assunto, data)
    data_str = data.strftime("%Y-%m-%d")

    conteudo = f"""---
type: transcricao
fonte: fathom
data: {data_str}
assunto: "{assunto}"
status: nao-processado
---

# {assunto}

> Transcrição capturada automaticamente pelo fathom_sync.py
> Para processar: abra o Claude Code e rode `/reunião`

---

{corpo}
"""
    arquivo.write_text(conteudo, encoding="utf-8")
    return arquivo


def e_email_fathom(remetente):
    remetente_lower = (remetente or "").lower()
    return any(f in remetente_lower for f in FATHOM_REMETENTES)


def sincronizar():
    print(f"[{datetime.now().strftime('%H:%M:%S')}] Conectando ao Gmail...")
    mail = conectar_gmail()
    mail.select("INBOX")

    # Busca e-mails não lidos de qualquer remetente com "fathom" no endereço
    _, ids_fathom = mail.search(None, '(UNSEEN FROM "fathom")')
    ids = ids_fathom[0].split()

    if not ids:
        print("Nenhum e-mail novo do Fathom encontrado.")
        mail.logout()
        return

    print(f"{len(ids)} e-mail(s) do Fathom encontrado(s).")
    salvos = []

    for eid in ids:
        _, data = mail.fetch(eid, "(RFC822)")
        raw    = data[0][1]
        msg    = email.message_from_bytes(raw)

        remetente = msg.get("From", "")
        if not e_email_fathom(remetente):
            continue  # segurança extra

        assunto    = decodificar_assunto(msg.get("Subject"))
        date_str   = msg.get("Date", "")
        try:
            data_email = email.utils.parsedate_to_datetime(date_str)
        except Exception:
            data_email = datetime.now()

        corpo = extrair_texto(msg)
        if not corpo:
            print(f"  ⚠ E-mail '{assunto}' sem texto extraível — pulando.")
            continue

        arquivo = salvar_inbox(assunto, corpo, data_email)
        mail.store(eid, "+FLAGS", "\\Seen")  # marca como lido

        print(f"  ✓ Salvo: {arquivo.name}")
        salvos.append(str(arquivo))

    mail.logout()

    if salvos:
        print(f"\n{len(salvos)} transcrição(ões) salva(s) em inbox/")
        print("Abra o Claude Code e rode /reunião para processar.\n")
    else:
        print("Nenhuma transcrição processada.")


if __name__ == "__main__":
    sincronizar()
