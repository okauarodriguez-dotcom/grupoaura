---
name: corte
description: Identifica campanhas e conjuntos que devem ser pausados hoje — com justificativa objetiva baseada nos thresholds.
---

Analise todas as campanhas e conjuntos ativos e identifique o que deve ser cortado ou ajustado agora.

## Contexto
- Dashboard ID: `692dea85f7eafd10a92b69cc`
- Contas: `2119845622124024` e `1642005943464722`
- Leia `operacoes/utmify-config.md` — regras de corte e thresholds por produto
- Timezone: GMT-3

## Critérios de corte (do config)
- Gasto > gasto_minimo_avaliacao E zero vendas
- CPA > 2x cpa_limite com mais de R$ 200 gastos
- ROAS < roas_breakeven por 5 dias consecutivos
- CTR < 0.6% com CPM crescente (sinal de saturação de público)

## Fluxo

### 1. Buscar dados
- `get_meta_ad_objects` nível `campaign`, status ACTIVE — hoje
- `get_meta_ad_objects` nível `campaign`, status ACTIVE — últimos 7 dias (para verificar consistência)
- `get_meta_ad_objects` nível `adset`, status ACTIVE — últimos 7 dias, orderBy `greater_loss` (para conjuntos problemáticos dentro de campanhas saudáveis)

### 2. Avaliar cada objeto e classificar

Para cada campanha/conjunto, aplique os critérios de corte. Classifique em:
- **CORTAR HOJE**: atende critérios claros de corte
- **PAUSAR PARA REVISÃO**: métricas ruins mas sem dados suficientes — aguardar mais X horas/dias
- **AJUSTAR** (não pausar): algo específico está errado mas a campanha tem potencial

### 3. Exibir

```
# Análise de Corte — [DATA]

## 🔴 CORTAR HOJE

### [Nome da Campanha/Conjunto]
- Nível: [campanha/conjunto]
- Produto: [X]
- Gasto: R$ X | Vendas: X | CPA: R$ X (limite: R$ X)
- ROAS: X (breakeven: X)
- Dados dos últimos 7 dias: [resumo da tendência]
- **Motivo do corte:** [critério específico que foi atingido]
- **Prejuízo estimado se continuar**: R$ X/dia
- **Ação:** pausar imediatamente

[repetir para cada objeto a cortar]

---

## 🟡 PAUSAR PARA REVISÃO (aguardar mais dados)

### [Nome]
- Situação: [o que está acontecendo]
- O que esperar: [mais X horas/R$ X de gasto]
- Decisão final: [data/hora sugerida para reavaliar]

---

## 🔧 AJUSTAR (não pausar)

### [Nome]
- Problema identificado: [ex: conjunto com público muito amplo, criativo com CTR caindo]
- Ajuste sugerido: [ação específica]

---

## Resumo de Impacto
- Gasto salvo por dia ao cortar: R$ X
- Campanhas afetadas: X
- Conjuntos afetados: X
```

### 4. Registrar decisões
Se o Claudio confirmar cortes, registre em `decisoes/[YYYY-MM-DD]-corte-[campanha].md` com os dados que justificaram a decisão.

### 5. Perguntar
"Confirma os cortes? Posso registrar as decisões automaticamente."
