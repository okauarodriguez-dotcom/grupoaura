---
name: reuniao-trafego
description: Gera a pauta completa para reunião com o trafegante — dados da semana, decisões pendentes e direcionamentos claros.
---

Gere a pauta completa para a reunião com o trafegante, baseada nos dados reais da UTMify.

## Contexto
- Dashboard ID: `692dea85f7eafd10a92b69cc`
- Contas: `2119845622124024` e `1642005943464722`
- Leia `operacoes/utmify-config.md` para thresholds e metas
- Leia `campanhas/` — arquivos recentes para contexto de testes em andamento
- Leia `decisoes/` — últimas decisões da semana
- Timezone: GMT-3

## Fluxo

### 1. Buscar dados
- `get_dashboard_summary` — últimos 7 dias
- `get_meta_ad_objects` nível `campaign`, status ACTIVE — últimos 7 dias, orderBy `greater_profit`
- `get_meta_ad_objects` nível `ad` — últimos 7 dias, orderBy `greater_profit` (top criativos)
- `get_meta_ad_objects` nível `ad` — últimos 7 dias, orderBy `greater_loss` (criativos para cortar)

### 2. Montar a pauta

```
# Pauta — Reunião de Tráfego
📅 [DATA] | Dashboard: @okauarodriguez

---

## 1. Resultado da Semana (5 min)

| Métrica | Esta Semana | Semana Anterior | Δ |
|---------|-------------|-----------------|---|
| Faturamento | R$ X | R$ X | X% |
| Lucro | R$ X | R$ X | X% |
| ROAS | X | X | |
| CPA | R$ X | R$ X | |
| Gasto | R$ X | R$ X | |

**Status geral:** [✅ Acima da meta / ⚠️ Na meta / ❌ Abaixo da meta]

---

## 2. Campanhas Ativas — Situação (10 min)

### Escalar
[campanhas que atendem critérios de escala — com sugestão de novo orçamento]

### Manter
[campanhas saudáveis sem ação necessária]

### Pausar / Ajustar
[campanhas problemáticas com dados que justificam a decisão]

---

## 3. Análise de Criativos (10 min)

### Top 5 da Semana
| Criativo | ROAS | CPA | CTR | Status |
|----------|------|-----|-----|--------|

### Bottom 5 (para pausar)
| Criativo | Gasto | ROAS | CPA | Motivo |
|----------|-------|------|-----|--------|

### Padrões identificados
- O que está funcionando: [hooks, formatos, ângulos]
- O que não está funcionando: [problemas recorrentes]

---

## 4. Novos Testes Para Esta Semana (10 min)

Com base nos dados, sugerir:
- [ ] Criativo 1: [ângulo sugerido baseado nos vencedores]
- [ ] Criativo 2: [variação do melhor criativo]
- [ ] Criativo 3: [teste de formato]

Produto prioritário para teste: [baseado em qual tem mais margem de escala]

---

## 5. Decisões a Tomar Hoje (5 min)

[lista de decisões que precisam sair desta reunião — com contexto de dados]

1. [decisão 1] — dados: [X]
2. [decisão 2] — dados: [X]

---

## 6. Próxima Reunião
- Data: [sugerir mesma data da próxima semana]
- O que trazer: [indicadores a monitorar até lá]
```

### 3. Salvar a pauta
Salve em `reunioes/[YYYY-MM-DD]-reuniao-trafego.md`

### 4. Perguntar
"Quer adicionar algum ponto específico à pauta antes da reunião?"
