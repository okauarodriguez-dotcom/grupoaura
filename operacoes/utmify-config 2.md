# UTMify — Config & Thresholds

Arquivo lido automaticamente pelas skills de análise de campanhas.
Atualize aqui quando mudar limites, produtos ou contas.

---

## Identificadores UTMify

```
dashboard_id: 692dea85f7eafd10a92b69cc
contas_habilitadas:
  - id: 2119845622124024
    nome: CA 01 - GRUPO AURA
  - id: 1642005943464722
    nome: BM US$ - Chama Ancestral
```

---

## Thresholds por Produto

### Chama Ancestral
```
cpa_limite: R$ 60,00
roas_breakeven: 1.5
roas_escala: 2.0
gasto_minimo_avaliacao: R$ 150,00
ticket_medio_esperado: R$ 90,00
margem_alvo: 40%
```

### NeuroHope / Neuroboost Protocol
```
cpa_limite: R$ 80,00
roas_breakeven: 1.6
roas_escala: 2.2
gasto_minimo_avaliacao: R$ 200,00
ticket_medio_esperado: R$ 130,00
margem_alvo: 45%
```

### OptiVell
```
cpa_limite: R$ 90,00
roas_breakeven: 1.7
roas_escala: 2.3
gasto_minimo_avaliacao: R$ 200,00
ticket_medio_esperado: R$ 150,00
margem_alvo: 45%
```

### NeuroDyne
```
cpa_limite: R$ 85,00
roas_breakeven: 1.6
roas_escala: 2.2
gasto_minimo_avaliacao: R$ 180,00
ticket_medio_esperado: R$ 135,00
margem_alvo: 42%
```

---

## Regras de Escala

```
condicoes_para_escalar:
  - roas >= roas_escala por 3 dias consecutivos
  - cpa <= cpa_limite com variacao < 20%
  - gasto_diario >= R$ 200,00
  - sem queda de ctr > 30% em 3 dias

aumento_sugerido_orcamento: 20% a 30% por vez
intervalo_minimo_entre_escalas: 3 dias
```

## Regras de Corte

```
condicoes_para_pausar:
  - gasto > gasto_minimo_avaliacao E zero vendas
  - cpa > 2x cpa_limite com mais de R$ 200 gastos
  - roas < roas_breakeven por 5 dias consecutivos
  - ctr < 0.6% com cpm crescente (saturacao)
```

## Regras de Alerta

```
alertas:
  - campanha gastou R$ 50 sem nenhuma venda → flag imediato
  - cpa subiu >40% em relacao a media dos 7 dias → aviso
  - cpm subiu >50% em relacao a media dos 7 dias → saturacao de publico
  - ctr < 0.8% → criativo fraco
  - roas < breakeven por mais de 2 dias → revisao urgente
  - campanha nova sem impressoes apos 3h → verificar revisao/aprovacao
```

---

## Meta Mensal (atualizar todo mês)

```
meta_faturamento_mensal: R$ 0,00   # preencher
meta_lucro_mensal: R$ 0,00          # preencher
meta_roas_medio: 2.0
budget_diario_total: R$ 0,00        # preencher
```

---

## Histórico de Metas

| Mês | Meta Fat. | Realizado | Meta Lucro | Realizado |
|-----|-----------|-----------|------------|-----------|
| Mar/26 | - | - | - | - |

---

*Última atualização: 2026-03-27*
