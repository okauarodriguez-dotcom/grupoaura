# CLAUDE.md

## Projeto
**Grupo Aura** — empresa de direct response (infoprodutos e nutraceuticos).

## GitHub
- Repo: https://github.com/okauarodriguez-dotcom/grupoaura
- Branch principal: main

## Git — Sincronização Automática
Hook `Stop` executa após cada sessão:
```bash
cd "c:/Users/Desktop/Downloads/grupoaura" && \
git add -A && \
git diff --cached --quiet || git commit -m "auto: atualizacao do projeto $(date '+%Y-%m-%d_%H%M')" && \
git push origin main
```

---

## Quem é o Kauã
Empresário de direct response — venda de infoprodutos e nutraceuticos. Gere campanhas, lançamentos, ofertas e time. Usa o vault também para vida pessoal (metas, saúde, finanças, família).

## Vault Obsidian — Estrutura
```
inbox/      Entrada — tudo novo cai aqui
daily/      Brain dumps e reflexões diárias
campanhas/  Copies, funis, métricas, testes
produtos/   Posicionamento, VSLs, ofertas
operacoes/  Time, processos, financeiro
decisoes/   Decisões + raciocínio
people/     Parceiros, afiliados, time
projects/   Lançamentos e projetos ativos
pessoal/    Metas, saúde, família
livros/     Resumos e insights
mentoria/   Aulas e notas de mentorias
archive/    Concluído — nunca deletado
```

## Regras de captura
Use `/capturar` para ativar as regras completas de captura automática (pessoas, livros, projetos, decisões, reuniões).

## Puppeteer MCP
Controla o Chrome do Kauã (já logado). Curso ativo: Mentoria Ouro Digital 2.0 — Higor Neves.
URL: `dashboard.kiwify.com/course/premium/f65ec31c-c5e8-442b-8c46-19fb07a8ca8c`
Ao acessar aulas → salvar em `mentoria/higor-neves-YYYY-MM-DD-titulo.md` com resumo, insights e próximos passos.

---

## Protocolo de Abertura Diária
Sempre que o Kauã mandar "bom dia", "boa tarde" ou "boa noite", rodar imediatamente o protocolo em `operacoes/protocolo-abertura-diaria.md` — fazer as 6 perguntas antes de qualquer outra coisa. Obrigatório.

---

## Compact Instructions
Ao compactar, preservar: decisões tomadas, campanhas ativas e seus status, próximos passos definidos, contexto de produto/oferta em discussão.
