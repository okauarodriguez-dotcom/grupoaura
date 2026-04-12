---
tipo: checklist
projeto: BioRitmo App
status: em-andamento
data: 2026-04-12
---

# BioRitmo — Checklist de Deploy

App PWA pronto localmente. Seguir essa ordem para ir ao ar.

---

## 1. Supabase (banco + auth)

- [ ] Criar conta em supabase.com
- [ ] Criar novo projeto (nome: bioritmo, região: South America)
- [ ] Copiar **Project URL** → colar em `.env.local` como `NEXT_PUBLIC_SUPABASE_URL`
- [ ] Copiar **anon/public key** → colar como `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Copiar **service_role key** → colar como `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Rodar o SQL abaixo no SQL Editor do Supabase:

```sql
create table users (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  nome text,
  idade_faixa text,
  horario_cafe text default '08:00',
  horario_almoco text default '12:00',
  horario_janta text default '19:00',
  data_compra timestamptz default now(),
  plataforma text,
  ativo boolean default true
);

create table checkins (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references users(id) on delete cascade,
  data date default current_date,
  acordou_inchada boolean,
  barriga_menor boolean,
  energia text check (energia in ('baixa', 'media', 'alta')),
  dia_jejum int,
  created_at timestamptz default now()
);

alter table users enable row level security;
alter table checkins enable row level security;

create policy "usuario ve seu proprio perfil" on users for all using (auth.uid() = id);
create policy "usuario ve seus checkins" on checkins for all using (auth.uid() = user_id);
```

---

## 2. Resend (email transacional)

- [ ] Criar conta gratuita em resend.com (3.000 emails/mês grátis)
- [ ] Ir em **API Keys** → Create API Key → copiar para `RESEND_API_KEY`
- [ ] Ir em **Domains** → Add Domain → verificar DNS de `bioritmo.com.br`
- [ ] Definir `EMAIL_FROM` como `Dr. Eduardo <noreply@bioritmo.com.br>`

---

## 3. Ícones PWA

- [ ] Criar imagem 512x512px: fundo preto `#0a0a0a`, emoji 🔥 centralizado laranja
  - Usar Canva, Figma ou qualquer editor
- [ ] Salvar como `bioritmo-app/public/icons/icon-192.png` (192x192)
- [ ] Salvar como `bioritmo-app/public/icons/icon-512.png` (512x512)

---

## 4. WhatsApp

- [ ] Substituir `https://chat.whatsapp.com/link-do-grupo` pelo link real:
  - `src/app/comunidade/page.tsx` — linha do `<a href=...>`
  - `src/components/WhatsAppButton.tsx` — constante `WHATSAPP_URL`

---

## 5. Variáveis de ambiente completas

Abrir `bioritmo-app/.env.local` e preencher tudo:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
RESEND_API_KEY=re_...
EMAIL_FROM=Dr. Eduardo <noreply@bioritmo.com.br>
NEXT_PUBLIC_APP_URL=https://app.bioritmo.com.br
WEBHOOK_SECRET_KIWIFY=seu-token-aqui
WEBHOOK_SECRET_HOTMART=seu-token-aqui
```

---

## 6. Deploy Vercel

- [ ] Instalar Vercel CLI: `npm i -g vercel`
- [ ] Na pasta do app: `cd bioritmo-app && npx vercel --prod`
- [ ] No dashboard Vercel → **Settings → Environment Variables** → adicionar todas as vars do `.env.local`
- [ ] Configurar domínio customizado: `app.bioritmo.com.br` → apontar DNS para Vercel
- [ ] Testar em `https://app.bioritmo.com.br`

---

## 7. Kiwify — Webhook

- [ ] No painel Kiwify → produto BioRitmo → **Webhooks**
- [ ] Adicionar URL: `https://app.bioritmo.com.br/api/webhook/purchase?platform=kiwify`
- [ ] Copiar o token gerado → colar em `WEBHOOK_SECRET_KIWIFY` no Vercel
- [ ] Fazer compra teste → confirmar email chegou + conta criada no Supabase

---

## 8. Teste final mobile

- [ ] Acessar `https://app.bioritmo.com.br` no iPhone
- [ ] Safari → Compartilhar → **Adicionar à Tela Inicial** → ícone aparece
- [ ] Abrir pelo ícone → tela cheia sem barra do browser
- [ ] Fazer onboarding completo
- [ ] Fazer check-in
- [ ] Confirmar relógio metabólico rodando em tempo real

---

## Após deploy — próximos passos

- [ ] Gravar VSL com HeyGen (Dr. Eduardo) — script pronto em `produtos/bioritmo/vsl-bioritmo.md`
- [ ] Configurar VTurb com a VSL (cupom: vturb40)
- [ ] Criar etapa 33 no Inlead (VSL + botão de compra)
- [ ] Subir anúncios → validação R$300
