-- BioRitmo App — Supabase Schema
-- Rodar no SQL Editor do Supabase

-- Tabela de usuários (complementa auth.users do Supabase)
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text not null,
  nome text,
  fase_menopausa text,
  peso_inicial numeric(5,1),
  altura numeric(5,1),
  horario_cafe text,
  horario_almoco text,
  horario_janta text,
  janela_inicio text,
  janela_fim text,
  streak integer default 0,
  score_ressincronizacao integer default 0,
  plataforma_compra text,
  order_id text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tabela de sessões de jejum
create table if not exists public.jejum_sessoes (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  inicio timestamp with time zone not null,
  fim timestamp with time zone,
  duracao_horas numeric(4,1),
  completado boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tabela de progresso diário
create table if not exists public.progresso (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  data date not null,
  peso numeric(5,1),
  jejum_completado boolean default false,
  energia integer check (energia between 1 and 5),
  humor integer check (humor between 1 and 5),
  notas text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, data)
);

-- Tabela de compras (log de webhooks recebidos)
create table if not exists public.compras (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  plataforma text not null,
  order_id text,
  valor numeric(8,2),
  status text default 'pago',
  user_id uuid references public.profiles(id),
  payload jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS (Row Level Security)
alter table public.profiles enable row level security;
alter table public.jejum_sessoes enable row level security;
alter table public.progresso enable row level security;
alter table public.compras enable row level security;

-- Policies
create policy "Usuário vê apenas seu perfil"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Usuário atualiza apenas seu perfil"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Usuário vê apenas seus jejuns"
  on public.jejum_sessoes for all
  using (auth.uid() = user_id);

create policy "Usuário vê apenas seu progresso"
  on public.progresso for all
  using (auth.uid() = user_id);

-- Service role pode inserir compras (webhook)
create policy "Service role insere compras"
  on public.compras for insert
  with check (true);

-- Trigger para atualizar updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

create trigger on_profiles_updated
  before update on public.profiles
  for each row execute procedure public.handle_updated_at();
