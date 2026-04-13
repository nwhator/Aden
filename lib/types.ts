export type Product = {
  id: string;
  slug?: string;
  name: string;
  subtitle: string;
  description?: string;
  price: string;
  image: string;
  available?: boolean;
  created_at?: string;
  updated_at?: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  published_at: string;
};

export type Order = {
  id: string;
  customerName: string;
  status: string;
  total: string;
  createdAt: string;
};
