# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project
**Grupo Aura** — projeto em desenvolvimento. Atualize este arquivo conforme o projeto evolui.

## GitHub Repository
- **URL:** https://github.com/okauarodriguez-dotcom/grupoaura
- **Usuário:** okauarodriguez-dotcom
- **Branch principal:** main

## Git — Sincronização Automática
A cada alteração no projeto feita pelo Claude Code, o repositório é atualizado automaticamente via hook `Stop`.

O hook executa o seguinte script após cada sessão:
```bash
cd "c:/Users/Desktop/Downloads/grupoaura" && \
git add -A && \
git diff --cached --quiet || git commit -m "auto: atualização do projeto $(date '+%Y-%m-%d %H:%M')" && \
git push origin main
```

As credenciais estão configuradas no remote via token embutido na URL (configuração local, não versionada).

## Commands

<!-- Adicione os comandos de desenvolvimento aqui quando o projeto for configurado. Exemplos:
- `npm install` — instalar dependências
- `npm run dev` — iniciar servidor de desenvolvimento
- `npm run build` — gerar build de produção
- `npm test` — executar testes
-->

## Architecture

<!-- Descreva a arquitetura do projeto aqui quando o código for criado. Exemplos:
- Tecnologias principais utilizadas
- Estrutura de pastas e responsabilidades
- Como os módulos se comunicam
-->
