---
name: alertas
description: Varredura de alertas em todas as campanhas ativas — detecta problemas, anomalias e oportunidades imediatas.
---

Execute uma varredura completa de alertas em todas as campanhas e anúncios ativos.

## Contexto
- Dashboard ID: `692dea85f7eafd10a92b69cc`
- Contas: `2119845622124024` e `1642005943464722`
- Leia `operacoes/utmify-config.md` — regras de alerta e thresholds por produto
- Timezone: GMT-3

## Fluxo

### 1. Buscar dados
- `get_meta_ad_objects` nível `campaign`, status ACTIVE — hoje
- `get_meta_ad_objects` nível `campaign`, status ACTIVE — últimos 7 dias (para comparativo)
- `get_meta_ad_objects` nível `adset`, status ACTIVE — hoje (para detectar conjuntos problemáticos)

### 2. Verificar cada alerta do config

Para cada campanha/conjunto ativo, verifique:

**Alertas críticos (ação imediata):**
- Campanha gastou R$ 50+ hoje sem nenhuma venda
- CPA hoje > 3x o limite do produto
- ROAS hoje < 0.8 (menos de 80 centavos de retorno por real gasto)
- Campanha nova sem impressões após 3 horas de criação

**Alertas de atenção (monitorar):**
- CPA subiu >40% vs média dos últimos 7 dias
- CPM subiu >50% vs média dos últimos 7 dias (saturação de público)
- CTR < 0.8% com mais de 10.000 impressões
- ROAS abaixo do breakeven por 2+ dias consecutivos
- Taxa de recusa de cartão > 30%

**Oportunidades (ação positiva):**
- Campanha com ROAS > roas_escala por 3+ dias — pronta para escalar
- Criativo com CTR > 2% e CPA abaixo do limite — replicar ângulo
- Horário de pico identificado — concentrar budget

### 3. Exibir

```
# Varredura de Alertas — [DATA] [HORA]

## 🚨 CRÍTICO (ação imediata)
[se houver alertas críticos — listar com dados e ação recomendada]
[se não houver — "Nenhum alerta crítico no momento ✅"]

## ⚠️ ATENÇÃO (monitorar)
[alertas de atenção com dados]

## 💡 OPORTUNIDADES
[campanhas com sinal positivo — o que aproveitar]

---

## Resumo
- Campanhas sem problema: X
- Campanhas em atenção: X
- Campanhas com alerta crítico: X
- Próxima varredura recomendada: [hora sugerida]
```

### 4. Salvar no inbox se houver alertas críticos
Se houver alertas críticos, crie `inbox/alertas-[YYYY-MM-DD-HHMM].md` com o conteúdo para não perder o registro.

### 5. Retorno
Se não houver alertas críticos, diga: "Operação limpa — sem problemas identificados agora."
Se houver, pergunte: "Quer que eu aprofunde algum dos alertas?"
