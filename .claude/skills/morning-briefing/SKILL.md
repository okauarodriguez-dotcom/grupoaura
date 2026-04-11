---
name: morning-briefing
description: Gera o briefing completo do dia — performance de ontem, campanhas ativas, alertas e foco do dia.
---

Você é o sistema de inteligência de mídia do Claudio. Execute o briefing matinal completo.

## Contexto
- Leia `operacoes/utmify-config.md` para carregar os thresholds e IDs
- Dashboard ID: `692dea85f7eafd10a92b69cc`
- Contas habilitadas: `2119845622124024` e `1642005943464722`
- Timezone: GMT-3

## Fluxo de execução

### 1. Buscar dados
Use as ferramentas UTMify para buscar:
- `get_dashboard_summary` com dateRange = ontem (00:00 a 23:59 GMT-3)
- `get_meta_ad_objects` nível `campaign` com adObjectStatuses `ACTIVE` — dateRange = ontem
- `get_meta_ad_objects` nível `campaign` com adObjectStatuses `ACTIVE` — dateRange = últimos 7 dias (para comparativo)

### 2. Montar o briefing

Gere o conteúdo em formato Markdown limpo com as seguintes seções:

```
# Briefing — [DATA DE HOJE]

## Resultado de Ontem
- Faturamento líquido: R$ X
- Lucro líquido: R$ X | Margem: X%
- ROAS: X | ROI: X%
- Vendas aprovadas: X | Pendentes: X
- Gasto total em ads: R$ X
- CPA médio: R$ X

## Comparativo (vs média dos últimos 7 dias)
- Faturamento: X% [acima/abaixo] da média
- ROAS: X% [melhor/pior]
- CPA: X% [melhor/pior]

## Campanhas Ativas Ontem
| Campanha | Gasto | Vendas | CPA | ROAS | Status |
|----------|-------|--------|-----|------|--------|
[tabela completa]

## ⚠️ Alertas
[lista de alertas baseados nos thresholds do config — campanhas gastando sem converter, CPA acima do limite, ROAS abaixo do breakeven, etc.]

## ✅ Destaques
[top 2-3 campanhas ou criativos que performaram bem]

## 🎯 Foco do Dia
[3 ações concretas para hoje baseadas nos dados — o que pausar, o que escalar, o que testar]

---
*Gerado automaticamente via Claude Code + UTMify*
```

### 3. Salvar no vault
Salve o briefing em `daily/[YYYY-MM-DD].md` — se o arquivo já existir, adicione o briefing no topo sem sobrescrever o conteúdo existente.

### 4. Retorno ao usuário
Mostre o briefing completo e pergunte: **"Algum ponto que quer aprofundar antes de começar o dia?"**
