-- Supabase schema for ADEN bespoke store

-- Products table
create table if not exists products (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  subtitle text not null,
  price text not null,
  image text not null,
  created_at timestamp with time zone default timezone('utc', now()) not null
);

-- Blog posts table
create table if not exists blog_posts (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  excerpt text not null,
  published_at timestamp with time zone default timezone('utc', now()) not null
);

-- Orders table
create table if not exists orders (
  id uuid primary key default uuid_generate_v4(),
  customer_name text not null,
  status text not null,
  total text not null,
  created_at timestamp with time zone default timezone('utc', now()) not null
);

-- Optional: Users table for admin and customer records
create table if not exists users (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  full_name text,
  role text default 'customer',
  created_at timestamp with time zone default timezone('utc', now()) not null
);
