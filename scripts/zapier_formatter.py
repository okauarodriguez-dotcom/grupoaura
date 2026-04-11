"""
zapier_formatter.py — Webhook local que recebe transcrições do Zapier e salva em inbox/

O Zapier chama este endpoint após cada call do Fathom.
Rode este script em background para receber as transcrições automaticamente.

Como rodar:
    pip install flask
    python scripts/zapier_formatter.py

O webhook fica disponível em: http://localhost:5678/reuniao
Use ngrok para expor externamente se necessário (ver guia em operacoes/setup-automacao.md)
"""

from flask import Flask, request, jsonify
from pathlib import Path
from datetime import datetime
import re
import os

app = Flask(__name__)

VAULT_INBOX = Path(__file__).parent.parent / "inbox"


def gerar_nome(titulo, data):
    slug = re.sub(r"[^\w\s-]", "", titulo or "reuniao")
    slug = re.sub(r"\s+", "-", slug).lower()[:60].strip("-") or "reuniao"
    return f"{data.strftime('%Y-%m-%d')}-{slug}.md"


def salvar(titulo, transcricao, participantes="", data=None):
    VAULT_INBOX.mkdir(parents=True, exist_ok=True)
    data = data or datetime.now()
    arquivo = VAULT_INBOX / gerar_nome(titulo, data)

    conteudo = f"""---
type: transcricao
fonte: fathom-zapier
data: {data.strftime('%Y-%m-%d')}
assunto: "{titulo}"
participantes: "{participantes}"
status: nao-processado
---

# {titulo}

> Capturado automaticamente via Zapier + Fathom
> Para processar: abra o Claude Code e rode `/reunião`

---

{transcricao}
"""
    arquivo.write_text(conteudo, encoding="utf-8")
    return str(arquivo)


@app.route("/reuniao", methods=["POST"])
def receber_reuniao():
    """
    Zapier envia um POST com:
        titulo       — nome da reunião
        transcricao  — texto completo
        participantes — lista de participantes (opcional)
        data         — data da reunião ISO format (opcional)
    """
    # Aceita JSON, form data ou query params
    if request.is_json:
        dados = request.json or {}
    else:
        dados = request.form.to_dict() or request.args.to_dict()

    titulo        = dados.get("titulo", "Reunião sem título")
    transcricao   = dados.get("transcricao", "")
    participantes = dados.get("participantes", "")
    data_str      = dados.get("data", "")

    if not transcricao:
        return jsonify({"erro": "Campo 'transcricao' obrigatório"}), 400

    try:
        data = datetime.fromisoformat(data_str) if data_str else datetime.now()
    except ValueError:
        data = datetime.now()

    arquivo = salvar(titulo, transcricao, participantes, data)
    print(f"[{datetime.now().strftime('%H:%M:%S')}] Salvo: {arquivo}")

    return jsonify({"status": "ok", "arquivo": arquivo}), 200


@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"}), 200


if __name__ == "__main__":
    print("Webhook FathomSync rodando em http://localhost:5678")
    print("Endpoint: POST http://localhost:5678/reuniao")
    app.run(host="0.0.0.0", port=5678)
