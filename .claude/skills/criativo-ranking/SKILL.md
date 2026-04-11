---
name: criativo-ranking
description: Ranking completo de criativos da semana — top performers, bottom performers e padrões identificados.
---

Mostre o ranking completo de criativos com análise de padrões.

## Contexto
- Dashboard ID: `692dea85f7eafd10a92b69cc`
- Contas: `2119845622124024` e `1642005943464722`
- Leia `operacoes/utmify-config.md` para thresholds
- Timezone: GMT-3
- Período padrão: últimos 7 dias (ajuste se o usuário especificou outro período)

## Fluxo

### 1. Buscar dados
- `get_meta_ad_objects` nível `ad` — últimos 7 dias, orderBy `greater_profit`
- `get_meta_ad_objects` nível `ad` — últimos 7 dias, orderBy `greater_loss`

### 2. Exibir ranking

```
# Ranking de Criativos — [PERÍODO]

## 🏆 Top 10 Criativos (por ROAS)
| # | Criativo | Campanha | Gasto | Vendas | CPA | ROAS | CTR | Hook% | Retenção |
|---|----------|----------|-------|--------|-----|------|-----|-------|----------|
[top 10 — use hook rate (videoViews3Seconds/impressions) e retention (video75Watched/videoViews) se disponível]

## 💸 Bottom 10 Criativos (maior prejuízo)
| # | Criativo | Campanha | Gasto | Vendas | CPA | ROAS | Problema |
|---|----------|----------|-------|--------|-----|------|----------|
[bottom 10 — identifique o problema principal: CTR baixo? CPA alto? Zero conversão?]

## 📊 Análise de Padrões

### O que os vencedores têm em comum
[analise os top criativos — CTR médio, hook rate médio, formato (se identificável pelo nome), ângulo]

### O que os perdedores têm em comum
[analise os bottom criativos — onde estão queimando dinheiro: no clique? No checkout? Taxa de recusa?]

## 🎯 Recomendações
- Criativos para escalar: [lista com justificativa]
- Criativos para pausar agora: [lista com justificativa baseada nos thresholds]
- Criativos para testar variação: [baseado nos vencedores — sugerir o que testar]
```

### 3. Verificar arquivos em campanhas/criativos/
Se existirem arquivos de tracking de criativos em `campanhas/criativos/`, atualize as métricas dos criativos mencionados com os dados desta busca.

### 4. Perguntar
"Quer que eu crie o arquivo de tracking de algum criativo específico em campanhas/criativos/?"
