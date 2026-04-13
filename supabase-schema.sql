-- Supabase schema for ADEN bespoke store

-- Enable UUID generation for Supabase/Postgres
create extension if not exists pgcrypto;

-- Products table
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  subtitle text not null,
  description text,
  price numeric(10,2) not null,
  image text not null,
  inventory_count integer default 0 not null,
  available boolean default true not null,
  created_at timestamp with time zone default timezone('utc', now()) not null,
  updated_at timestamp with time zone default timezone('utc', now()) not null
);

-- Blog posts table
create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text not null,
  content text,
  author_id uuid references users(id) on delete set null,
  published boolean default false not null,
  published_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc', now()) not null,
  updated_at timestamp with time zone default timezone('utc', now()) not null
);

-- Orders table
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete set null,
  customer_name text not null,
  status text not null,
  subtotal numeric(12,2) not null,
  shipping numeric(12,2) default 0.00 not null,
  total numeric(12,2) not null,
  notes text,
  created_at timestamp with time zone default timezone('utc', now()) not null,
  updated_at timestamp with time zone default timezone('utc', now()) not null
);

-- Order items table for line items
create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id) on delete cascade,
  product_id uuid references products(id) on delete set null,
  product_name text not null,
  quantity integer default 1 not null,
  unit_price numeric(10,2) not null,
  line_total numeric(12,2) not null,
  created_at timestamp with time zone default timezone('utc', now()) not null
);

-- Users table for admin/customer metadata
create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  full_name text,
  role text default 'customer' not null,
  created_at timestamp with time zone default timezone('utc', now()) not null,
  updated_at timestamp with time zone default timezone('utc', now()) not null
);
