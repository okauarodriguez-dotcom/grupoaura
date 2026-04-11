# Setup: Automação Fathom → Vault

## Arquitetura

```
Call termina
    → Fathom detecta automaticamente
    → Zapier recebe o evento
    → Zapier formata e envia para o webhook local
    → Webhook salva em inbox/ como .md
    → /reunião processa tudo no vault
```

---

## Passo 1 — Instalar o Google Drive Desktop

1. Acesse **drive.google.com** → clique em **Instalar Drive para Desktop**
2. Instale e faça login com sua conta Google
3. O Drive cria a pasta `G:\Meu Drive\` (ou similar) no seu PC
4. Mova a pasta do vault para dentro do Drive:
   - Pasta atual: `C:\Users\Desktop\Downloads\grupoaura`
   - Nova pasta: `G:\Meu Drive\grupoaura`
5. Atualize o Claude Code para apontar para o novo caminho

> Isso garante que o vault fique sincronizado entre dispositivos automaticamente.

---

## Passo 2 — Instalar o ngrok (expõe o webhook para o Zapier)

O Zapier precisa de uma URL pública para chamar o webhook local.

1. Acesse **ngrok.com** → crie uma conta gratuita
2. Baixe e instale o ngrok
3. Autentique:
   ```
   ngrok config add-authtoken SEU_TOKEN_AQUI
   ```
4. Rode:
   ```
   ngrok http 5678
   ```
5. Copie a URL gerada (ex: `https://abc123.ngrok-free.app`)

---

## Passo 3 — Configurar o Zapier

1. Acesse **zapier.com** → **Create Zap**

**Trigger:**
- App: `Fathom`
- Evento: `New Recording`
- Conecte sua conta do Fathom

**Action:**
- App: `Webhooks by Zapier`
- Evento: `POST`
- URL: `https://SEU_NGROK.ngrok-free.app/reuniao`
- Payload Type: `JSON`
- Data:
  ```
  titulo       → {{recording_title}}
  transcricao  → {{transcript}}
  participantes → {{attendees}}
  data         → {{created_at}}
  ```

2. Teste o Zap com uma gravação existente
3. Ative o Zap

---

## Passo 4 — Iniciar o webhook local

Dê dois cliques em `scripts/iniciar_webhook.bat`

O webhook fica escutando em background. Deixe rodando enquanto usar o computador.

Para iniciar automaticamente com o Windows:
- Pressione `Win + R` → digite `shell:startup`
- Copie o arquivo `iniciar_webhook.bat` para essa pasta

---

## Passo 5 — Testar o pipeline completo

1. Faça uma call de teste com o Fathom
2. Aguarde o Fathom processar (~2-5 min)
3. Verifique se apareceu um arquivo em `inbox/`
4. Abra o Claude Code e rode `/reunião`
5. Confirme que o vault foi organizado

---

## Uso diário

**Automático:** toda call vira um arquivo em `inbox/` automaticamente.

**Para processar:**
```
/reunião
```

**Para processar uma transcrição manual (ex: copiou do Fathom):**
```
/reunião [cole a transcrição aqui]
```

---

## Troubleshooting

| Problema | Solução |
|---|---|
| Arquivo não aparece em inbox/ | Verifique se o webhook está rodando (`iniciar_webhook.bat`) |
| Zapier retorna erro | Confirme que o ngrok está ativo e a URL está correta no Zap |
| ngrok URL mudou | Atualize a URL no Zapier (ngrok muda a URL a cada restart no plano grátis) |
| /reunião não encontra arquivos | Verifique se o status do arquivo em inbox/ é `nao-processado` |

---

## ngrok URL fixa (opcional)

No plano grátis do ngrok, a URL muda toda vez que você reinicia.
Para URL fixa: upgrade para o plano pago do ngrok (~$8/mês) ou use o Cloudflare Tunnel (grátis).
