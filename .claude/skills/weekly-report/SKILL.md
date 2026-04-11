---
name: weekly-report
description: Relatório semanal completo — performance, criativos, produtos, decisões e próximos passos.
---

Você é o sistema de análise semanal do Claudio. Gere o relatório completo da semana.

## Contexto
- Leia `operacoes/utmify-config.md` para thresholds e IDs
- Dashboard ID: `692dea85f7eafd10a92b69cc`
- Contas: `2119845622124024` e `1642005943464722`
- Timezone: GMT-3
- "Semana" = domingo a sábado (ou os últimos 7 dias se chamado manualmente)

## Fluxo de execução

### 1. Buscar dados
- `get_dashboard_summary` — últimos 7 dias
- `get_dashboard_summary` — 7 dias anteriores (para comparativo semana a semana)
- `get_meta_ad_objects` nível `campaign` — últimos 7 dias, orderBy `greater_profit`
- `get_meta_ad_objects` nível `ad` — últimos 7 dias, orderBy `greater_profit` (top e bottom criativos)

### 2. Montar o relatório

```
# Relatório Semanal — [DATA_INICIO] a [DATA_FIM]

## Resumo Executivo
- Faturamento líquido: R$ X | vs semana anterior: [+/-X%]
- Lucro líquido: R$ X | Margem: X%
- ROAS médio: X | vs semana anterior: [+/-X%]
- CPA médio: R$ X | vs semana anterior: [+/-X%]
- Gasto total em ads: R$ X
- Vendas aprovadas: X | Taxa de aprovação: X%

## Performance por Campanha
| Campanha | Gasto | Vendas | CPA | ROAS | Lucro | Status |
|----------|-------|--------|-----|------|-------|--------|
[todas as campanhas ativas da semana, ordenadas por lucro]

## Top 5 Criativos (por ROAS)
| Criativo | Campanha | Gasto | ROAS | CPA | CTR | Hook Rate |
|----------|----------|-------|------|-----|-----|-----------|
[top 5 anúncios]

## Bottom 5 Criativos (mais caros ou sem conversão)
| Criativo | Campanha | Gasto | ROAS | CPA | Observação |
|----------|----------|-------|------|-----|------------|
[bottom 5 anúncios com custo e problema]

## Performance por Produto
| Produto | Vendas | Faturamento | CPA médio | ROAS médio |
|---------|--------|-------------|-----------|------------|
[breakdown por produto]

## Análise de Saturação
[verificar CPM desta semana vs semana anterior — se subiu >30%, sinalizar saturação de público por campanha]

## Melhores Horários da Semana
[top 3 horários com mais conversões — dado byHour do summary]

## Comparativo Semana a Semana
| Métrica | Semana Passada | Esta Semana | Variação |
|---------|---------------|-------------|----------|
| Faturamento | | | |
| Lucro | | | |
| ROAS | | | |
| CPA | | | |
| Gasto | | | |

## Decisões da Próxima Semana
[3 a 5 decisões claras baseadas nos dados — o que testar, o que escalar, o que cortar, qual produto priorizar]

## Criativos para Criar
[com base nos bottom performers e no que está funcionando — sugerir novos ângulos/hooks para testar]

---
*Relatório gerado automaticamente — Claude Code + UTMify*
```

### 3. Salvar no vault
Salve em `campanhas/relatorio-semanal-[YYYY]-W[XX].md`

### 4. Verificar campanhas que devem ser encerradas
Se houver campanhas que ficaram no prejuízo a semana inteira, gere automaticamente o post-mortem em `archive/campanha-[nome]-[data].md` com: período, gasto total, vendas, CPA final, e aprendizado.

### 5. Retorno
Mostre o relatório completo e pergunte: **"Quer aprofundar alguma campanha ou produto específico?"**
