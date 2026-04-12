---
tipo: indice
produto: BioRitmo
status: em-producao
data: 2026-04-11
---

# BioRitmo — Índice do Produto

App de jejum intermitente personalizado para mulheres na menopausa.
**Preço:** R$29,90 | **Público:** Mulheres 40-70 anos

---

## Arquivos

| Arquivo | Conteúdo |
|---|---|
| [processo-do-zero.md](./processo-do-zero.md) | Processo completo do zero ao produto: nicho, pesquisa, mecanismo, quiz, VSL, funil, validação |
| [vsl-bioritmo.md](./vsl-bioritmo.md) | Mini VSL completa — 5 blocos aprovados para gravar |
| [concorrentes.md](./concorrentes.md) | Análise de C01, C03 e Reverse Health UK |
| [../projects/quiz-lowticket-menopausa.md](../projects/quiz-lowticket-menopausa.md) | Quiz completo — 32 etapas no Inlead |

## Arquivos de Referência

| Arquivo | Conteúdo |
|---|---|
| [../../lowticket/curso-vturb-lowticket.md](../../lowticket/curso-vturb-lowticket.md) | Metodologia VTurb — Low Ticket com Mini VSL |
| [../../lowticket/curso-upsell-joao-campos.md](../../lowticket/curso-upsell-joao-campos.md) | Metodologia João Campos — Upsell |
| [../../lowticket/pesquisa-publico-emagrecimento.md](../../lowticket/pesquisa-publico-emagrecimento.md) | Pesquisa de público — dores reais |

---

## Status

- [x] Quiz 32 etapas — Inlead ✅
- [x] Mini VSL escrita — 5 blocos ✅
- [x] **App PWA completo — localhost:3001** ✅
- [ ] Criar projeto Supabase + configurar env vars
- [ ] Deploy Vercel → app.bioritmo.com.br
- [ ] Criar ícones PWA (icon-192.png, icon-512.png) → tá dando 404
- [ ] Checkout configurado
- [ ] VSL gravada (HeyGen)
- [ ] VTurb configurado (cupom: vturb40)
- [ ] Etapa 33 no Inlead
- [ ] Upsell
- [ ] Anúncios
- [ ] Validação R$300

---

## App PWA — Status Técnico (2026-04-12)

**Localização:** `/Users/kauahenrique/Documents/bioritmo-app/`
**Dev server:** `cd bioritmo-app && npm run dev` → http://localhost:3001

### Telas prontas
| Tela | Arquivo | Status |
|---|---|---|
| Home (relógio metabólico) | `src/app/page.tsx` | ✅ |
| Onboarding (3 steps + preview) | `src/app/onboarding/page.tsx` | ✅ |
| Plano 21 Dias | `src/app/plano/page.tsx` | ✅ |
| Calculadora de Jejum | `src/app/calculadora/page.tsx` | ✅ |
| Progresso + Check-in | `src/app/progresso/page.tsx` | ✅ |
| Bônus e Receitas | `src/app/bonus/page.tsx` | ✅ |
| Comunidade | `src/app/comunidade/page.tsx` | ✅ |
| Login (magic link) | `src/app/login/page.tsx` | ✅ |
| Webhook multi-plataforma | `src/app/api/webhook/purchase/route.ts` | ✅ |

### Pendências técnicas
- **Supabase:** criar projeto em supabase.com → copiar URL + ANON_KEY + SERVICE_ROLE_KEY para `.env.local`
- **Ícones PWA:** criar `/public/icons/icon-192.png` e `icon-512.png` (logo 🔥 laranja fundo preto)
- **Vercel:** `npx vercel --prod` — configurar env vars no dashboard
- **Webhook URL:** registrar `https://app.bioritmo.com.br/api/webhook/purchase?platform=kiwify` no painel Kiwify
- **WhatsApp grupo:** substituir `https://chat.whatsapp.com/link-do-grupo` pela URL real em `src/app/comunidade/page.tsx` e `src/components/WhatsAppButton.tsx`
- **Resend.com:** criar conta gratuita → copiar API key → configurar `EMAIL_FROM` com domínio verificado
