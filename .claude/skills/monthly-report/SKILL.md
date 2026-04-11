---
name: monthly-report
description: Relatório executivo mensal — visão completa do mês com análise profunda de produtos, criativos, tendências e metas do próximo mês.
---

Você é o sistema de análise mensal do Claudio. Gere o relatório executivo do mês.

## Contexto
- Leia `operacoes/utmify-config.md` para thresholds, IDs e metas mensais
- Dashboard ID: `692dea85f7eafd10a92b69cc`
- Contas: `2119845622124024` e `1642005943464722`
- Leia os arquivos `campanhas/relatorio-semanal-*.md` do mês para contexto adicional
- Leia `decisoes/` — arquivos do mês para incluir decisões relevantes no relatório
- Timezone: GMT-3

## Fluxo de execução

### 1. Buscar dados
- `get_dashboard_summary` — mês completo (do dia 1 ao último dia do mês)
- `get_dashboard_summary` — mês anterior (para comparativo MoM)
- `get_meta_ad_objects` nível `campaign` — mês completo, orderBy `greater_profit`
- `get_meta_ad_objects` nível `ad` — mês completo, orderBy `greater_profit` (top criativos)
- `get_meta_ad_objects` nível `ad` — mês completo, orderBy `greater_loss` (criativos que queimaram dinheiro)

### 2. Montar o relatório mensal

```
# Relatório Mensal — [MÊS/ANO]

## Resumo Executivo
- Faturamento líquido: R$ X | Meta: R$ X | [X% da meta / X% acima da meta]
- Lucro líquido: R$ X | Meta: R$ X | Margem realizada: X%
- ROAS médio: X | Meta: X
- CPA médio: R$ X
- Gasto total em ads: R$ X
- Vendas aprovadas: X | Taxa de aprovação: X%
- Ticket médio: R$ X
- Taxa de reembolso: X%

## Comparativo Mês a Mês
| Métrica | Mês Anterior | Este Mês | Variação |
|---------|--------------|----------|----------|
| Faturamento | | | |
| Lucro | | | |
| ROAS | | | |
| CPA | | | |
| Gasto | | | |
| Vendas | | | |
| Ticket Médio | | | |

## Performance por Produto
| Produto | Vendas | Faturamento | CPA | ROAS | Margem |
|---------|--------|-------------|-----|------|--------|
[todos os produtos — ordenados por faturamento]

**Análise:** qual produto sustentou o mês, qual está saturando, qual tem potencial de escala.

## Top 10 Campanhas do Mês
| Campanha | Gasto | Vendas | CPA | ROAS | Lucro |
|----------|-------|--------|-----|------|-------|
[top 10 por lucro]

## Top 10 Criativos do Mês
| Criativo | Produto | Gasto | ROAS | CPA | CTR | Hook |
|----------|---------|-------|------|-----|-----|------|
[top 10 por ROAS]

## Criativos que Queimaram Dinheiro
| Criativo | Produto | Gasto | ROAS | CPA | Problema |
|----------|---------|-------|------|-----|----------|
[criativos com gasto > R$300 e ROAS < breakeven]

## Padrões dos Criativos Vencedores
[análise dos top criativos — o que eles têm em comum? Hook Rate, retenção, CTR, tipo de formato, ângulo]

## Distribuição por Meio de Pagamento
- Pix: X% das vendas | X% do faturamento
- Cartão: X% | X%
- Boleto: X% | X%

## Melhores Dias e Horários
[top dias da semana e horários com mais conversões — baseado em byDayOfWeek e byHour]

## Decisões do Mês
[lista as principais decisões registradas em decisoes/ durante o mês com contexto]

## Campanhas Encerradas no Mês
[lista o que foi pausado/arquivado e por quê]

## Lições Aprendidas
[3 a 5 aprendizados concretos do mês — baseados nos dados e nas decisões]

## Metas e Plano para o Próximo Mês
- Meta faturamento: R$ X
- Meta lucro: R$ X
- Foco de produto: [qual produto priorizar]
- Foco de criativo: [quais ângulos/hooks testar]
- Campanhas a lançar: [baseado no que está funcionando]
- Orçamento diário alvo: R$ X

---
*Relatório mensal gerado automaticamente — Claude Code + UTMify*
*[DATA DE GERAÇÃO]*
```

### 3. Salvar no vault
Salve em `campanhas/relatorio-mensal-[YYYY-MM].md`

### 4. Atualizar histórico de metas no config
Atualize a tabela de histórico em `operacoes/utmify-config.md` com os resultados do mês.

### 5. Retorno
Mostre o relatório e pergunte: **"Quer que eu monte as metas e o plano para o próximo mês com base nesses dados?"**
