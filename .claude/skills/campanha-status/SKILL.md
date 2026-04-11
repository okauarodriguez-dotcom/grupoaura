---
name: campanha-status
description: Status em tempo real de todas as campanhas ativas — gasto, vendas, ROAS, CPA e alertas imediatos.
---

Mostre o status atual de todas as campanhas ativas na UTMify.

## Contexto
- Dashboard ID: `692dea85f7eafd10a92b69cc`
- Contas habilitadas: `2119845622124024` e `1642005943464722`
- Leia `operacoes/utmify-config.md` para carregar os thresholds por produto
- Timezone: GMT-3

## Fluxo

### 1. Buscar dados
- `get_meta_ad_objects` nível `campaign`, adObjectStatuses `["ACTIVE"]`, dateRange = hoje

### 2. Para cada campanha ativa, calcular status semáforo
Compare as métricas com os thresholds do config:
- 🟢 **Saudável**: ROAS >= breakeven, CPA dentro do limite
- 🟡 **Atenção**: ROAS próximo ao breakeven (até 10% abaixo) ou CPA até 20% acima do limite
- 🔴 **Problema**: ROAS < breakeven ou CPA > 20% acima do limite ou gasto sem conversão

### 3. Exibir

```
# Campanhas Ativas — [HORA ATUAL]

| # | Campanha | Produto | Gasto Hoje | Vendas | CPA | ROAS | Status |
|---|----------|---------|-----------|--------|-----|------|--------|
[tabela completa com emoji de semáforo]

## 🔴 Ação Imediata Necessária
[campanhas que precisam de ação agora — pausa, ajuste de orçamento]

## 📊 Totais do Dia
- Gasto acumulado: R$ X
- Vendas aprovadas: X | Pendentes: X
- Faturamento líquido: R$ X
- ROAS médio ponderado: X
- CPA médio: R$ X
```

Se não houver campanhas com dados (zero gasto), informar que as campanhas podem estar em revisão ou ainda não entraram em veiculação hoje.
