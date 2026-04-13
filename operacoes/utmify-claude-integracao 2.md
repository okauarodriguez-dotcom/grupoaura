# Utmify + Claude — Integração

## O que é
A Utmify lançou integração nativa com o Claude (27/03/2026), permitindo análise inteligente das campanhas diretamente na plataforma. O Claude consegue acessar os dados de performance e entregar relatórios, identificar campanhas no prejuízo e sugerir ajustes operacionais.

---

## Como configurar

### Passo 1 — Acessar a integração
1. Entre na sua conta da Utmify
2. Vá em **Configurações** → **Integrações** (ou procure por "Claude" no menu)
3. Clique em **Conectar com Claude**

### Passo 2 — Autenticar
1. A Utmify vai redirecionar para o fluxo de autorização da Anthropic (Claude)
2. Faça login ou use sua conta existente
3. Autorize o acesso da Utmify aos seus dados

### Passo 3 — Confirmar a integração
1. De volta à Utmify, verifique se o status aparece como **Conectado**
2. Acesse algum relatório de campanha e veja se o botão do Claude está disponível

> Se tiver dúvida em algum passo, consulte o suporte da Utmify — a integração foi anunciada em 27/03/2026 e pode ter uma documentação própria na plataforma.

---

## O que o Claude faz dentro da Utmify

| Capacidade | Descrição |
|---|---|
| Relatórios completos | Visão geral da operação com métricas consolidadas |
| Campanhas no prejuízo | Identifica automaticamente o que está drenando orçamento |
| Destaques de performance | Aponta o que está funcionando bem |
| Sugestão de ajustes | Recomenda aumentos/cortes de orçamento com base nos dados |

---

## Fluxo de uso diário

Veja o arquivo [utmify-claude-fluxo-diario.md](./utmify-claude-fluxo-diario.md) para o processo operacional completo.

---

## Stack atual de ferramentas
- **Utmify** — rastreamento e métricas de campanhas
- **Claude (via Utmify)** — análise e decisões de otimização
- **Fathom** — gravação e transcrição de calls (ver [setup-automacao-fathom.md](./setup-automacao-fathom.md))
