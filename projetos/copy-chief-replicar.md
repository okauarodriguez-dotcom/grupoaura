# Como Replicar o Copy Chief Ecosystem

> Baseado na análise do sistema em https://jarvis-copychief.vercel.app  
> Data: 2026-04-02

---

## O Que É Na Prática

O Copy Chief é um **setup avançado do Claude Code** — não é uma plataforma SaaS, não é um app separado. É uma configuração sofisticada do Claude Code usando:

- **Skills** (agentes com persona e contexto isolado)
- **Hooks** (automações que executam em eventos do Claude Code)
- **MCPs** (ferramentas TypeScript que o Claude pode chamar)
- **Rules** (arquivos de regras com carregamento contextual)
- **YAML state files** (persistência de estado entre sessões)

**Boa notícia:** Você já tem o Claude Code instalado e funcional (você está usando agora). A infraestrutura base já existe. O que o Luca e o Collin fizeram foi construir a camada de copywriting em cima disso.

---

## Plano de Replicação — 5 Fases

### FASE 1 — Fundação (1-2 dias)
**Configurar a estrutura base de arquivos**

```
c:/Users/Desktop/Downloads/grupoaura/
  .claude/
    skills/        ← criar skills dos agentes
    rules/         ← criar regras contextuais
    hooks/         ← criar hooks de enforcement
```

**O que fazer:**
- [ ] Criar pasta `.claude/skills/` dentro do grupoaura
- [ ] Criar pasta `.claude/rules/`
- [ ] Criar pasta `.claude/hooks/`
- [ ] Criar o arquivo HELIX — protocolo de 10 fases adaptado para seus nichos

---

### FASE 2 — Skills dos Agentes (3-5 dias)
**Criar os 13 agentes como skills do Claude Code**

Cada skill é um arquivo Markdown em `.claude/skills/` com a persona, escopo e comandos do agente.

**Prioridade 1 — Agentes essenciais:**
1. `helix.md` — orquestrador central
2. `atlas.md` — briefer (10 fases HELIX)
3. `vox.md` — pesquisador de VOC
4. `hawk.md` — crítico de qualidade

**Prioridade 2 — Produção:**
5. `echo.md` — produtor de VSL
6. `forge.md` — produtor de Landing Page
7. `scout.md` — criativos
8. `blade.md` — emails

**Prioridade 3 — Infraestrutura:**
9. `cipher.md` — ads spy
10. `sentinel.md` — gatekeeper
11. `spark.md` — reels
12. `strategist.md` — estratégia de funil
13. `ops.md` — operações

**Formato de um skill (exemplo para @atlas):**
```markdown
---
name: atlas
description: Briefer HELIX — conduz as 10 fases do briefing estratégico
triggers: ["@atlas", "/atlas", "@briefer"]
---

Você é Atlas, o Briefer do Copy Chief BLACK.

Sua autoridade exclusiva: conduzir as 10 fases do HELIX System.

[persona, regras, comandos...]
```

---

### FASE 3 — Knowledge Base (2-3 dias)
**Criar os arquivos de referência dos frameworks**

Estes são os arquivos que o sistema consulta durante o briefing e validação.

```
.claude/rules/
  metodologias.md        — 7 frameworks (Puzzle Pieces, RMBC II, etc.)
  dre-emocoes.md         — DRE + escalada emocional + amplificadores
  mecanismo-formula.md   — fórmula MUP/MUS, 5 funções obrigatórias
  anti-homogeneizacao.md — palavras banidas por nicho
  vsl-estrutura.md       — estrutura de VSL (6 tipos de capítulo)
  copy-gates.md          — critérios de validação por gate
```

---

### FASE 4 — MCP Tools (5-7 dias)
**Construir as 10 ferramentas TypeScript**

Esta é a parte mais técnica. As MCP Tools são servidores TypeScript que o Claude chama via protocolo MCP.

**Ferramentas mais críticas para construir primeiro:**
1. `validate_gate` — bloqueia avanço sem critérios cumpridos
2. `blind_critic` — crítica de copy sem saber o contexto
3. `emotional_stress_test` — valida se a One Belief sustenta
4. `voc_search` — busca na base de VOC indexada
5. `validate_mecanismo` — verifica 5 critérios do MUP/MUS

**Stack para construir:**
- TypeScript + Node.js
- MCP SDK da Anthropic ([@modelcontextprotocol/sdk](https://github.com/modelcontextprotocol/typescript-sdk))
- Cada tool é uma função com input/output bem definidos

**Alternativa de curto prazo:** Implementar as tools como arquivos Markdown de referência que o Claude lê — menos automático, mas funciona enquanto as tools reais não estão prontas.

---

### FASE 5 — Hooks e Enforcement (2-3 dias)
**Criar automações que garantem o processo**

Hooks são scripts que executam em eventos do Claude Code:
- `PreToolUse` — antes de executar uma tool
- `PostToolUse` — depois de executar uma tool
- `Stop` — ao encerrar a sessão (você já usa isso no CLAUDE.md)

**Hooks prioritários:**
```bash
# validate-gate-prereq — bloqueia avanço sem ferramentas obrigatórias
# phase-advance-gate — bloqueia pulo de fases no HELIX
# track-tools-used — registra ferramentas usadas no helix-state.yaml
# dre-check — verifica se DRE foi definida antes de produção
```

---

## Estrutura de Pastas para as Ofertas

```
grupoaura/
  campanhas/
    [nicho]/
      [oferta]/
        helix-state.yaml   ← estado do pipeline
        research/
          voc.md           ← quotes do avatar
          avatar.md        ← perfil profundo
          competitors.md   ← análise de concorrentes
          synthesis.md     ← síntese estratégica
        briefing/
          phase-01-identificacao.md
          phase-02-mineracao.md
          phase-03-avatar.md
          phase-04-consciencia.md
          phase-05-problema-vilao-mup.md
          phase-06-solucao-mus.md
          phase-07-one-belief.md
          phase-08-hooks-leads.md
          phase-09-oferta.md
          phase-10-garantia.md
          mecanismo-unico.yaml
        production/
          vsl.md
          landing-page.md
          criativos.md
          emails.md
```

---

## Versão MVP — Começar Agora Sem Código

Enquanto as MCP tools não estão prontas, você pode ter **80% do valor** com:

### 1. HELIX como template manual
Criar um arquivo `helix-template.md` com as 10 fases estruturadas. Preencher manualmente com @atlas antes de qualquer produção.

### 2. Skills básicas dos 4 agentes essenciais
- @atlas (briefer)
- @vox (pesquisa VOC)
- @echo (VSL)
- @hawk (validação)

### 3. Checklist de gates (em Markdown)
- Research gate: VOC ✓ | Avatar ✓ | Concorrentes ✓
- Briefing gate: 10 fases ✓ | MUP validado ✓ | MUS validado ✓
- Production gate: Blind critic ✓ | Stress test emocional ✓
- Delivery gate: Score >= 8 nas 5 Lentes ✓

### 4. helix-state.yaml manual
Manter um arquivo YAML por oferta rastreando qual fase está e quais gates passaram.

---

## Recursos Necessários

| Recurso | Onde Conseguir | Custo |
|---------|---------------|-------|
| Claude Code | Já instalado | — |
| MCP SDK (TypeScript) | npm install @modelcontextprotocol/sdk | Gratuito |
| Apify | apify.com | Pago (por uso) |
| Firecrawl | firecrawl.dev | Pago (por uso) |
| Facebook Ad Library MCP | Open source disponível | Gratuito |
| Node.js | nodejs.org | Gratuito |

---

## Próximos Passos Imediatos

1. **Hoje:** Ler e internalizar o HELIX System (10 fases). Isso é a base de tudo.
2. **Esta semana:** Criar as 4 skills prioritárias (@atlas, @vox, @echo, @hawk)
3. **Próxima semana:** Criar a Knowledge Base (arquivos de referência dos frameworks)
4. **Mês 1:** Rodar o primeiro pipeline completo manualmente para uma oferta real
5. **Mês 2:** Construir as MCP tools e automatizar os gates

---

## Decisão Estratégica

> Replicar o sistema faz sentido porque: (1) você já tem o Claude Code instalado, (2) você já tem o contexto de DR que alimentaria o sistema, (3) o Luca e o Collin provaram que funciona, (4) você tem os frameworks base (Puzzle Pieces, RMBC II, etc.) na memória dos copywriters que trabalhou.

A diferença entre o Copy Chief BLACK e um Claude genérico é a **restrição**: cada agente tem escopo limitado, gates que bloqueiam, e frameworks embutidos. Copy boa vem de processo, não de criatividade aleatória.

---

## Links e Referências
- Site completo: https://jarvis-copychief.vercel.app
- [[copy-chief-ecosystem]] — análise completa do sistema
- MCP SDK: https://github.com/modelcontextprotocol/typescript-sdk

---

#projetos #copy #ia #claude #direct-response #sistema #replicar
