export type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  image: string;
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
