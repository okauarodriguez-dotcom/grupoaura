"""
check_inbox.py — Verifica inbox/ por transcrições pendentes e instrui o Claude a rodar /reunião
Executado pelo hook SessionStart do Claude Code
"""
import os, sys, json

INBOX = "c:/Users/Desktop/Downloads/grupoaura/inbox"

pending = []
for f in os.listdir(INBOX):
    if f.endswith(".md"):
        path = os.path.join(INBOX, f)
        try:
            with open(path, "r", encoding="utf-8") as fh:
                content = fh.read()
            if "status: nao-processado" in content:
                pending.append(f)
        except Exception:
            pass

if pending:
    nomes = ", ".join(pending)
    msg = {
        "hookSpecificOutput": {
            "hookEventName": "SessionStart",
            "additionalContext": f"INBOX COM TRANSCRIÇÕES PENDENTES: Há {len(pending)} arquivo(s) em inbox/ aguardando processamento: {nomes}. Execute /reunião agora para processar automaticamente."
        }
    }
    print(json.dumps(msg))
