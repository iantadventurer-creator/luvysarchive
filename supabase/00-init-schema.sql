-- ============================================================================
-- Setup inicial para un proyecto de Supabase nuevo (LuvysArchive).
--
-- CÓMO APLICARLO: Supabase → SQL Editor → New query → pega TODO este
-- archivo → Run. Es la única migración que hace falta correr en un
-- proyecto recién creado (ya incluye lo que en IanTBuild se hizo en
-- varios pasos sueltos).
-- ============================================================================

-- 1) Tablas del foro de la comunidad
create table if not exists public.community_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  image_url text not null,
  instagram_handle text,
  instagram_url text,
  category text,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.post_likes (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.community_posts(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (post_id, user_id)
);

-- 2) Perfiles: por ahora solo la foto de avatar de cada usuario (el handle
-- se sigue "prestando" de sus propias publicaciones, no hay tabla de
-- perfiles públicos con más datos).
create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  avatar_url text,
  updated_at timestamptz not null default now()
);

-- 3) Row Level Security
alter table public.community_posts enable row level security;
alter table public.post_likes enable row level security;
alter table public.profiles enable row level security;

drop policy if exists "community_posts_select_all" on public.community_posts;
create policy "community_posts_select_all"
  on public.community_posts for select
  using (true);

drop policy if exists "community_posts_insert_own" on public.community_posts;
create policy "community_posts_insert_own"
  on public.community_posts for insert
  with check (auth.uid() = user_id);

drop policy if exists "community_posts_update_own" on public.community_posts;
create policy "community_posts_update_own"
  on public.community_posts for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "community_posts_delete_own" on public.community_posts;
create policy "community_posts_delete_own"
  on public.community_posts for delete
  using (auth.uid() = user_id);

drop policy if exists "post_likes_select_all" on public.post_likes;
create policy "post_likes_select_all"
  on public.post_likes for select
  using (true);

drop policy if exists "post_likes_insert_own" on public.post_likes;
create policy "post_likes_insert_own"
  on public.post_likes for insert
  with check (auth.uid() = user_id);

drop policy if exists "post_likes_delete_own" on public.post_likes;
create policy "post_likes_delete_own"
  on public.post_likes for delete
  using (auth.uid() = user_id);

drop policy if exists "profiles_select_all" on public.profiles;
create policy "profiles_select_all"
  on public.profiles for select
  using (true);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
  on public.profiles for insert
  with check (auth.uid() = user_id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ============================================================================
-- 4) Storage: los buckets "galeria" y "foro-fotos" hay que crearlos a mano
-- (Storage → New bucket → marcar "Public"), estas políticas asumen que ya
-- existen con esos nombres exactos.
-- ============================================================================
drop policy if exists "foro_fotos_select_all" on storage.objects;
create policy "foro_fotos_select_all"
  on storage.objects for select
  using (bucket_id = 'foro-fotos');

drop policy if exists "foro_fotos_insert_auth" on storage.objects;
create policy "foro_fotos_insert_auth"
  on storage.objects for insert
  with check (bucket_id = 'foro-fotos' and auth.role() = 'authenticated');

drop policy if exists "foro_fotos_delete_own" on storage.objects;
create policy "foro_fotos_delete_own"
  on storage.objects for delete
  using (bucket_id = 'foro-fotos' and auth.uid() = owner);

drop policy if exists "galeria_select_all" on storage.objects;
create policy "galeria_select_all"
  on storage.objects for select
  using (bucket_id = 'galeria');

-- ============================================================================
-- 5) (Opcional, recomendado) Activa Realtime para que el feed del foro se
-- actualice en vivo: Database → Replication → activa "community_posts" y
-- "post_likes".
-- ============================================================================
