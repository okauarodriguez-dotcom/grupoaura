---
tipo: checklist
projeto: BioRitmo App
status: em-andamento
data: 2026-04-13
---

# BioRitmo — Checklist de Deploy

## Status Atual
**App no ar:** https://bioritmo-app.vercel.app ✅  
**Plataforma:** Greenn  
**Código:** /Users/kauahenrique/Documents/bioritmo-app/

---

## ✅ Concluído

- [x] App PWA completo — todas as telas funcionando
- [x] Ícones PWA gerados (icon-192, icon-512, apple-touch-icon)
- [x] Score de ressincronização + 3 abas no Progresso
- [x] Confetti no check-in
- [x] Webhook multi-plataforma (kiwify, hotmart, greenn, +4)
- [x] supabase-schema.sql criado
- [x] vercel.json + deploy.sh configurados
- [x] Deploy Vercel feito → https://bioritmo-app.vercel.app
- [x] Login Vercel configurado no Mac
- [x] **Supabase** — projeto criado, schema rodado, env vars configuradas
- [x] **Resend** — API key adicionada na Vercel (re_24ZDG88T_*)
- [x] **Env vars na Vercel** — todas configuradas + redeploy feito
- [x] **Webhook Greenn** — endpoint dedicado `/api/webhook/greenn` criado (sem query params)
  - URL configurada na Greenn: `https://bioritmo-app.vercel.app/api/webhook/greenn`
  - Teste de webhook: ✅ "Teste enviado com sucesso"
- [x] **VTurb** — mini VSL configurada com botão no 8:45, link do checkout Greenn
- [x] **PV v2.0** — reescrita com /copy + análise de concorrentes (C01, C02, C03, Reverse Health)
  - 14 blocos + P.S.
  - Garantia dupla, comparação, perguntas de valor emocional, depoimentos específicos
  - Mockup HTML atualizado (pv-mockup.html)

---

## ⏳ Pendente

### Próximos — Pós aprovação do produto na Greenn

- [ ] **Greenn produto aprovado** → confirmar se checkout está ativo
- [ ] **Compra teste** — fazer compra real de R$29,90 para validar fluxo completo:
  - Greenn → webhook → Supabase (cria usuário) → Resend (envia email com magic link)
  - Clicar no magic link → onboarding → app funcionando
- [ ] **Greenn "Entrega de Conteúdos"** — adicionar `https://bioritmo-app.vercel.app` como URL externa
- [ ] **WhatsApp** — adicionar `NEXT_PUBLIC_WHATSAPP_URL` na Vercel quando tiver o grupo
- [ ] **Inlead — Etapa 33** — montar com VTurb embed + copy da PV v2.0

---

### Opcional (depois)

- [ ] Comprar domínio `bioritmo.com.br` no Registro.br (~R$40/ano)
- [ ] Apontar `app.bioritmo.com.br` → Vercel (CNAME)
- [ ] Gravar VSL com HeyGen (Dr. Eduardo)
- [ ] Configurar VTurb com a VSL
- [ ] Montar etapa 33 no Inlead (usar pv-mockup.html como referência)
- [ ] Subir anúncios → validação R$300
