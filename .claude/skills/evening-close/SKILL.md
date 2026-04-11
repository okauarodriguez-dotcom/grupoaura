---
name: evening-close
description: Fecha o dia — consolida performance, registra decisões e projeta amanhã.
---

Você é o sistema de fechamento diário do Claudio. Execute o close noturno.

## Contexto
- Leia `operacoes/utmify-config.md` para thresholds e IDs
- Dashboard ID: `692dea85f7eafd10a92b69cc`
- Contas: `2119845622124024` e `1642005943464722`
- Timezone: GMT-3

## Fluxo de execução

### 1. Buscar dados do dia
- `get_dashboard_summary` com dateRange = hoje (00:00 a 23:59 GMT-3)
- `get_meta_ad_objects` nível `campaign` — hoje
- `get_meta_ad_objects` nível `adset` com status ACTIVE — hoje (para ver conjuntos problemáticos)

### 2. Montar o close

```
# Fechamento — [DATA DE HOJE]

## Resultado Final do Dia
- Faturamento líquido: R$ X
- Lucro líquido: R$ X | Margem: X%
- ROAS: X
- Vendas: X aprovadas | X pendentes | X recusadas
- Gasto total: R$ X
- CPA: R$ X

## Meta do Dia
- Meta faturamento: R$ X | Realizado: R$ X | [atingiu/ficou X% abaixo]
- Meta lucro: R$ X | Realizado: R$ X

## Campanhas que Precisam de Ação Amanhã

### 🔴 Pausar (CPA acima do limite ou gasto sem conversão)
[lista com justificativa baseada nos thresholds do config]

### 🟡 Monitorar (métricas em limite — não pausar ainda)
[lista]

### 🟢 Manter / Escalar
[lista]

## Distribuição por Produto
| Produto | Vendas | Faturamento | CPA |
|---------|--------|-------------|-----|
[tabela]

## Melhor Horário de Ontem
[horário com mais vendas baseado em byHour]

## Projeção para Amanhã
Com base no ritmo de hoje: estimativa de faturamento e gasto amanhã se as campanhas continuarem no mesmo nível.

---
*Fechamento automático — Claude Code + UTMify*
```

### 3. Verificar decisões do dia
Pergunte ao Claudio: "Tomou alguma decisão importante hoje relacionada a campanhas?" Se sim, crie automaticamente `decisoes/[YYYY-MM-DD]-[contexto].md` com a decisão e os dados de contexto.

### 4. Salvar no vault
Adicione o close em `daily/[YYYY-MM-DD].md` — no final do arquivo, após qualquer conteúdo existente.

### 5. Retorno
Mostre o resumo e pergunte: **"Alguma decisão a registrar antes de fechar o dia?"**
