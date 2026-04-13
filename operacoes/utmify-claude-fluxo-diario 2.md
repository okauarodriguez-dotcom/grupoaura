# Utmify + Claude — Fluxo de Uso Diário

## Objetivo
Usar a integração Claude + Utmify para tomar decisões de campanha mais rápidas e embasadas, sem depender de análise manual de planilhas.

---

## Rotina de manhã (review diário)

1. **Abre a Utmify** → acessa o painel de campanhas ativas
2. **Aciona o Claude** na plataforma e pede:
   > "Me dá um resumo das últimas 24h — quais campanhas estão no prejuízo, quais estão performando bem, e o que eu preciso ajustar hoje."
3. O Claude retorna o relatório com base nos dados da Utmify
4. **Você toma decisão** — pausar, escalar ou ajustar orçamento
5. Se for decisão relevante → registrar em `decisoes/YYYY-MM-DD-contexto.md`

---

## Quando olhar campanhas específicas

Use o Claude dentro da Utmify para perguntar sobre uma campanha específica:

> "Analisa a campanha [nome] — CPA, ROAS, tendência dos últimos 7 dias e o que você sugere."

O Claude cruza os dados e entrega a análise já formatada.

---

## Quando escalar orçamento

Antes de aumentar budget, pergunte ao Claude:

> "Baseado nos últimos 7 dias, essa campanha aguenta um aumento de orçamento? Qual o risco?"

Use a resposta como um segundo ponto de vista antes de mover dinheiro.

---

## Quando uma campanha está caindo

> "A campanha [nome] caiu de ontem pra hoje. O que os dados mostram? É tendência ou outlier?"

O Claude verifica se é queda consistente ou variação normal.

---

## Integrando com o vault

Quando o Claude na Utmify identificar um insight importante:
- Copie e cole em `campanhas/[campanha].md`
- Ou em `decisoes/` se virou uma decisão

Isso mantém o histórico vivo dentro do vault, não só na plataforma.

---

## Perguntas úteis para o Claude dentro da Utmify

| Situação | Pergunta |
|---|---|
| Review diário | "Resumo das últimas 24h — o que preciso ajustar hoje?" |
| Antes de escalar | "Essa campanha aguenta aumento de orçamento?" |
| Queda de performance | "Por que essa campanha caiu? É tendência?" |
| Visão geral da operação | "Qual o estado geral da operação essa semana?" |
| Alocação de verba | "Onde devo colocar mais orçamento hoje com base nos dados?" |

---

## Referências
- Setup da integração: [utmify-claude-integracao.md](./utmify-claude-integracao.md)
- Stack completa: [utmify-claude-integracao.md#stack-atual-de-ferramentas](./utmify-claude-integracao.md)
