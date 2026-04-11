---
tipo: projeto
status: ativo
atualizado: 2026-04-03
arquivo: estudos/portal/index.html
deploy: https://portal-be.netlify.app
---

# Portal de Estudos — Kauã

## Abrir
Duplo clique em `c:\Users\Desktop\Downloads\grupoaura\estudos\portal\index.html` no Chrome.

---

## Arquitetura

Single-page app em HTML puro (sem framework, sem build). Todo o conteúdo vive em um único `index.html`.
Requer internet só para KaTeX (renderização de fórmulas matemáticas).

### Seções do arquivo
1. `<style>` — todo o CSS (~400 linhas)
2. `<body>` — HTML shell das views (Home, Subject, Vestibular, Timer, Nanis card)
3. `<script>` — dados (`SUBJECTS`, `VESTIBULARES`) + motor JS (~900 linhas)

---

## Como adicionar — Templates

### ① Nova Matéria (subject)

Adicionar dentro do objeto `SUBJECTS` no JS:

```js
NOVA_MATERIA: {
  name: 'Nome da Matéria',
  icon: '🔢',           // emoji ou símbolo
  color: '#8b5cf6',     // hex color para o card
  topics: ['Tópico 1', 'Tópico 2', 'Tópico 3'],
  teoria: [
    {
      title: 'Título do Card de Teoria',
      body: `HTML com <strong>negrito</strong>, listas, etc.`,
      formula: 'latex_aqui = sem_cifrão',          // opcional
      highlight: 'Dica ou macete importante',       // opcional
      visual: `<svg>...</svg>`,                     // opcional — diagrama SVG
      visualCaption: 'Legenda da imagem',           // se usar visual
      table: {                                      // opcional
        heads: ['Col1', 'Col2', 'Col3'],
        rows: [['A','B','C'], ['D','E','F']]
      }
    }
  ],
  exercises: [
    // Nível 1 = Básico, 2 = Médio, 3 = Difícil, 4 = Vestibular
    {q:'Pergunta?', opts:['A','B','C','D'], ans:0, exp:'Explicação.', lvl:1, topic:'Tópico'},
    {q:'Pergunta vestibular?', opts:['A','B','C','D'], ans:2, exp:'Explicação.', lvl:4, topic:'Tópico', vest:'ENEM 2023'},
  ],
  flashcards: [
    {front: 'Pergunta/Conceito', back: 'Resposta/Definição'}
  ],
  videos: [
    {title: 'Nome do Vídeo', channel: 'Canal', topic: 'Tópico', url: 'https://youtube.com/results?search_query=...'}
  ],
  // Para matemática — habilita aba interativa com plotter, trig e polígonos:
  // interactive: 'math'
}
```

**Custo estimado:** ~400–800 tokens dependendo da quantidade de conteúdo.

---

### ② Adicionar Exercícios a Matéria Existente

Fazer Edit na seção `exercises:` da matéria. Template de uma questão:

```js
{q:'Enunciado da questão?', opts:['Opção A','Opção B','Opção C','Opção D'], ans:0, exp:'Explicação da resposta correta.', lvl:2, topic:'Nome do Tópico'}
// lvl: 1=Básico | 2=Médio | 3=Difícil | 4=Vestibular
// ans: índice da opção correta (0=A, 1=B, 2=C, 3=D)
// vest: 'ENEM 2022' (opcional — aparece como badge)
```

---

### ③ Novo Simulado de Vestibular

Adicionar dentro do objeto `VESTIBULARES` no JS:

```js
CHAVE_DO_EXAM: {
  name: 'FUVEST 2023',
  year: '2023',
  qs: 20,   // número de questões
  desc: 'Descrição curta do simulado',
  questions: [
    {
      n: 1,                          // número da questão
      area: 'Matemática',            // área do conhecimento
      q: 'Enunciado da questão?',
      opts: ['A','B','C','D','E'],   // SEMPRE 5 opções no vestibular
      ans: 0,                        // índice da correta (0=A ... 4=E)
      exp: 'Explicação da resposta.'
    },
    // ... mais questões
  ]
}
```

**Custo estimado:** ~600–1000 tokens para 20 questões.

---

### ④ Adicionar Vídeo a Matéria Existente

```js
{title: 'Título do Vídeo', channel: 'Nome do Canal', topic: 'Tópico', url: 'https://www.youtube.com/results?search_query=busca+aqui'}
```

---

### ⑤ Adicionar Visual (SVG/Diagrama) a Card de Teoria

No campo `teoria` de um subject, adicionar:

```js
visual: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <!-- SVG inline aqui -->
</svg>`,
visualCaption: 'Legenda da figura'
```

---

## Matérias existentes (2026-04-03)

| Matéria     | Teoria | Exercícios | Flashcards | Vídeos | Interativo |
|-------------|--------|------------|------------|--------|------------|
| Matemática  | 6      | 11         | 10         | 5      | Sim (plotter, trig, polígono) |
| Português   | 4      | 6          | 4          | 4      | Não |
| Física      | 5      | 24 (18 Prof. James + 6 gerais) | 6 | 3 | IA chat tutor |
| Biologia    | 3      | 7          | 3          | 3      | Sim (SVG célula) |
| Química     | 2      | 4          | 2          | 2      | Não |
| História    | 2      | 4          | 2          | 3      | Não |
| Geografia   | 2      | 4          | 2          | 2      | Não |

## Simulados de Vestibular existentes

| Simulado    | Questões | Estilo | Áreas |
|-------------|----------|--------|-------|
| ENEM 2019   | 20       | Questões reais/fiéis ao estilo oficial | Mat, Fís, Quím, Bio, Hist, Geo, Port |
| ENEM 2020   | 20       | Questões reais/fiéis ao estilo oficial | Mat, Fís, Quím, Bio, Hist, Geo, Port |
| ENEM 2022   | 20       | Questões reais/fiéis ao estilo oficial | Mat, Fís, Quím, Bio, Hist, Geo, Port |

**Ordem dos simulados:** enem2019 → enem2020 → enem2022 (auto-avança ao terminar)

---

## Lista do Professor (Prof. James)

Convenção para exercícios da lista do professor: `vest:'Prof. NomeProf Q1'` até `QN`.

Quando um subject tem pelo menos 1 exercício com `vest` contendo `'Prof.'`, uma aba exclusiva `👨‍🏫 Prof. James` aparece automaticamente — formato de aula, leitura, resolução completa visível.

Física tem 18 exercícios de MUV/Queda Livre/Gráficos do Prof. James (Q1–Q18).

---

## Features implementadas

- [x] Teoria colapsável com fórmulas KaTeX + exemplos resolvidos
- [x] Exercícios progressivos (lvl 1→4) com gabarito e shuffle de respostas
- [x] Quiz separado do banco de exercícios (quizQ vs exercises)
- [x] Aba "👨‍🏫 Prof. James" — lista do professor com resolução passo a passo
- [x] Flashcards com flip 3D
- [x] Vídeo-aulas mapeadas (YouTube search)
- [x] Simulados completos com timer + relatório por área + auto-avanço
- [x] Questões reais do ENEM (estilo oficial, 5 alternativas)
- [x] Plotter de funções interativo (canvas)
- [x] Triângulo trigonométrico interativo
- [x] Explorador de polígonos
- [x] SVG diagrama célula animal + Newton + molécula H₂O + gráfico f(x) + DNA
- [x] IA Chat (Profa. IA) integrada na matéria de Física (Claude Haiku via API)
- [x] Timer Pomodoro (25/50/custom)
- [x] Mensagens da Nanis com som (a cada 6-10 min)
- [x] Progresso salvo no localStorage
- [x] Design pink/rosa com pavões animados

---

## Como pedir atualizações (instrução ao Claude)

Envie o conteúdo da matéria/prova e peça:

> "Adiciona essa matéria ao portal" → Claude lê este arquivo → faz Edit cirúrgico → ~400 tokens
> "Adiciona esse simulado ao portal" → Claude lê este arquivo → faz Edit cirúrgico → ~600 tokens
> "Adiciona esses exercícios de [matéria]" → Edit na seção exercises → ~200 tokens
> "Sobe a lista do Prof. X" → marcar cada questão com `vest:'Prof. X Q1'` a `QN` na seção exercises → aba aparece automaticamente

---

## Template rápido — Lista do Professor

```js
// Dentro de exercises[] da matéria:
{q:'[Q1 — Prof. X] Enunciado da questão...',
 opts:['A','B','C','D'], ans:0,
 exp:'✏️ Passo 1: ... Passo 2: ... ✅ Resposta: A',
 lvl:2, topic:'Tópico', vest:'Prof. X Q1'},
```

A aba `👨‍🏫 Prof. X` aparece automaticamente quando existe `vest` com `'Prof.'`.

---

## Deploy

```
netlify deploy --dir "C:/Users/Desktop/Downloads/grupoaura/estudos/portal" --prod --site ca9c7b24-6f33-4b65-a99a-61d3fa764bc2
```

Site: **https://portal-be.netlify.app**
