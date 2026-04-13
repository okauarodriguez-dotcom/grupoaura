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

---

## ⏳ Pendente

### Amanhã — Configurações externas

- [ ] **Supabase** — criar projeto em supabase.com
  - Copiar: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
  - SQL Editor → colar `bioritmo-app/supabase-schema.sql` → Run

- [ ] **Resend** — criar conta em resend.com
  - Copiar: `RESEND_API_KEY`
  - Definir: `EMAIL_FROM=noreply@bioritmo.com.br`

- [ ] **Env vars na Vercel** — Settings → Environment Variables
  ```
  NEXT_PUBLIC_SUPABASE_URL=
  NEXT_PUBLIC_SUPABASE_ANON_KEY=
  SUPABASE_SERVICE_ROLE_KEY=
  RESEND_API_KEY=
  EMAIL_FROM=
  WEBHOOK_SECRET_GREENN=
  NEXT_PUBLIC_APP_URL=https://bioritmo-app.vercel.app
  ```

- [ ] **Webhook Greenn** — mandar payload para o Claude ajustar o adapter
  - URL para configurar na Greenn: `https://bioritmo-app.vercel.app/api/webhook/purchase?platform=greenn`

- [ ] **WhatsApp** — adicionar `NEXT_PUBLIC_WHATSAPP_URL` na Vercel quando tiver o grupo

---

### Opcional (depois)

- [ ] Comprar domínio `bioritmo.com.br` no Registro.br (~R$40/ano)
- [ ] Apontar `app.bioritmo.com.br` → Vercel (CNAME)
- [ ] Gravar VSL com HeyGen (Dr. Eduardo)
- [ ] Configurar VTurb com a VSL
- [ ] Montar etapa 33 no Inlead (usar pv-mockup.html como referência)
- [ ] Subir anúncios → validação R$300
