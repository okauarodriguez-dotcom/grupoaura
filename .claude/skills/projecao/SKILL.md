---
name: projecao
description: Projeção do mês — ritmo atual vs meta, estimativa de fechamento e o que precisa mudar para bater a meta.
---

Calcule a projeção de fechamento do mês com base no ritmo atual e compare com a meta.

## Contexto
- Dashboard ID: `692dea85f7eafd10a92b69cc`
- Contas: `2119845622124024` e `1642005943464722`
- Leia `operacoes/utmify-config.md` — meta mensal de faturamento, lucro e ROAS médio
- Timezone: GMT-3

## Fluxo

### 1. Buscar dados
- `get_dashboard_summary` — do dia 1 do mês atual até hoje
- `get_meta_ad_objects` nível `campaign`, status ACTIVE — últimos 7 dias (para ritmo recente)

### 2. Calcular projeção

Com base nos dados do mês até hoje:
- Dias decorridos no mês: X de Y dias totais
- Dias restantes: Z

Ritmo diário médio (últimos 7 dias vs média do mês):
- Faturamento/dia: R$ X
- Lucro/dia: R$ X
- Gasto/dia: R$ X

Projeção de fechamento = ritmo diário × dias restantes + acumulado até hoje

### 3. Exibir

```
# Projeção do Mês — [MÊS/ANO]

## Situação Atual
- Dias decorridos: X de Y ([Z dias restantes])
- Faturamento acumulado: R$ X
- Lucro acumulado: R$ X | Margem: X%
- Gasto acumulado: R$ X
- ROAS médio do mês: X

## Ritmo Atual (média últimos 7 dias)
- Faturamento/dia: R$ X
- Lucro/dia: R$ X
- Gasto/dia: R$ X

## Projeção de Fechamento (mantendo ritmo atual)
- Faturamento projetado: R$ X
- Lucro projetado: R$ X | Margem projetada: X%
- Gasto projetado: R$ X

## Vs Meta
| Métrica | Meta | Projeção | Diferença | Status |
|---------|------|----------|-----------|--------|
| Faturamento | R$ X | R$ X | [+/-X%] | ✅/⚠️/❌ |
| Lucro | R$ X | R$ X | [+/-X%] | ✅/⚠️/❌ |
| ROAS médio | X | X | [+/-X] | ✅/⚠️/❌ |

## Cenários

### Cenário Conservador (ritmo -20%)
- Faturamento: R$ X | Lucro: R$ X

### Cenário Base (ritmo atual)
- Faturamento: R$ X | Lucro: R$ X

### Cenário Otimista (ritmo +20% com escala)
- Faturamento: R$ X | Lucro: R$ X

## O Que Precisa Mudar Para Bater a Meta
[se a projeção estiver abaixo da meta, calcule:
- Quanto fatura por dia adicional é necessário
- Quais campanhas precisam ser escaladas
- Quanto budget adicional é necessário
- É realista nos dias restantes?]

## Recomendação
[ação clara: manter curso / escalar X campanha / ajustar meta / revisar orçamento]
```

### 4. Perguntar
"Quer que eu analise quais campanhas escalar para tentar fechar a meta?"
