---
type: projeto
status: no-ar
tags: [projects, portal, mentoria, dr]
dono: "[[../pessoal/Kauã]]"
---

# Portal Mentorados — Portal DR Kauã Henrique

**Status:** No ar em produção ✅
**URL:** https://portal-dr.vercel.app
**GitHub:** https://github.com/okauarodriguez-dotcom/portal-dr
**Dono:** [[../pessoal/Kauã|Kauã]]

---

## Origem

[[../people/kaua-vicensotti|Kauã Vicensotti]] — ex-professor de beach tennis — viu uma foto do escritório com R$300k de lucro e perguntou como funciona. Kauã explicou DR, ofereceu mentoria por R$4.000/2 meses. Ele só tinha R$600 e era muito cético.

Solução: criar um portal com todo o conhecimento de DR do zero — em texto, ilustrações e exercícios. Começou como solução para o amigo e virou produto para todos os mentorados.

---

## O que é

Plataforma exclusiva de ensino de Direct Response — do iniciante ao operador avançado. Progressão linear com XP, streak, conquistas, exercícios práticos, checklists e "Visão do Kauã" em cada aula.

---

## Stack técnica

| Camada | Tecnologia |
|---|---|
| Frontend | Next.js 14 (App Router) |
| Estilização | Tailwind CSS + Framer Motion |
| Auth + Banco | Supabase (PostgreSQL + Auth) |
| Deploy | Vercel |
| Mídia | Supabase Storage |

---

## Módulos (8 no total)

| # | Módulo |
|---|---|
| 0 | Boas-vindas e Referências |
| 1 | Fundamentos de Direct Response |
| 2 | Funis de DR (VSL, Quiz, Bridge) |
| 3 | Oferta e Copy |
| 4 | Edição e Criativos |
| 5 | Tráfego Pago |
| 6 | Contingência e Operação |
| 7 | Conteúdos Orgânicos Curados |

---

## Design

- **Background:** `#0a0a0a`
- **Destaque:** `#c9a84c` (dourado)
- **Fontes:** Bebas Neue · Syne · DM Sans
- **Identidade:** "KAUÃ RODRIGUES" na tela de login com gradiente dourado

---

## Features entregues

### Aluno
- [x] Login premium com identidade visual Kauã Rodrigues
- [x] Dashboard: saudação, frase motivacional, próxima aula, streak, progresso por módulo, conquistas
- [x] Progressão linear — aula só abre quando a anterior está concluída
- [x] Checklist interativo por aula persistido no banco
- [x] Botão "Concluir" libera XP + modal com confetti + badge
- [x] Sistema de XP com níveis: Iniciante → Operador → Especialista → Elite DR
- [x] Streak diário (dias consecutivos de estudo)
- [x] 7 conquistas/badges desbloqueáveis automaticamente
- [x] PDF de material de apoio por aula
- [x] Tarefa de casa com envio e status (pendente → enviada → aprovada)
- [x] Notas pessoais por aula (drawer lateral)
- [x] Página `/notas` com todas as anotações
- [x] Recuperação de senha por e-mail
- [x] Mobile responsivo (sidebar como drawer)

### Admin
- [x] Painel `/admin` com métricas gerais
- [x] `/admin/mentorados` — criar e gerenciar alunos
- [x] `/admin/conteudo` — CRUD de módulos e aulas
- [x] `/admin/tarefas` — aprovar tarefas de casa (+XP bônus)

---

## Status atual

**Fase:** No ar — aguardando conteúdo das aulas

**Próximo passo:** Adicionar conteúdo real nas aulas via `/admin/conteudo`
**Depois:** Criar contas dos mentorados e enviar o link

---

## Notas
- Build do zero ao deploy em produção em um único dia (2026-03-27)
- Domínio customizado pode ser adicionado depois via Vercel → Settings → Domains (ex: portal.grupoaura.com.br)
