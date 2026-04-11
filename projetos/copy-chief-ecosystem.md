# Copy Chief Ecosystem — JARVIS SYSTEM v49.6.0

> Sistema criado por Luca + Lucas Collin (ex-copywriters do Grupo Aura).  
> Site: https://jarvis-copychief.vercel.app  
> Capturado em: 2026-04-02 (conteúdo completo)

---

## O Que É

O **Copy Chief BLACK** é um ecossistema de agentes de IA construído sobre o **Claude Code** que transforma o Claude em um copywriter especializado de Direct Response. A analogia usada é o Jarvis do Tony Stark: você dá as ordens estratégicas, o squad executa o trabalho pesado.

**Números do sistema:**
- 11 Skills
- 42 Commands
- 8 MCP v2.0
- 65 Hooks
- 13 Agentes especializados
- 10 MCP Tools internas (TypeScript)
- 59 tasks no Task-MCP Matrix
- 4 Workflows pré-configurados

**A frase central:**  
*"Skills, MCPs e hooks que transformam Claude em copywriter de Direct Response"*

**Como ativar:**
```bash
# Abrir da raiz do ecossistema
$ cd ~/copywriting-ecosystem && claude

# Ativar o orquestrador
> @helix

# Iniciar pesquisa de audiência
> *run-workflow audience-research oferta=oferta-exemplo

# Executar briefing HELIX completo (10 fases, 3 sessões)
> *helix-full
```

---

## Arquitetura em 10 Camadas

```
Camada 10: Knowledge Base (helix-ref, craft, critic, leads, lp, creative)
Camada 9:  Rules (.claude/rules/ — carregamento contextual automático)
Camada 8:  Hooks (65 automações — enforcement, tracking, proteção)
Camada 7:  MCP Tools (10 ferramentas TypeScript de copywriting)
Camada 6:  HELIX System (10 fases, template-driven)
Camada 5:  Task-MCP Matrix (59 tasks com execution_context mapeado)
Camada 4:  Copy Squad (13 agentes, 2 tiers, 1 orquestrador)
Camada 3:  SYNAPSE (context engine — budget, injeção, brackets)
Camada 2:  AIOX Framework (orquestração multi-agente, story-driven dev)
Camada 1:  Constitution (princípios inegociáveis — a gravidade do sistema)
```

**O princípio:** cada camada superior depende das inferiores. Hierarquia é mecanismo de enforcement, não decoração.

### Constitution — Princípios Fundadores da Arquitetura

```
CONSTITUTION ── Princípios inegociáveis
                DRE-First, Visceral > Lógico, CLI First, No Invention.
                Gates automáticos bloqueiam violações.

AIOX FRAMEWORK ── Orquestração multi-agente
                  Story-driven development, agent authority matrix,
                  boundary rules L1-L4, hooks de enforcement.

SYNAPSE ── Context engine
           Injeta regras dinamicamente por fase via manifest YAML.
           Cada agente recebe apenas o contexto que precisa.

MCP TOOLS (10) ── Ferramentas especializadas por agente
                  voc_search, get_phase_context, validate_gate,
                  blind_critic, emotional_stress_test, write_chapter,
                  layered_review, black_validation, validate_mecanismo,
                  semantic_memory_search.

TASK-MCP MATRIX ── 59 tasks mapeadas em 3 contextos de execução
                   inline / subagent / direct — sem ambiguidade.

HOOKS (65) ── Automações que interceptam ações e forçam qualidade
              PreToolUse, PostToolUse, Stop, PreCompact.
              Sem escapatória.
```

**Filosofia de design:**
- *"Separar PENSAR de ESCREVER"* — 3-4h de análise estratégica antes de uma única palavra de copy
- **DRE-First** — Toda copy começa pela Dor/Raiva/Emoção do avatar. Lógica e benefícios vêm depois
- **Visceral > Lógico** — O sistema rejeita copy que explica quando deveria fazer sentir. Genericidade Score < 8 = refazer
- **CLI First** — Toda inteligência vive no terminal. Dashboards apenas observam

---

## Pipeline — 4 Gates Obrigatórios

```
IDLE
  │
  ▼ RESEARCH GATE
RESEARCH ────── VOC ✓  Avatar Profile ✓  Competitors ✓  Synthesis ✓
  │
  ▼ BRIEFING GATE
BRIEFING ─────── HELIX 10/10 fases ✓  MUP/MUS validados ✓  BLACK checks ✓
  │
  ▼ PRODUCTION GATE
PRODUCTION ───── Copy deliverables ✓  Hawk review PASS ✓
  │
  ▼ DELIVERY GATE
DELIVERED ─────── Final packaging ✓  Brand ✓
```

| Gate | O que valida | Responsável |
|------|-------------|-------------|
| RESEARCH | VOC, perfil avatar, análise concorrentes, synthesis.md | Vox + Cipher |
| BRIEFING | 10 fases HELIX completas, MUP/MUS aprovados, checks BLACK | Atlas + Sentinel |
| PRODUCTION | Todos deliverables de copy, Hawk review PASS | Echo/Forge/Scout/Blade + Hawk |
| DELIVERY | Pacote final, brand review, pronto para publicação | Ops + Sentinel |

**Critérios detalhados dos gates:**
- Research Gate: 200+ quotes VOC, 10+ ads analisados, avatar validado
- Briefing Gate: MUP + MUS aprovados, Mecanismo Único validado, 10 fases completas
- Production Gate: blind_critic ≥ 8, EST aprovado, BLACK validation aprovada
- Delivery Gate: consistência em 5 lentes, zero genericidade, tom aprovado

### Bloqueio por Path — Segunda Camada de Proteção

| Escrita em | Pré-condição | Se falhar |
|-----------|-------------|---------- |
| research/ | Nenhuma | Livre — pesquisa sempre permitida |
| briefings/ | gates.research = true | BLOQUEADO |
| production/ | gates.briefing = true + mecanismo VALIDATED | BLOQUEADO |

É fisicamente impossível produzir copy sem ter passado por research e briefing. O sistema não depende de disciplina — depende de automação.

### helix-state.yaml — Persistência de Estado

```yaml
# nicho-exemplo/oferta-exemplo/helix-state.yaml
current_phase: production
phases_completed:
  - research
  - briefing
tools_used:
  voc_search: true
  blind_critic: true
  validate_mecanismo: true
gates:
  research: true
  briefing: true
  production: false
  delivery: false
```

O Sentinel lê esse arquivo antes de qualquer transição. Se `gates.research` for false, nenhuma escrita em `briefings/` é permitida.

---

## Os 4 Workflows

### 1. Full Pipeline
Workflow completo para uma nova oferta, do zero ao entregável.
```
Phase 0: Init         — estrutura de diretórios, helix-state.yaml
Phase 1: Research     — Vox (VOC, avatar) + Cipher (concorrentes, ads, swipes)
Phase 2: Briefing     — Atlas (10 fases HELIX, MUP/MUS, mecanismo-unico.yaml)
Phase 3: Production   — Echo (VSL) + Forge (LP) + Scout (criativos) + Blade (emails)
Phase 4: Review       — Hawk (blind_critic + EST + black_validation em cada peça)
Phase 5: Delivery     — Ops (packaging, brand review, entrega)
```

### 2. Research-to-Briefing (R2B)
Para ofertas que já têm estrutura e precisam iniciar pelo research.
```
Vox + Cipher → [RESEARCH GATE] → Atlas → [BRIEFING GATE] → Sentinel
```

### 3. Briefing-to-Production (B2P)
Para ofertas com briefing aprovado.
```
Echo + Forge + Scout + Blade → [PRODUCTION GATE] → Hawk → [DELIVERY GATE] → Sentinel
```

### 4. Roteiro Factory
Workflow especializado para produção de roteiros virais em escala (reels para advogados, etc.).
```
1. Add client     — Configurar perfil do cliente
2. Viral angles   — Cipher minera ângulos virais do nicho
3. Format mix     — Selecionar mix de formatos
4. Produce batch  — Scout produz roteiros em paralelo
5. QA gate /100   — Hawk avalia cada roteiro com score /100
6. Assemble guide — Consolidar roteiros aprovados no guia
```

**Modos de execução:**
- **YOLO** — Autopiloto completo, sem interrupções
- **INTERACTIVE** — Pausa para aprovação humana em cada etapa crítica

---

## Task-MCP Matrix

59 tasks em 3 contextos de execução:

| Contexto | Tasks | Como funciona |
|---------|-------|--------------|
| INLINE | 16 tasks | Helix orquestra diretamente com validate_gate + get_phase_context |
| SUBAGENT | 33 tasks | Helix lança Agent() com contexto isolado e MCPs específicos por agente |
| DIRECT | 8 tasks | Usuário ativa o agente via @agent para trabalho profundo em contexto 200K |

```yaml
# Exemplo: task-mcp-matrix.yaml
helix_phase_execution:
  execution_context: subagent
  agent: atlas
  mcps: [get_phase_context, validate_gate, blind_critic, validate_mecanismo]

hawk_validation:
  execution_context: subagent
  agent: hawk
  mcps: [blind_critic, emotional_stress_test, black_validation, layered_review]

research_voc:
  execution_context: subagent
  agent: vox
  mcps: [voc_search, semantic_memory_search, swipe_search]
```

---

## Os 13 Agentes

### Tier OPUS — Análise Profunda (decisão estratégica)

| Agente | Handle | Função | MCPs Autorizados |
|--------|--------|--------|-----------------|
| Helix | @chief | Orquestrador. Roteia tarefas, enforcea gates, NUNCA produz copy diretamente | validate_gate, get_phase_context |
| Hawk | @critic | Crítico adversarial. Blind critic, EST, black_validation, layered review | blind_critic, emotional_stress_test, black_validation, layered_review |
| Sentinel | @gatekeeper | Auditoria de fases, enforcement de gates, verificação de pré-condições | validate_gate, get_phase_context |
| Strategist | — | Análise de portfolio, design de funil, posicionamento, ROI | Nenhum (file-only) |
| Echo | @vsl | Produção de VSL capítulo a capítulo (LEAD, BACKGROUND, TESIS, BUILDUP, OFERTA, CLOSE) | write_chapter |

### Tier SONNET — Execução Especializada

| Agente | Handle | Função | MCPs Autorizados |
|--------|--------|--------|-----------------|
| Atlas | @briefer | Briefing HELIX 10 fases. Criação e validação MUP/MUS | validate_mecanismo, blind_critic, create_mecanismo, update_mecanismo |
| Vox | @researcher | VOC extraction, perfil avatar, pesquisa de audiência, síntese | voc_search, semantic_memory_search, apify_*, firecrawl_* |
| Cipher | @miner | Ads spy, video breakdown, Scale Score de concorrentes | fb_ad_library, apify_* |
| Forge | @lp | Produção de Landing Pages por blocos, mapeamento de objeções | write_chapter |
| Scout | @creative | Batch de criativos, exploração de hooks, ângulos por DRE | fb_ad_library_analyze_*, apify_* |
| Blade | @producer | Sequências de email, upsell/downsell, reengajamento | write_chapter |
| Spark | @reels | Scripts virais para reels (método Hormozi) | write_chapter |
| Ops | @ops | Git operations, health checks, diagnóstico do ecossistema | — |

**Regra crítica de arquitetura — Helix Nunca Emula:**
Helix nunca usa Skill para carregar instruções de outros agentes inline. Isso consumiria 50%+ do contexto sem realmente delegar. O fluxo correto:
```
Helix recebe tarefa → lê task-mcp-matrix.yaml → determina execution_context
  → lança Agent() subagent com contexto isolado → agente executa → retorna resultado
```

**Handoff Protocol:** Ao trocar de agente, contexto compactado em artefato de ~379 tokens (vs 3-5K do contexto completo). Persiste em `.aiox/handoffs/`.

---

## HELIX System — 10 Fases do Briefing

**Princípio central:** Separar PENSAR de ESCREVER. 3-4 horas de análise estratégica ANTES de uma única palavra de copy ser escrita.

**Regra operacional:** Extended Thinking ON durante análise (fases 1-10). OFF durante criação de copy.

**3 sessões de trabalho:**
- Sessão 1 (Fundação): Fases 1-4
- Sessão 2 (Mecanismos): Fases 5-7
- Sessão 3 (Execução): Fases 8-10

| Fase | Nome | O que faz | Output |
|------|------|-----------|--------|
| 1 | Identificação e Posicionamento | Define produto, avatar inicial e posicionamento de mercado. Formato, tom e seleção de expert. | phase-01-identificacao.md |
| 2 | Pesquisa de Mercado e Concorrência | Mapeia concorrentes, ads escalados e tendências. Ads-library-spy e playbooks de mineração. | phase-02-mineracao.md |
| 3 | Avatar e Psicologia Profunda | Define avatar com DRE, horror stories e Escalada Emocional em 5 níveis. Extrai psicologia do VOC real. | phase-03-avatar.md |
| 4 | Níveis de Consciência | Mapeia consciência usando framework Schwartz. Progressão Unaware → Problem Aware → Solution Aware → Most Aware. | phase-04-consciencia.md |
| **5** | **Problema, Vilão e MUP** | **Nova Causa + Sexy Cause. A razão pela qual o problema existe — o que ninguém mais está apontando.** | phase-05-problema-vilao-mup.md |
| **6** | **Solução, Especialista e MUS** | **Ingrediente Hero, Gimmick Name, Origin Story e Authority Hook. MUS espelha e inverte o MUP.** | phase-06-solucao-mus.md |
| 7 | Big Offer | Value stack, reason why, offer hack e garantias. Uma oferta unificada. | phase-07-big-offer.md |
| 8 | Fechamento e Pitch | CTA + gatilhos de fechamento. Dualidade, urgência e razão final para comprar AGORA. | phase-08-fechamento-pitch.md |
| 9 | Leads e Ganchos | 10+ hooks, 5 leads completos e 24 aberturas (framework Clayton). 6-Question Litmus Test. | phase-09-leads-ganchos.md |
| 10 | Progressão Emocional e VSL | Estrutura completa da VSL. ONE BELIEF, 7 fases emocionais, 10 power questions. | phase-10-progressao-emocional.md |

### Fases Críticas: 5 e 6 (onde mora a conversão)

**Sequência obrigatória de validação (não pode ser reordenada):**
```
1. consensus (3 modelos) → TOP 3 candidatos MUP para validação multi-modelo
        |
2. blind_critic → MUP Statement (score mínimo: 8/10)
        |
3. Definir MUS baseado no MUP validado
        |
4. blind_critic → MUS Statement (score mínimo: 8/10)
        |
5. emotional_stress_test → MUP + MUS juntos (genericidade >= 8/10)
        |
6. voc_search → Confirmar linguagem alinhada com VOC real
        |
7. HUMANO → Aprovação final obrigatória (sistema PARA aqui)
```

Se qualquer threshold não for atingido: BLOQUEIA. Sem atalhos.

### HELIX State — Persistência de Estado

```yaml
# Exemplo: nicho-exemplo/oferta-exemplo/helix-state.yaml
offer: oferta-exemplo
current_phase: 10
phases_completed:
  - phase_01_identificacao
  - phase_02_mineracao
  - phase_03_avatar
  - phase_04_consciencia
  - phase_05_mup
  - phase_06_mus
  - phase_07_big_offer
  - phase_08_fechamento_pitch
  - phase_09_leads_ganchos
  - phase_10_progressao_emocional
tools_used:
  research: [firecrawl_agent, voc_search, fb_ad_library]
  briefing: [get_phase_context, consensus, blind_critic]
  production: []
gates:
  research: true
  briefing: true
  mecanismo: true
  production: false
```

Hook `phase-advance-gate.ts` lê este arquivo antes de permitir avanço. Hook `record-tool-in-offer.ts` registra cada ferramenta usada automaticamente.

---

## Frameworks de Copy (base teórica)

| Framework | Autor | Contribuição Principal |
|-----------|-------|----------------------|
| Puzzle Pieces | Diogo Ramalho | MUP / MUS / Indutor / One Belief — espinha dorsal da oferta |
| RMBC II | Stefan Georgi | Research → Mechanism → Brief → Copy — pipeline de produção |
| 16-Word Sales Letter | Evaldo Albuquerque | One Belief que move a venda |
| Big Ideas | Georgi & Amanda Khayat | Personagem + Situação + Tensão — diferenciação que escala |
| 3Ms + NUUPPECC | Max Peters | Mystery/Mechanism/Market + 8 atributos de atenção máxima |
| Hooks + Frases de Poder | Vitor Mound | Qualificação + Emoção + Curiosidade — primeiros 3 segundos |
| Super Estrutura | Mels / Ramalho | Autoridade externa (Celebridade/Instituição/Expert/Governo) |

### Puzzle Pieces (Diogo Ramalho)
Framework de empacotamento do #1 ClickBank ($2B+ em vendas). Pilares: MUP, MUS, Indutor, One Belief.
**Fórmula:** `[INGREDIENTE HERO] + [GIMMICK NAME] + [ORIGIN STORY] + [AUTHORITY HOOK]`
**Exemplo:** "Já ouviu falar desse Pink Salt Trick que atrizes de Hollywood estão usando para secar gordura na barriga? Chamam de Ozempic Natural."

### RMBC II (Stefan Georgi)
Copy Thinker: o copywriter como arquiteto estratégico que direciona a IA, não executor que escreve palavra por palavra.
**Fórmula:** Research → Mechanism → Brief → Copy

### 16-Word Sales Letter (Evaldo Albuquerque)
Toda venda se resume a UMA crença central. Se o prospect acreditar em ~16 palavras, ele VAI comprar.
**Fórmula:** "[NOVA OPORTUNIDADE] é a chave para [DESEJO]. Só possível através do [GIMMICK] exclusivo do [PRODUTO]."
**Exemplo:** "A desintoxicação do cortisol é a chave para perder peso sem dieta. Só possível através do Pink Salt Trick exclusivo do CortiSlim."

### Big Ideas (Georgi & Amanda Khayat)
Não é promessa, hook ou ângulo isolado — é o jeito ESPECÍFICO e DIFERENTE de contar a mesma promessa. Teste de ouro: "a pessoa consegue sair e contar para alguém?"
**Fórmula:** `[PERSONAGEM/POV] + [SITUAÇÃO ESPECÍFICA] + [TENSÃO]`
**Exemplo:** "Estava no vestiário quando ouvi duas mulheres... uma tirou um vidro da bolsa e disse: 'toma, mas não conta pra ninguém. Perdi 3 números de calça.'"

### 3Ms + NUUPPECC (Max Peters)
**3Ms:** Mistério (nome exclusivo 1-3 palavras) + Mecanismo (por que falhou antes + por que agora funciona) + Mercado (validação de demanda)
**NUUPPECC:** Novo, Urgente, Único, Perigoso, Pessoal, Específico, Concreto, Controverso — meta: ≥4/8 atributos por headline.

### Hooks + Frases de Poder (Vitor Mound)
**Anatomia do hook:** `[QUALIFICAÇÃO do público] + [EMOÇÃO específica] + [CURIOSIDADE / lacuna de informação]`
Inclui Disparos de Dopamina — mini-hooks no meio do body que reengajam nos trechos técnicos.
Exemplos: "Posso ser cancelado por falar isso, mas..." | "O que ninguém tem coragem de dizer sobre..."

### Super Estrutura (Mels / Ramalho)
Authority Hook via: Celebridade, Instituição, Especialista, Governo/Regulador, Origem Geográfica.
**Fórmula:** `[CELEBRIDADE / INSTITUIÇÃO / ESPECIALISTA] + [CLAIM DA OFERTA]`
Exemplos: "Pesquisadores de Harvard descobriram que..." | "O método que atrizes de Hollywood usam..."

---

## DRE — Emoção Dominante Residente

**Conceito:** A emoção que DOMINA o estado interno do avatar. NÃO é sempre medo.

| DRE | Sinais na VOC | Nicho Típico |
|-----|--------------|-------------|
| Medo | Perda, morte, doença, piorar | Saúde, sobrevivência |
| Vergonha | Olhar dos outros, inadequação, esconder-se | Aparência, ED, intimidade |
| Desejo | Inveja, querer o que outros têm | Riqueza, status, lifestyle |
| Raiva | Ser enganado, injustiça, sistema contra você | Big pharma, governo |
| Frustração | "Já tentei tudo", nada funciona | Cross-nicho (universal) |
| Culpa | Negligência, falhar com família | Relacionamento, saúde familiar |

**Quem define a DRE:** O briefing (Fase 2.3 HELIX), NÃO o copywriter por intuição. A VOC revela.

### Amplificadores Emocionais

- Vergonha (problema PÚBLICO) + Culpa (problema PESSOAL) + Esperança (solução URGENTE) = urgência máxima
- Medo (consequência futura) + Frustração (falhas passadas) + Raiva (culpa de terceiros) = indignação que converte

### Escalada Emocional — 5 Níveis

Copy nos níveis 1-2 cria desconforto passivo (prospect lê e fecha a aba). Níveis 4-5 criam impulso real — o tipo que faz alguém sacar o cartão às 2h da manhã.

| Nível | Tipo | Horizonte | Medo | Vergonha | Frustração |
|-------|------|-----------|------|---------|-----------|
| 1 | Físico Imediato | Horas/dias | "Peso no peito às 3h" | "Roupa não fecha" | "Mais uma dieta falhou" |
| 2 | Social | Dias/semanas | "Vão notar na reunião" | "Evita fotos em grupo" | "Amigos já percebem" |
| 3 | Consequência | Meses/anos | "Diabético em 5 anos" | "Não sai mais de casa" | "Já perdeu 5 anos assim" |
| 4 | Relacional | Permanente | "Parceira vai encontrar outro" | "Filhos terão vergonha" | "Família desistiu de ajudar" |
| 5 | Identidade | Existencial | "Morrer sendo lembrado como fracasso" | "Não se reconhece mais no espelho" | "Nunca vai conseguir nada na vida" |

**Na prática:** A VOC é onde você encontra quotes de cada nível. Quanto mais quotes de níveis 4-5, mais visceral a copy pode ser.

---

## 5 Lentes de Validação BLACK

**Princípio fundador:** "Copy confortável = Copy que FALHOU."

| Lente | Pergunta-Chave | Rejeitar Se |
|-------|---------------|-------------|
| 1. Escalada Emocional | DRE ativada e escalada até nível 4-5? | Fica nos níveis 1-2 (desconforto passivo) |
| 2. Densidade Narrativa | Parece cena de filme? Tem detalhes sensoriais? | Parece press release ou artigo de blog |
| 3. Logo Test | Concorrente NÃO pode usar sem alterar? | Qualquer concorrente usaria sem mudar nada |
| 4. Teste Visceral | Ativa reação FÍSICA no leitor? | Prospect passa "de boa", sem sentir nada |
| 5. Zero Hesitação | 0 "talvez", 0 "pode ser", 0 marketing speak? | Linguagem evasiva, adjetivos vazios |

| Lentes Fortes | Indicação | Ação |
|--------------|-----------|------|
| 5/5 | Pronta para teste no mercado | Publicar |
| 4/5 | Uma lente fraca | Fortalecer especificamente essa lente |
| 3/5 | Comprometida | Revisão estrutural obrigatória |
| ≤ 2/5 | Gaps estruturais graves | REFAZER do zero |

A MCP `black_validation` aplica todas as 5 Lentes automaticamente (executada por Hawk). Não é opcional — é o gate final.

---

## Especificidade = Cena de Filme

O cérebro humano interpreta ESPECÍFICO como VERDADEIRO. A especificidade tem duas faces:

### Face 1: Dados Específicos

| # | Critério | Genérico (0 pts) | Específico (1 pt) |
|---|---------|---------|---------|
| 1 | Nome | "pessoas", "clientes" | "Dona Maria, de Goiânia" |
| 2 | Idade | "adultos", "mulheres" | "47 anos" |
| 3 | Localização | "todo Brasil" | "bairro Setor Bueno, Goiânia" |
| 4 | Profissão | "empresária" | "dona de salão de beleza" |
| 5 | Número | "90%", "milhares" | "87.3%", "2.847 pessoas" |
| 6 | Data | "recentemente" | "14 de março de 2024" |
| 7 | Resultado | "melhorou" | "pressão foi de 180/120 para 124/81" |
| 8 | Sensorial | Ausente | "acordou às 3AM suando frio" |

### Face 2: Narrativa Específica (a MAIS PODEROSA)

| # | Dimensão | Fraco | Forte |
|---|---------|-------|-------|
| 1 | Dados Precisos | "Pessoas melhoraram" | "12.847 clientes, 87.3% sentiram alívio em 14 dias" |
| 2 | Cena Vivida | "Descobri um método" | "Estava no vestiário quando ouvi duas mulheres…" |
| 3 | Reação de Terceiros | Ausente | "O médico olhou os exames, tirou os óculos e disse…" |
| 4 | Contexto Inesperado | Genérico | "3h da manhã, no banheiro, com a luz do celular" |
| 5 | Detalhes Sensoriais | "Me senti melhor" | "Acordei sem tontura pela 1a vez em 7 anos" |

**Threshold:** Face 1 (≥ 6/8) + Face 2 (≥ 3/5). AMBAS devem estar presentes. Se Specificidade Score < 8, copy rejeitada.

---

## Anti-Homogeneização

**Problema:** 79% de similaridade intra-modelo. Sem constraints divergentes, qualquer LLM produz copy bonita, gramaticalmente perfeita — e completamente genérica.

**Regra Cardinal:** Copy que poderia ser usada por concorrente SEM alteração = REFAZER (não revisar, não melhorar — REFAZER).

### 4 Testes Obrigatórios

| Teste | Pergunta | Se falhar |
|-------|---------|---------- |
| Logo Test | Funciona se trocar o logo? | REFAZER |
| Competitor Swap | Concorrente poderia roubar? | REFAZER |
| Especificidade Score | Score < 8/10? | REFAZER |
| Palavras Banidas | Tem "revolucionário", "transformar", "jornada"? | SUBSTITUIR cada uma |

### Escala de Especificidade BLACK

| Score | Descrição | Decisão |
|-------|-----------|---------|
| 1-3 | Qualquer concorrente usaria sem alterar | REFAZER |
| 4-5 | Precisa adaptação moderada (20-40%) | REFAZER |
| 6-7 | Relativamente única, mas pode melhorar | REVISAR |
| 8-10 | Impossível confundir com concorrente | APROVADO |

### Clíchês Proibidos por Nicho

**Concursos:**
- Proibido: "método infalível", "estudar de forma inteligente", "passe em menos tempo", "decoreba não funciona", "método dos aprovados"
- Substituir por: nome proprietário do método, técnica específica nomeada, prazo específico + contexto real

**Saúde / Emagrecimento:**
- Proibido: "emagreça sem dieta", "metabolismo acelerado", "queimar gordura", "segredo dos magros", "corpo dos sonhos"
- Substituir por: mecanismo específico nomeado, processo fisiológico específico, resultado mensurável

**Relacionamento:**
- Proibido: "conexão profunda", "atração irresistível", "recuperar casamento", "comunicação eficaz"
- Substituir por: comportamento específico observável, mecanismo psicológico nomeado, técnica nomeada + contexto

**Palavras banidas cross-nicho:**
- Adjetivos vazios: revolucionário, inovador, incrível, inacreditável, único (sem especificação)
- Substantivos genéricos: segredo, método/sistema (sem nome próprio), transformação, jornada
- Verbos IA-speak: revolucionar, transformar, elevar, desbloquear, empoderar, potencializar
- Estruturas banidas: "Imagine…", "What if I told you…", "The secret to…", "Finally, a solution…", "X meets Y"

---

## Mecanismo Único — MUP e MUS

### Por Que o Mecanismo É Tudo

Sem mecanismo único, sua oferta é mais uma na pilha. O mecanismo faz o prospect pensar "isso eu nunca ouvi antes" em vez de "mais do mesmo". Não é diferencial de marketing — é a razão estrutural pela qual sua solução funciona e as outras não.

### Fórmula do Mecanismo
```
[ÓRGÃO REAL] + [PROCESSO INVENTADO] + [CAUSA EXTERNA CULPÁVEL]
```
O órgão é real (prospect pode pesquisar). O processo é denso em detalhes (parece científico). A causa é externa (tira a culpa do prospect).

### 5 Funções Obrigatórias do Mecanismo
1. Explica o problema de forma que o prospect nunca ouviu
2. Absolve o avatar — não é culpa dele, é culpa de [causa externa]
3. Invalida todas as outras soluções — por isso nada funcionou
4. Posiciona sua solução como a única que ataca a causa REAL
5. Cria urgência — se não resolver agora, o processo piora progressivamente

**Regra:** Se não cumpre TODAS as 5, está incompleto. Ou faz as 5 coisas ou volta pra mesa.

### MUP — Mecanismo Único do Problema

| Componente | Descrição | Obrigatório |
|-----------|-----------|-------------|
| Nova Causa | O que REALMENTE causa o problema (não o que o mercado fala) | SIM |
| Sexy Cause | NOME intrigante e memorável para a nova causa | SIM |
| Problema Fundamental | Como a nova causa se aplica tangivelmente ao dia-a-dia | SIM |
| Causa Raiz | História por trás do problema | NÃO |

**Critérios de validação do MUP (3 SIMs obrigatórios):**
1. É diferente do que o mercado já fala?
2. Tira a culpa do avatar? (prospect pensa: "então NÃO era minha culpa")
3. Explica por que outras soluções falharam?

**Teste da Sexy Cause — a pergunta fatal:**
"A pessoa vai querer CONTAR para alguém?"
- "Cristais de Otólitos" = olhos arregalados, "o que é isso?!" → funciona
- "Inflamação crônica" = "ah, sim" e volta a comer → NÃO é Sexy Cause

### MUS — Mecanismo Único da Solução

O MUS é o INVERSO do MUP. Se o MUP diz "o problema é X", o MUS diz "a solução é reverter X com [ingrediente hero]".

| Componente | Descrição | Obrigatório |
|-----------|-----------|-------------|
| Nova Oportunidade | INVERSO da nova causa | SIM |
| Ingrediente Hero | Componente PRINCIPAL que resolve | SIM |
| Gimmick Name | Nome chiclete do INGREDIENTE (não do sistema!) | SIM |
| Origin Story | História de COMO foi descoberto | SIM |
| Authority Hook | Validação via super estrutura | SIM |

**Distinção crítica:** Gimmick Name ≠ Authority Hook
- **Gimmick Name** = ligado ao INGREDIENTE. Faz o prospect LEMBRAR. Ex: "Pink Salt Trick"
- **Authority Hook** = ligado à SUPER ESTRUTURA. Faz o prospect ACREDITAR. Ex: "Monjaro Natural"

### Gancho da Solução — Fórmula Ramalho

Amarra todos os componentes do MUS em uma única frase:
```
"Já ouviu falar desse [GIMMICK NAME] que [ORIGIN STORY]
estão usando secretamente para [DESEJO]?
Já estão chamando isso de [AUTHORITY HOOK]."
```

**Exemplo real:**
"Já ouviu falar desse Pink Salt Trick que as atrizes de Hollywood estão usando secretamente para secar gordura na barriga em poucos dias? Já estão chamando isso de Monjaro Natural."

Se você não consegue preencher essa fórmula, o MUS está incompleto.

### Invenção Densa vs Fraca

| Invenção Fraca (detectável) | Invenção Forte (indistinguível) |
|---------------------------|-------------------------------|
| "Toxinas no corpo" | "Inflamação no Receptor TLR-4 do hipotálamo" |
| "Desequilíbrio hormonal" | "Resistência à leptina por excesso de frutose no fígado" |
| "Estresse oxidativo" | "Cristalização de cálcio nas células ciliadas da cóclea" |

O cérebro não verifica papers. Verifica DENSIDADE. Explicação densa + específica + internamente coerente = o cérebro classifica como verdadeiro.

### Critérios RMBC para Validação de Nomes (média ≥ 7)

| Critério | Pergunta | Threshold |
|---------|---------|----------|
| Digerível | Explicável em 1-2 frases para leigo? | ≥ 7/10 |
| Único | Gera "nunca ouvi isso antes"? | ≥ 7/10 |
| Provável | Faz sentido intuitivo, mesmo sem prova? | ≥ 7/10 |
| Conectado | Liga com a emoção dominante do avatar? | ≥ 7/10 |

### Ingrediente Hero por Nicho

| Nicho | Ingrediente Hero = | Exemplo Concreto |
|-------|------------------|-----------------|
| Suplemento | Substância principal | Pink Salt (sal rosa do Himalaia) |
| Educação/Concursos | Técnica core | Técnica Ovelha Negra (padrões de banca) |
| Relacionamento | Protocolo principal | Técnica do Espelho (neuroquímica) |
| Riqueza | Estratégia principal | Método dos 3 Potes (alocação) |
| SaaS | Feature diferencial | DNA da Banca (IA treinada em 500K questões) |
| Saúde auditiva | Composto/processo | CoQ10 + Ácido Alfa-Lipóico (dissolução de cristais) |

### Biblioteca de Sexy Causes por Nicho

| Nicho | Problema Real | Sexy Cause |
|-------|-------------|-----------|
| Emagrecimento | Come demais por fome falsa | "Hungry Brain Syndrome" |
| Concursos | Estuda mas não memoriza | "Ilusão de Aprendizado" |
| Concursos | Não encontra o que a banca cobra | "Ponto Cego de Leitura" |
| ED | Bloqueio por ansiedade de performance | "Síndrome de Dessensibilização" |
| Tinnitus | Zumbido no ouvido sem causa aparente | "Cristais de Otólitos" |
| Concursos (lei seca) | Decorar legislação sem estratégia | "Ponto Cego da Legislação" |

### mecanismo-unico.yaml — Estados

```
UNDEFINED ──> DRAFT ──> PENDING_VALIDATION ──> VALIDATED ──> APPROVED
```

| Estado | Permite Production? |
|--------|-------------------|
| UNDEFINED | NÃO |
| DRAFT | NÃO |
| PENDING_VALIDATION | NÃO |
| VALIDATED | SIM |
| APPROVED | SIM |

Hook `mecanismo-validation.ts` intercepta qualquer Write em `*/production/*` e verifica se o mecanismo está VALIDATED ou APPROVED. Não existe override.

**RMBC Structural /15:**
- Score < 9 = REFORMULAR
- Score 9-11 = REVISAR pontos fracos
- Score ≥ 12 = APROVADO

---

## 10 MCP Tools Internas (TypeScript)

| Tool | Agentes Autorizados | Quando Usar |
|------|--------------------|-----------  |
| voc_search | Vox, Atlas | Antes de qualquer decisão de MUP/MUS |
| semantic_memory_search | Vox, Atlas | Recuperar narrativas e técnicas de ofertas anteriores |
| get_phase_context | Helix, Sentinel, Atlas | Início de cada fase HELIX |
| validate_gate | Helix, Sentinel | ANTES de declarar qualquer fase completa |
| validate_mecanismo | Atlas, Hawk | Schema YAML + RMBC Structural /15 (≥ 9 para passar) |
| blind_critic | Hawk | Revisão adversarial — score ≥ 8/10 |
| emotional_stress_test | Hawk | 4 scores independentes com pesos — veja tabela abaixo |
| write_chapter | Echo, Forge, Blade, Spark | Produção por capítulo — 6 tipos: LEAD, BACKGROUND, TESIS, BUILDUP, OFERTA, CLOSE |
| layered_review | Hawk | Review progressivo em 3 passes — veja tabela abaixo |
| black_validation | Hawk, Sentinel | Score por cada uma das **8 Lentes** + PASS/FAIL (5 essenciais exigem score ≥ 8) |

**emotional_stress_test — 4 Scores Independentes:**

| Teste | O que avalia | Peso | Threshold |
|-------|-------------|------|----------|
| Genericidade | Copy poderia ser de concorrente sem alterar? | 40% | ≥ 8/10 |
| Visceral | Ativa reação física/emocional? | 25% | ≥ 7/10 |
| Scroll-stop | Para o scroll nos primeiros 3 segundos? | 20% | ≥ 7/10 |
| Proof density | Proporção claim:prova verificável | 15% | ≥ 8/10 |

Pega copy "bonita mas genérica" — profissional na aparência, inerte na conversão.

**layered_review — 3 Camadas (em ordem):**

| Camada | Foco | O que pega |
|--------|------|-----------|
| 1. cut_crap | Estrutura e lógica | Gaps de argumento, saltos lógicos, incoerências |
| 2. visceral | DRE e escalada emocional | Copy plana, emoções fracas, falta de tensão |
| 3. final | Especificidade e linguagem | Clíchês, palavras banidas, genericidade, VOC ausente |

**5 Lentes Essenciais via black_validation (com como fortalecer):**

| Lente | O que avalia | Score mín. | Como fortalecer |
|-------|-------------|-----------|----------------|
| 1. Cena de Filme | Detalhes sensoriais, cena vivida com nomes/datas/locais | 7/10 | Adicionar contexto específico (3h da manhã, mão tremendo, reação de terceiros) |
| 2. Emoção Coerente | DRE ativada e escalada até nível 4-5 | 7/10 | Adicionar quotes VOC nível 4-5. Escalar de físico para relacional/identidade |
| 3. Logo Test | Concorrente NÃO pode usar sem alterar | 8/10 | Nome proprietário do mecanismo, dados únicos da oferta, prova social específica |
| 4. Teste Visceral | Ativa reação física/emocional forte | 7/10 | Detalhes sensoriais (suor, aperto no peito). Contexto inesperado |
| 5. Zero Hedges | Zero "talvez", zero marketing speak | 8/10 | Eliminar adjetivos vazios, substituir generalidades por dados, remover hedging |

Lentes fracas ≤ 2/5 = REFAZER do zero. Revisão não salva copy com falha em 3+ Lentes.

---

## Research System

### VOC — Voice of Customer

**Hierarquia de ferramentas (obrigatória, em ordem):**
1. voc_search MCP — base indexada do ecossistema
2. semantic_memory_search MCP — busca semântica cross-ofertas
3. Apify Actor específico (YouTube, TikTok, Instagram, Reddit, Reclame Aqui)
4. Firecrawl — web scraping de reviews e fóruns
5. WebSearch — ÚLTIMO RECURSO

**Viral-First Strategy:** Identificar TOP 10 conteúdos mais engajados ANTES de extrair.
- YouTube: 10K+ views OU 500+ comments
- Instagram: 5K+ likes OU 200+ comments
- TikTok: 50K+ views OU 1K+ comments

**Mínimos por plataforma:** 50 quotes, intensidade média ≥4/5, username + engagement em cada quote.

**Emoções mínimas a extrair:**

| Emoção | Mínimo quotes |
|-------|--------------|
| Medo | 10+ |
| Vergonha | 5+ |
| Culpa | 5+ |
| Raiva | 5+ |
| Frustração | 10+ |

Total mínimo: 35 quotes emocionais categorizadas.

### Ads Library Spy — Discovery-First

**Scale Score** = (ads_ativos × 2) + (variações_copy × 1.5)

| Score | Status |
|-------|--------|
| 20+ | Altamente escalado |
| 10-19 | Escalando |
| 5-9 | Em teste |
| <5 | Novo/falhando |

**Metodologia de descoberta:**
| Nível | Objetivo | Ferramenta |
|-------|---------|-----------|
| 1. Nicho | Descobrir players desconhecidos | Apify (keyword) |
| 2. Sub-nicho | Encontrar especialistas | Apify (keyword) |
| 3. Mecanismo | Validar cross-market | Apify (keyword) |
| 4. Concorrentes | Monitorar conhecidos | fb_ad_library MCP (nome) |

---

## Constitution — 6 Artigos Inegociáveis

| Artigo | Princípio | Severidade | O que bloqueia na prática |
|--------|-----------|-----------|--------------------------|
| I | CLI First — toda funcionalidade via CLI antes de UI | NON-NEGOTIABLE | Nenhuma funcionalidade existe apenas na UI |
| II | Agent Authority — cada agente tem escopo definido e exclusivo | NON-NEGOTIABLE | git push bloqueado para não-Ops; MCPs de qualidade bloqueados para Helix inline |
| III | DRE-First — Emoção Dominante Residente drive toda copy | MUST | VOC obrigatório antes de briefing |
| IV | No Invention — zero statements sem rastreabilidade a VOC ou dado | MUST | blind_critic penaliza statements sem rastreabilidade |
| V | Quality First — gates bloqueiam, não avisam | MUST | Gates bloqueiam avanço — não avisam, bloqueiam |
| VI | Visceral > Lógico — linguagem absoluta, zero hesitação | SHOULD | Lista anti-homogeneização aplicada em todos os outputs |

---

## Enforcement — 65 Hooks + 12 Lib Helpers

Os hooks são o "sistema nervoso autônomo" do ecossistema. 6 tipos de trigger, 65 hooks no total.

### Distribuição por Tipo

| Tipo | Quantidade | Momento |
|------|-----------|---------|
| PostToolUse | 24 | Depois de executar tool |
| PreToolUse | 18 | Antes de executar tool (pode bloquear) |
| Custom | 9 | Eventos específicos |
| SessionStart | 6 | Ao iniciar sessão |
| Stop | 6 | Ao encerrar sessão |
| PreCompact | 2 | Antes de compactar contexto |

### Categorias por Função

| Categoria | Qtd | Exemplos Chave |
|-----------|-----|---------------|
| Validação e Gates | 9 | validate-gate-prereq, phase-advance-gate, mecanismo-validation, stop-copy-validation |
| Captura e Tracking | 8 | gotcha-capture, record-tool-in-offer, gate-tracker, journey-log |
| Injeção e Contexto | 6 | synapse-inject, gotcha-inject, discover-offer-context, memory-context |
| Produção e Review | 5 | post-production-validate, production-preflight, copy-version-backup |
| Dashboard e Metrics | 4 | dashboard-emit, dashboard-autostart, session-digest-save |
| Proteção | 7 | detect-clear-protect, pre-compact-save, save-session-state, doc-rot-guardian |
| Subagents | 5 | subagent-type-warning, subagent-output-audit, subagent-mcp-check |
| Utilidades | 21 | auto-approve-reads, filter-bash-output, setup-environment, skill-trigger |

### Lista Completa por Tipo

**PreToolUse (18 hooks):**
- `copy-version-backup.ts` — backup antes de write em production paths
- `dashboard-emit.ts` — emite eventos para dashboard
- `discovery-before-create.ts` — valida descoberta antes de criar
- `filter-bash-output.sh` — filtra output de bash
- `helix-phase-mecanismo.sh` — valida mecanismo na fase HELIX
- `mcp-query-validator.sh` — valida queries MCP
- `mecanismo-validation.ts` — bloqueia production sem mecanismo VALIDATED
- `phase-advance-gate.ts` — bloqueia pulo de fases
- `phase-gate.ts` — gate por diretório/path
- `pre-tool-use-gate.ts` — gate geral pre-tool
- `processing-check.ts` — verifica se há processamento em andamento
- `registry-check.ts` — verifica registro de agentes
- `self-critique-preflight.ts` — pré-voo para auto-crítica
- `story-required-gate.ts` — exige story/oferta ativa
- `template-header-validation.ts` — valida headers de templates
- `tool-matrix-enforcer.ts` — enforcea task-mcp-matrix
- `validate-before-commit.ts` — valida antes de commit git
- `validate-gate-prereq.ts` — verifica ferramentas obrigatórias

**PostToolUse (24 hooks):**
- `agent-memory-writeback.ts` — persiste memória do agente
- `clickup-deliverable-sync.ts` — sincroniza deliverables no ClickUp
- `clickup-gate-sync.ts` — sincroniza gates no ClickUp
- `completion-verifier.ts` — verifica completude do output
- `context-tracker.ts` — rastreia consumo de contexto
- `copy-attribution.ts` — atribui copy ao agente correto
- `error-handler.ts` — trata erros de tools
- `etl-voc-post.ts` — ETL de VOC pós-extração
- `fidelity-check.ts` — verifica fidelidade ao briefing
- `gate-tracker.ts` — registra PASSED/BLOCKED no helix-state.yaml
- `gotcha-error-capture.ts` — captura erros com dedup Jaccard > 0.4
- `ids-register.ts` — registra IDs de sessão
- `journey-log.ts` — log de jornada da oferta
- `memory-auto-populate.ts` — popula memória automaticamente
- `mermaid-auto-update.ts` — atualiza diagramas Mermaid
- `meta-prompt-reminder.ts` — lembra meta-prompts por fase
- `persuasion-flow-check.ts` — verifica fluxo persuasivo
- `post-gate-auto-advance.ts` — avança automaticamente após gate PASSED
- `post-mcp-mecanismo-update.ts` — atualiza mecanismo-unico.yaml após MCP
- `post-production-validate.ts` — valida copy produzida
- `post-tool-use.ts` — hook geral pós-tool
- `post-validation-feedback.ts` — feedback pós-validação
- `record-tool-in-offer.ts` — grava tool usada no helix-state.yaml
- `suggestion-on-gate.ts` — sugere próximo passo após gate

**SessionStart (6 hooks):**
- `command-auto-discovery.ts` — descobre comandos disponíveis
- `dashboard-autostart.sh` — inicia dashboard + abre browser
- `discover-offer-context.sh` — detecta oferta ativa + exibe estado + próxima ação
- `memory-bracket-injector.ts` — injeta contexto por bracket de memória
- `memory-context.sh` — exibe contexto recente de memória
- `setup-environment.sh` — configura ambiente (--init ou --maintenance)

**Custom (9 hooks):**
- `analyze-production-task.sh` — analisa task de produção
- `auto-approve-reads.sh` — auto-aprova leituras seguras
- `decision-detector.ts` — detecta decisões críticas para registrar
- `detect-clear-protect.sh` — protege contra /clear acidental
- `doc-rot-detector.ts` — detecta documentação desatualizada
- `log-tool-failure.sh` — loga falhas de ferramentas
- `production-preflight.sh` — bloqueia produção se research não existe
- `regra-2x-detector.ts` — detecta violações da regra 2x
- `subagent-start-log.sh` — loga início de subagent

**PreCompact (2 hooks):**
- `pre-compact-save.sh` — salva estado antes de compactar
- `session-digest-save.ts` — salva digest da sessão

**Stop (6 hooks):**
- `session-handoff.ts` — cria artefato de handoff ao encerrar
- `stop-copy-validation.ts` — verifica se copy produzida passou por black_validation
- `subagent-stop-validate.sh` — valida subagent ao encerrar
- `sync-repos-on-stop.sh` — sincroniza repos ao encerrar sessão
- `sync-site.sh` — sincroniza site ao encerrar
- `tool-enforcement-gate.ts` — gate final de enforcement de tools

---

## SYNAPSE — Motor de Contexto

1. **Token Budgets** — monitora consumo por fase, sinaliza antes da degradação
2. **Rule Injection** — rules e referências carregadas automaticamente no momento certo
3. **Auto-Compactação** — compacta histórico preservando estado crítico

### Rules por Fase (injeção automática)

| Fase | Rules Carregadas | Tokens |
|------|-----------------|--------|
| IDLE | constitution.md | ~500 |
| RESEARCH | constitution + voc-research + anti-homo + tool-usage-matrix | ~8.000 |
| BRIEFING | constitution + briefings-helix + mecanismo-unico + tool-usage-matrix | ~7.000 |
| PRODUCTION | constitution + copy-production + copy-chief + anti-homo | ~9.000 |
| REVIEW | constitution + copy-chief + tool-usage-matrix | ~5.000 |

### Context Brackets

| Bracket | Consumo | Comportamento |
|---------|---------|--------------|
| FRESH | ≤ 30% | Contexto completo, produção normal |
| MODERATE | ≤ 50% | Apenas essenciais carregadas |
| DEPLETED | ≤ 70% | Mínimo viável |
| CRITICAL | ≤ 85% | `/compact` de emergência — produção bloqueada |

Quando atinge CRITICAL, o hook `doc-rot-guardian.ts` bloqueia escritas em `production/` até que `/compact` seja executado.

---

## Top 12 Comandos

| Comando | Tipo | Para quê |
|---------|------|---------|
| @helix | Agente | Iniciar/retomar/checar qualquer pipeline. Ponto de entrada universal |
| @atlas | Agente | Briefing HELIX fase a fase + criar/validar MUP/MUS |
| @vox | Agente | VOC extraction + perfil de avatar |
| @cipher | Agente | Ads spy + Scale Score de concorrentes |
| @echo | Agente | Produção de VSL capítulo a capítulo |
| @hawk | Agente | Validação adversarial (blind critic + EST + black_validation) |
| /helix-system-agent | Skill | Pipeline completo orquestrado |
| /audience-research-agent | Skill | Research de audiência |
| /production-agent | Skill | Produção de copy em batch |
| /copy-critic | Skill | Crítica adversarial — protocolo STAND (Setup→Thesis→Antithesis→Nuance→Decision) |
| /criativos-agent | Skill | Produção e breakdown de criativos |
| /ecosystem-guide | Skill | Guia do ecossistema |

---

## Recovery e Persistência

**Agent Handoff — Artefatos Cross-Session:**
```yaml
# .aiox/handoffs/handoff-atlas-to-hawk-20260313.yaml
handoff:
  from_agent: atlas
  to_agent: hawk
  last_command: helix-phase-5
  story_context:
    story_id: oferta-exemplo
    story_status: BRIEFING
    current_task: Validação mecanismo fase 5
  decisions:
    - MUP aprovado com RMBC Structural 12/15
    - nova_causa definida como {exemplo-nova-causa}
  next_action: Rodar blind_critic + EST no MUS draft
  consumed: false
```

**Máximos por artifact:** 5 decisões, 10 arquivos, 3 blockers. Sessão retém no máximo 3 handoffs anteriores — o mais antigo é descartado ao incluir o quarto.

**Economia de contexto:** Troca de agente custa ~379 tokens (vs 3-5K do contexto completo). Em sessões longas, redução de 50-70% de contexto acumulado.

### Troubleshooting Completo

### Offer CONTEXT.md — Contexto por Oferta

Cada oferta tem um `CONTEXT.md` com tudo que o sistema precisa para produzir copy alinhada:
```
nicho-exemplo/oferta-exemplo/CONTEXT.md         # Mecanismo, avatar, DREs, gates, estado
nicho-exemplo/oferta-exemplo/helix-state.yaml   # Estado atual (gates, fase, tools)
nicho-exemplo/oferta-exemplo/mecanismo-unico.yaml  # MUP/MUS validados
```
Ao ativar uma oferta, o CONTEXT.md é carregado automaticamente. Se estiver desatualizado, o Doc Rot Detector gera report de inconsistências.

### /copy-critic — Protocolo STAND

O `/copy-critic` tenta destruir sua copy. Se não conseguir, ela está pronta. 5 fases:
1. **Setup** — carrega copy + briefing
2. **Thesis** — pontos fortes
3. **Antithesis** — ataque impiedoso
4. **Nuance** — ponderação de críticas
5. **Decision** — veredicto com score (APROVADO / REVISAR / REFAZER)

O critic ataca especificamente: genericidade, clíchês, Logo Test, mecanismo mal aplicado, VOC ausente, escalada emocional quebrada.

---

### "Não sei onde parei"
```bash
cat nicho-exemplo/oferta-exemplo/helix-state.yaml
```
Mostra `current_phase`, gates, tools_used e last_updated. O hook de SessionStart detecta automaticamente a última oferta trabalhada.

**"Copy genérica"**
- Sem arquivos obrigatórios: verificar se a copy tem seção GATE. Se não tem, foi produzida sem ler briefing, VOC e synthesis.
  ```
  "refaça lendo os arquivos obrigatórios: helix-complete.md, synthesis.md, language-patterns.md"
  ```
- Contexto degradado: rodar `/compact` e refazer. Hawk detecta via `emotional_stress_test` — score de genericidade abaixo de 8 bloqueia aprovação.

**"Gate bloqueado"**
```
validate_gate gate_type="research" offer_path="nicho-exemplo/oferta-exemplo"
```
Retorna lista específica: não "pesquisa incompleta" mas quais MCPs não foram chamados e quantas vezes. **Reiniciar a sessão NÃO desbloqueia gate** — o helix-state.yaml persiste.

**"Agente errado foi ativado"**
- Verificar `task-mcp-matrix.yaml` para o contexto correto
- `execution_context: subagent` → Helix usa `Agent()` com template de `squads/copy-chief/templates/subagent-prompts/`
- `execution_context: direct` → instrução ao usuário para ativar persona diretamente
- Erro mais comum: Helix usar `Skill` (carrega inline) em vez de `Agent()` (lança subagent isolado)

**"MCP não funciona num subagent"**
- Subagents customizados (researcher, copywriter) NÃO herdam MCPs no runtime
- Solução: usar `subagent_type: general-purpose` para qualquer task que precise de MCP
- Hook `subagent-type-warning.sh` emite alerta quando detecta subagent customizado

**"Contexto poluído ou pesado"**
```
/compact   # Compacta preservando estado crítico
/clear     # Limpa tudo (SYNAPSE salva estado antes de executar)
```

**"Handoff não foi retomado"**
```bash
ls .aiox/handoffs/
```
Se arquivo existe com `consumed: false`, o agente receptor deve lê-lo na ativação.

**"Dashboard não carrega"**
```bash
bun run ~/.claude/dashboard/server.ts
# Acesse http://localhost:4001
```
Dashboard é apenas observabilidade — não afeta o pipeline se estiver fora do ar.

---

## Estrutura de Arquivos do Ecossistema

```
~/.claude/
  skills/        — 11 skills (agentes e workflows)
  rules/         — carregamento contextual automático
  hooks/         — 65 automações de enforcement

~/ecosystem/
  squads/copy-chief/
    data/
      helix-ref/core/
        metodologias.md      — 7 frameworks
        RMBC.md              — critérios de validação
        formulas_e_criterios.md — gates e espelhamento MUP/MUS
      task-mcp-matrix.yaml   — 59 tasks mapeadas
    agents/                  — definição dos 13 agentes

  nicho-exemplo/
    oferta-exemplo/
      helix-state.yaml       — estado persistente
      mecanismo-unico.yaml   — fonte de verdade do mecanismo
      research/
        voc.md
        avatar.md
        competitors.md
        synthesis.md
      briefing/
        phase-01-identificacao.md
        phase-02-mineracao.md
        phase-03-avatar.md
        phase-04-consciencia.md
        phase-05-problema-vilao-mup.md
        phase-06-solucao-mus.md
        phase-07-big-offer.md
        phase-08-fechamento-pitch.md
        phase-09-leads-ganchos.md
        phase-10-progressao-emocional.md
      production/
        vsl.md
        landing-page.md
        criativos.md
        emails.md

  .aiox/
    handoffs/                — artefatos cross-session
```

---

---

## MCPs Externos Integrados

| MCP | Agentes | Função |
|-----|---------|--------|
| Firecrawl | Vox, Cipher | Scraping web autônomo. Agent mode para coleta extensa. Fallback: `firecrawl_scrape` (página única) e `firecrawl_search` (busca generalista) |
| Apify | Vox, Cipher | 200+ actors para extração social — YouTube comments, TikTok, Instagram, Reddit, Amazon reviews. Principal: `memo23/facebook-ads-library-scraper-cheerio` para discovery de ads |
| Facebook Ad Library | Cipher | `get_meta_platform_id` busca páginas por nome. `get_meta_ads` extrai ads de página específica. `analyze_ad_video` analisa criativos TOP. **Atenção: NÃO busca por keyword** — para isso usar Apify |
| Playwright | Vox, Cipher | Navegação em sites que bloqueiam scraping. Abre browser real, interage com DOM quando Firecrawl e Apify falham |
| Context7 | Atlas, Ops | Lookup de documentação de bibliotecas e APIs. Resolve library IDs e retorna docs atualizados |

### Hierarquia de Fallback para VOC

```
1. Apify Actor específico (timeout: 5min)  → comentários REAIS com métricas sociais
         |
         | (se falha)
         v
2. Playwright direto                        → navegação real, extrai do DOM
         |
         | (se falha)
         v
3. Firecrawl search                         → extração web generalista
         |
         | (se falha)
         v
4. WebSearch                                → ÚLTIMO RECURSO (sem comentários reais)
```

**Nunca pular direto para WebSearch.** WebSearch retorna resultados de busca — não quotes reais de usuários. A qualidade da VOC cai drasticamente.

---

## Subagent Types — Permissões por Tipo

| Subagent Type | Read/Write | WebSearch | ToolSearch | MCPs |
|--------------|-----------|----------|-----------|------|
| general-purpose | Sim | Sim | Sim | **Sim** |
| researcher | Sim | Sim | NÃO | NÃO |
| copywriter | Sim | NÃO | NÃO | NÃO |
| reviewer | Sim | NÃO | NÃO | NÃO |

**Regra crítica:** Para qualquer task que precise de MCP, usar `general-purpose`. Subagents customizados não herdam MCPs no runtime — tools são deferred e requerem ToolSearch, que não está disponível para tipos customizados.

**Limitação crítica dos subagents:** Subagents não podem usar deferred MCP tools. Dados coletados por MCPs externos (Apify, Firecrawl, FB Ad Library) devem ser coletados no nível do orquestrador e passados via prompt para o subagent.

---

## BSSF — Best Solution Selection Framework

Protocolo de decisão para qualquer problema do ecossistema: gaps de enforcement, hooks que falham, gates com comportamento inesperado.

**Regra cardinal:** NUNCA recomendar uma solução sem explorar 5 alternativas estruturalmente diferentes primeiro.

```
1. GERAR 5 soluções estruturalmente diferentes:
   - Solução 1: Mais rápida (band-aid típico)
   - Solução 2: Mais escalável (100x volume)
   - Solução 3: Mais mantível (menos debt)
   - Solução 4: Mais criativa
   - Solução 5: Mais resiliente (falha graciosa)

2. AVALIAR com pesos:
   - Integridade Estrutural: 40%
   - Escalabilidade: 20%
   - Mantibilidade: 20%
   - Impacto Imediato: 10%
   - Impacto Longo Prazo: 10%

3. CRIAR matriz de decisão (score 1-10 por critério)

4. RECOMENDAR a melhor — nunca a mais rápida
```

### GBS — Greedy Bypass Score

Pergunta única: "Em quantas semanas este problema volta?"

| Timeline | GBS | Status |
|---------|-----|--------|
| 1-2 semanas | 10-30 | REJEITAR (band-aid puro) |
| 3-4 semanas | 40-60 | QUESTIONAR |
| 5-8 semanas | 70-85 | ACEITAR |
| 8+ semanas | 90-100 | ESTRUTURAL |

**Regra absoluta:** GBS < 70 = REJEITAR. Sem exceções.

Todas as decisões BSSF ficam registradas em `~/.claude/gap-decision-log.md` com data, gap, 5 soluções, matriz e resultado.

---

## Research System — Deliverables Obrigatórios

7 arquivos obrigatórios antes de avançar do gate de research:

| # | Arquivo | Path | Bloqueante |
|---|---------|------|-----------|
| 1 | VOC Summary | research/voc/summary.md | SIM |
| 2 | VOC Trends | research/voc/trends-analysis.md | SIM |
| 3 | Competitors Summary | research/competitors/summary.md | SIM |
| 4 | Ads Library Spy | research/competitors/processed/ads-library-spy.md | SIM |
| 5 | Mechanism Summary | research/mechanism/summary.md | SIM |
| 6 | Avatar Summary | research/avatar/summary.md | SIM |
| 7 | Synthesis | research/synthesis.md (confidence ≥ 70%) | SIM |

O gate só passa se TODOS os 7 arquivos existem e o `synthesis.md` atingiu `confidence >= 70%`.

### Biblioteca de Nicho

Cada nicho tem um arquivo consolidado cross-ofertas:
```
{nicho}/biblioteca_nicho_{nicho}_CONSOLIDADA.md
```
Conteúdo: VOC consolidada, avatar unificado, linguagem e compliance do nicho, ângulos validados. **Carregar ANTES de pesquisar.**

---

## Knowledge Base — 24 Experts por Tier

A base de conhecimento inclui 24 experts de copywriting e marketing organizados em 5 tiers, com 27 checklists e 5 tiers de profundidade.

### T0 — Market Analysis, Research, Awareness Levels (3 experts)
- **Robert Cialdini** — Influence: 7 Principles of Ethical Influence. Pre-Suasion. Framework de persuasão por compliance
- **Robert Collier** — "Entre na conversa já acontecendo na mente deles." Carta de vendas clássica
- **David Ogilvy** — King of Madison Avenue. Research obsessivo. Headlines longas. Brand meets direct response

### T1 — Strategy, Mechanism, Big Idea, Positioning (10 experts)
- **Jay Abraham** — $21.7 Billion Dollar Man. Strategy of Preeminence. 3 Multipliers de crescimento geométrico
- **Agora Financial Model** — $2B+ revenue machine em newsletter promotions. Long-form copy em escala
- **Gary Bencivenga** — Maior copywriter vivo (aposentado). Mais controles vencidos da história. Persuasion Equation
- **Todd Brown** — The Mechanism Man. E5 Method. Unique Mechanism obsession. Anti-commodity
- **Alex Hormozi** — $100M Offers. Value Equation. Grand Slam Offers. No-BS content selling
- **Dan Kennedy** — No B.S. Direct Marketing. Deadline stacking. Reason-why everything. Magnetic Marketing
- **Clayton Makepeace** — Copywriter mais bem pago do mundo. $1.5B em vendas rastreadas. 9 checklists
- **Rosser Reeves** — Reality in Advertising. Unique Selling Proposition. Um claim, repetido implacavelmente
- **Ry Schwartz** — Conversion copywriter para launches e funnels. Coaching The Conversion Method
- **Eugene Schwartz** — Breakthrough Advertising. Mass desire channeling. Market awareness + sophistication mapping

### T2 — Body Copy, Bullets, Hooks, Close, Production (8 experts)
- **Russell Brunson** — DotCom Secrets. Expert Secrets. Funnel Hacker. Attractive Character
- **John Caples** — Father of Direct Response. Tested Advertising Methods. A/B testing pioneer. Headlines
- **John Carlton** — Most ripped-off copywriter alive. Simple Writing System. Street-smart. Raw e honesto
- **Andre Chaperon** — Autoresponder Madness. Email storytelling. Soap opera sequences. Narrative-driven
- **Gary Halbert** — Prince of Print. A-pile direct mail. Specificity fanatic. Street-level persuasion
- **Frank Kern** — Internet marketing pioneer. Personality-driven selling. Conversational authority
- **Sabri Suby** — Sell Like Crazy. High-volume ad testing. Funnel-first thinking. Godfather Offer
- **Joe Sugarman** — The Slippery Slope master. BluBlocker sunglasses. Emotional flow e leitura contínua

### T3 — Launches, Email, Social, Funnels, Specialized (2 experts)
- **John E. Powers** — World's first full-time copywriter. Father of modern creative advertising. Honest advertising
- **Gary Vaynerchuk** — Jab, Jab, Jab, Right Hook. Platform-native content. Volume strategy. Attention arbitrage

### AUD — Testing, Validation, Metrics, Optimization (1 expert)
- **Claude Hopkins** — Father of Scientific Advertising. Test everything. Measure everything. Accountability in copy

---

## Intelligence Systems — Camadas de Memória

### Zonas de Contexto (gerenciadas por SYNAPSE)

| Zona | O que contém | Tratamento SYNAPSE |
|------|-------------|-------------------|
| Início (primacy) | Constitution, rules, briefing da oferta | Nunca compacta |
| Fim (recency) | Trabalho atual, próxima ação | Preserva sempre |
| Meio (compressível) | Histórico de iterações, metadata | Compacta quando necessário |

### Doc Rot Detector

O `doc-rot-detector.ts` escaneia inconsistências entre `CONTEXT.md` e `helix-state.yaml` e gera report com severidade e recomendações de fix. Previne "documentação podre" — situação em que o CONTEXT.md não reflete o estado real da oferta.

### War Room Dashboard

Acesso: `http://localhost:4001` (inicia automaticamente via hook `dashboard-autostart.sh`)

| Tab | O que mostra |
|-----|-------------|
| Monitor | Eventos em tempo real via WebSocket: tools chamadas, gates, scores de validação |
| Kanban | Ofertas organizadas por fase (RESEARCH / BRIEFING / PRODUCTION / DELIVERED) |
| Insights | Métricas agregadas: scores médios, taxa de aprovação, tendências |
| Context | Health score do contexto, consumo de tokens, status SYNAPSE |

**Princípio:** Dashboard NUNCA controla — apenas observa. CLI é a fonte da verdade.

---

## Tags
#projetos #copy #ia #claude #direct-response #ferramentas #luca #collin #helix #mecanismo #vsl
