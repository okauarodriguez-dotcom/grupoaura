---
name: produto
description: Análise completa de um produto específico — histórico, CPA, saturação, criativos e recomendação.
---

Execute a análise completa de um produto. Se o usuário não especificou o produto, pergunte qual.

Produtos disponíveis: Chama Ancestral, NeuroHope, Neuroboost Protocol, OptiVell, NeuroDyne

## Contexto
- Dashboard ID: `692dea85f7eafd10a92b69cc`
- Contas: `2119845622124024` e `1642005943464722`
- Leia `operacoes/utmify-config.md` para os thresholds do produto solicitado
- Leia o arquivo `produtos/[nome-do-produto].md` se existir — para contexto histórico
- Timezone: GMT-3

## Fluxo

### 1. Buscar dados
- `get_meta_ad_objects` nível `campaign`, productNames = [produto solicitado], dateRange = últimos 30 dias
- `get_meta_ad_objects` nível `ad`, productNames = [produto solicitado], dateRange = últimos 30 dias, orderBy `greater_profit`
- `get_dashboard_summary`, productNames = [produto solicitado], dateRange = últimos 30 dias
- `get_dashboard_summary`, productNames = [produto solicitado], dateRange = mês anterior (para comparativo)

### 2. Montar a análise

```
# Análise de Produto — [PRODUTO] — [DATA]

## Visão Geral (últimos 30 dias)
- Faturamento: R$ X
- Lucro: R$ X | Margem: X%
- ROAS médio: X | Breakeven: X
- CPA médio: R$ X | Limite: R$ X
- Vendas: X aprovadas | X pendentes | X reembolsadas
- Taxa de reembolso: X%
- Ticket médio: R$ X
- Gasto total em ads: R$ X

## Comparativo com Mês Anterior
| Métrica | Mês Passado | Últimos 30 dias | Tendência |
|---------|-------------|-----------------|-----------|
| CPA | | | 📈/📉 |
| ROAS | | | |
| Vendas | | | |
| Ticket Médio | | | |

## Sinais de Saturação
- CPM médio últimos 30 dias vs período anterior: [subida % = sinal de saturação]
- CTR médio: X% — [saudável / queda preocupante]
- Frequência média: X — [aceitável / muito alta]
- **Diagnóstico:** [saturado / saudável / crescendo]

## Campanhas Ativas para Este Produto
| Campanha | Gasto | CPA | ROAS | Status |
|----------|-------|-----|------|--------|
[todas as campanhas com este produto nos últimos 30 dias]

## Top 5 Criativos do Produto
| Criativo | Gasto | CPA | ROAS | CTR | Hook |
|----------|-------|-----|------|-----|------|
[top 5 por ROAS]

## Distribuição por Meio de Pagamento
- Pix: X% | Cartão: X% | Boleto: X%
- Horário de pico: [horário com mais vendas]

## Diagnóstico Geral
[análise integrada: o produto está em qual fase? Crescimento, pico, saturação ou queda? O que os dados dizem sobre a viabilidade de continuar escalando?]

## Recomendações
1. [ação concreta 1]
2. [ação concreta 2]
3. [ação concreta 3]
```

### 3. Atualizar arquivo do produto
Salve ou atualize `produtos/[nome-do-produto].md` com o snapshot atual, mantendo histórico.

### 4. Perguntar
"Quer que eu analise os criativos deste produto com mais profundidade ou compare com outro produto?"
