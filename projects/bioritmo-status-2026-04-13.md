---
tipo: status
projeto: BioRitmo
data: 2026-04-13
---

# BioRitmo — O que foi feito e o que falta

---

## APP ESTÁ NO AR

**Link:** https://bioritmo-app.vercel.app  
**Código na máquina:** `/Users/kauahenrique/Documents/bioritmo-app/`

Acessa esse link no celular agora. Funciona como app, pode instalar na tela inicial.

---

## O QUE FOI FEITO HOJE

O app foi construído do zero e deployado. Telas prontas:

- **Home** — relógio metabólico em tempo real, timer de jejum ao vivo, streak de dias, lição do dia
- **Plano** — protocolo 21 dias completo
- **Calculadora** — janela de jejum personalizada
- **Progresso** — check-in diário, score de ressincronização 0-100%, calendário mensal, gráfico de peso
- **Bônus** — Receita Ozempic Natural, plano alimentar, guias
- **Comunidade** — feed de resultados, status de jejum
- **Onboarding** — 4 passos pós-compra

Tudo que foi prometido no VSL existe no app.

---

## O QUE FALTA (amanhã)

### 1. Supabase — banco de dados
- Criar conta em **supabase.com** (grátis)
- Novo projeto → região São Paulo
- Copiar as 3 chaves (URL + anon key + service role key)
- SQL Editor → colar o arquivo `bioritmo-app/supabase-schema.sql` → clicar Run

### 2. Resend — email automático pós-compra
- Criar conta em **resend.com** (grátis até 3.000 emails/mês)
- Criar API Key → copiar

### 3. Adicionar as chaves na Vercel
- Acessar vercel.com → projeto bioritmo-app → Settings → Environment Variables
- Adicionar:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`
  - `RESEND_API_KEY`
  - `EMAIL_FROM` = noreply@bioritmo.com.br
  - `WEBHOOK_SECRET_GREENN` = (token que a Greenn vai gerar)
  - `NEXT_PUBLIC_APP_URL` = https://bioritmo-app.vercel.app

### 4. Webhook da Greenn
- No painel da Greenn → produto BioRitmo → Webhooks
- Adicionar URL: `https://bioritmo-app.vercel.app/api/webhook/purchase?platform=greenn`
- Copiar o payload de exemplo e mandar para o Claude ajustar o código

---

## FLUXO QUANDO ESTIVER TUDO PRONTO

```
Cliente compra na Greenn (R$29,90)
        ↓
Greenn dispara webhook para o app
        ↓
App cria conta no Supabase automaticamente
        ↓
Resend envia email com link de acesso
        ↓
Cliente clica → faz onboarding → instala app → começa protocolo
```

Sem Supabase/Resend, o fluxo funciona assim:
- Cliente acessa https://bioritmo-app.vercel.app diretamente
- Faz o onboarding manual
- Usa tudo normalmente (dados salvos no próprio celular)

---

## PLATAFORMAS CONFIGURADAS

| Plataforma | Status |
|---|---|
| Vercel (hospedagem) | ✅ Logado, projeto criado |
| GitHub | ✅ Código em okauarodriguez-dotcom/grupoaura |
| Greenn (checkout) | ⏳ Criar produto + webhook |
| Supabase (banco) | ⏳ Criar conta |
| Resend (email) | ⏳ Criar conta |
| Domínio bioritmo.com.br | ❌ Não comprado ainda |

---

## ARQUIVOS IMPORTANTES

| Arquivo | O que é |
|---|---|
| `bioritmo-app/supabase-schema.sql` | SQL pronto para rodar no Supabase |
| `bioritmo-app/.env.local` | Template das variáveis de ambiente |
| `bioritmo-app/deploy.sh` | Script de deploy automático |
| `produtos/bioritmo/pv-mockup.html` | Mockup visual da página de vendas (para montar no Inlead) |
| `produtos/bioritmo/pv-bioritmo.md` | Copy completa da página de vendas |
