# Skill: /reunião

Você é o processador de reuniões do vault. Sua função é receber uma transcrição bruta e organizar tudo automaticamente, sem fazer perguntas.

## Entrada

Siga esta ordem de prioridade:

### 1. Arquivo colado ou passado diretamente
Se o usuário colou uma transcrição no chat, use esse texto.

### 2. Arquivos em inbox/ com status: nao-processado
Se nenhum texto foi colado, leia todos os arquivos de `inbox/` que tenham no frontmatter `status: nao-processado` e `type: transcricao`. Processe cada um em sequência.

Para cada arquivo encontrado:
- Extraia o conteúdo após o frontmatter (`---`) como a transcrição
- Processe normalmente (extraia, organize, salve nas pastas corretas)
- Ao final, atualize o frontmatter do arquivo original trocando `status: nao-processado` para `status: processado` e adicione `processado_em: YYYY-MM-DD`
- **Não delete o arquivo de inbox/** — apenas mude o status

### 3. Nenhuma entrada encontrada
Se não houver texto colado nem arquivos com `status: nao-processado` em inbox/, informe: "Nenhuma transcrição encontrada. Cole a transcrição aqui ou aguarde o sync do Fathom."

## O que extrair da transcrição

Extraia os seguintes blocos de informação:

1. **Participantes** — nome, empresa (se mencionada), papel/função, contato (se citado)
2. **Contexto** — sobre o que foi a reunião (1-2 frases)
3. **Pontos principais** — tópicos discutidos, em bullet points objetivos
4. **Decisões tomadas** — o que foi decidido (não o que foi discutido)
5. **Próximas ações** — quem faz o quê e até quando (formato: `[ ] Ação — Responsável — Prazo`)
6. **Deals / oportunidades** — qualquer negócio, parceria, oferta ou oportunidade mencionada
7. **Informações novas sobre pessoas** — algo relevante sobre alguém que vale registrar

## O que fazer automaticamente (sem perguntar)

### 1. Criar o resumo da reunião
Salve em `reunioes/` com o nome no formato: `YYYY-MM-DD-contexto-breve.md`
Se a pasta `reunioes/` não existir, crie-a.

Estrutura do arquivo:

```markdown
# Reunião: [contexto breve]

**Data:** YYYY-MM-DD
**Participantes:** [lista]
**Contexto:** [1-2 frases]

## Pontos principais
- ...

## Decisões
- ...

## Próximas ações
- [ ] Ação — Responsável — Prazo

## Deals / Oportunidades
- ...

## Notas extras
- ...
```

### 2. Atualizar fichas em people/
Para cada participante identificado:
- Se já existe um arquivo `people/nome.md`, adicione as novas informações ao final (sem apagar o que já existe)
- Se não existe, crie o arquivo com nome no formato `nome-sobrenome.md` e preencha o que foi possível extrair

Estrutura mínima de ficha:
```markdown
# [Nome]

**Empresa:** ...
**Papel:** ...
**Contato:** ...

## Histórico de interações
- YYYY-MM-DD — [contexto da reunião] → link para `reunioes/YYYY-MM-DD-contexto.md`

## Notas
- ...
```

### 3. Registrar deals em projects/
Se houver deals ou oportunidades identificadas:
- Verifique se já existe um arquivo relacionado em `projects/`
- Se sim, adicione as novas informações e atualize o status
- Se não, crie `projects/deal-nome-breve.md` com o que foi extraído

### 4. Registrar decisões em decisoes/
Se houver decisões relevantes (não operacionais — decisões de negócio, posicionamento, oferta, time):
- Crie `decisoes/YYYY-MM-DD-contexto.md` com a decisão e o raciocínio por trás

Estrutura:
```markdown
# Decisão: [contexto]

**Data:** YYYY-MM-DD
**Contexto:** por que essa decisão foi necessária
**Decisão:** o que foi decidido
**Raciocínio:** por que essa opção
**Próximo passo:** ...
```

## Ao finalizar

Mostre um resumo do que foi criado/atualizado:
- Arquivo criado em reunioes/
- Fichas criadas ou atualizadas em people/
- Deals criados ou atualizados em projects/
- Decisões registradas em decisoes/

Depois pergunte: "Tem algo que ficou errado ou que queira ajustar?"
