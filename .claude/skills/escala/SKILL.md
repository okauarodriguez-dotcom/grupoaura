---
name: escala
description: Identifica quais campanhas estão prontas para escalar hoje — com critérios objetivos e sugestão de novo orçamento.
---

Analise todas as campanhas ativas e identifique quais estão prontas para escalar com justificativa baseada em dados.

## Contexto
- Dashboard ID: `692dea85f7eafd10a92b69cc`
- Contas: `2119845622124024` e `1642005943464722`
- Leia `operacoes/utmify-config.md` — regras de escala e thresholds por produto
- Timezone: GMT-3

## Critérios de escala (do config)
- ROAS >= roas_escala do produto por consistência recente
- CPA <= cpa_limite com variação < 20%
- Gasto diário >= R$ 200
- Sem queda de CTR > 30% nos últimos 3 dias
- CPM estável (sem sinal de saturação)

## Fluxo

### 1. Buscar dados
- `get_meta_ad_objects` nível `campaign`, status ACTIVE — últimos 7 dias, orderBy `greater_profit`
- `get_meta_ad_objects` nível `campaign`, status ACTIVE — últimos 3 dias (para checar consistência)
- `get_meta_ad_objects` nível `campaign`, status ACTIVE — ontem (para CPM e CTR recentes)

### 2. Avaliar cada campanha ativa

Para cada campanha, verifique:
1. Qual produto está vinculado (pelo nome da campanha ou pelos dados)
2. Carregue os thresholds desse produto do config
3. Aplique os critérios de escala
4. Calcule a sugestão de novo orçamento (+20% a +30% do orçamento atual)

### 3. Exibir

```
# Análise de Escala — [DATA]

## ✅ PRONTAS PARA ESCALAR

### [Nome da Campanha]
- Produto: [X]
- Orçamento atual: R$ X/dia
- ROAS últimos 7 dias: X (limite para escala: X)
- ROAS últimos 3 dias: X (consistência: ✅)
- CPA: R$ X (limite: R$ X) — [X% abaixo do limite]
- CPM trend: [estável/subindo X%]
- CTR: X% — [estável/caindo X%]
- **Sugestão:** aumentar de R$ X para R$ X (+20%) — **ação: hoje**
- **Observação:** [qualquer ressalva importante]

[repetir para cada campanha elegível]

---

## ⚠️ PRÓXIMAS DA ESCALA (mais 2-3 dias de dados)

[campanhas que estão quase elegíveis — o que falta para escalar]

---

## ❌ NÃO ESCALAR AGORA
[campanhas ativas que não atendem os critérios e por quê]

---

## Resumo de Ação
| Campanha | Ação | Orçamento Atual | Novo Orçamento |
|----------|------|-----------------|----------------|
[tabela de ações]
```

### 4. Registrar decisão
Se o Claudio confirmar que vai escalar, crie automaticamente `decisoes/[YYYY-MM-DD]-escala-[campanha].md` com os dados e a justificativa.

### 5. Perguntar
"Quer que eu registre as escalas que você aprovar?"
