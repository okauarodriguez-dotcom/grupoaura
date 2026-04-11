---
type: projeto
status: em-implementacao
tags: [projects, automacao, puppeteer, mcp, chrome, higor-neves]
criado: 2026-03-28
---

# Automação Chrome — Puppeteer MCP

**Status:** Em implementação — MCP instalado, falta registrar no Claude Code
**Objetivo:** Dar ao Claude acesso ao Chrome para navegar, acessar e extrair conteúdo do curso do Higor Neves

---

## Contexto

Configurar o servidor MCP de Puppeteer para que o Claude Code consiga controlar o Chrome do Kauã. Com isso, o Claude pode:
- Acessar plataformas de curso (como a do Higor Neves)
- Navegar por aulas, extrair conteúdo, resumir módulos
- Capturar e organizar aprendizados automaticamente no vault Obsidian

---

## Estado atual (2026-03-28)

- [x] Pacote `@modelcontextprotocol/server-puppeteer` instalado em `~/.claude/mcp-servers/puppeteer/`
- [x] Arquivo `mcp.json` criado em `~/.claude/` com a configuração do servidor
- [x] Arquivo `index.js` local criado em `~/.claude/mcp-servers/puppeteer/`
- [ ] Servidor registrado no Claude Code via `claude mcp add`
- [ ] Conexão testada e confirmada (`claude mcp list` mostrando puppeteer como Connected)
- [ ] Teste de navegação no Chrome funcionando
- [ ] Acesso ao curso do Higor Neves testado

---

## Checklist de implementação

### 1. Registrar o MCP no Claude Code
```bash
claude mcp add puppeteer -s user -- node "C:\Users\Desktop\.claude\mcp-servers\puppeteer\node_modules\@modelcontextprotocol\server-puppeteer\dist\index.js"
```

### 2. Verificar registro
```bash
claude mcp list
# Deve aparecer: puppeteer (stdio) - Connected
```

### 3. Testar controle do Chrome
- Abrir o Claude Code em uma nova sessão
- Pedir ao Claude para abrir uma URL no Chrome
- Verificar se o Puppeteer responde corretamente

### 4. Acessar o curso do Higor Neves
- Fazer login na plataforma do curso
- Navegar pelos módulos
- Extrair conteúdo das aulas para o vault

---

## Próximos passos após configurar

- [ ] Definir fluxo de captura: aula → transcrição → `mentoria/higor-neves-YYYYMMDD-titulo.md`
- [ ] Criar template para notas de aula do curso

---

## Notas técnicas

- O `mcp.json` em `~/.claude/` **não é lido** pelo Claude Code — a configuração precisa ser feita via `claude mcp add`
- Flag `-s user` = configuração global (vale para qualquer projeto)
- Flag `-s project` = configuração só para o projeto atual
