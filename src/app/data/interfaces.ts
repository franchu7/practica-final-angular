export interface ProductI {
  id: string;
  code: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  image: string;
}
export interface CategoryI {
  id: string;
  name: string;
  products: ProductI[];
}
export interface CartProductI {
  id: string;
  code: string;
  title: string;
  description: string;
  amount: number;
  quantity: number;
  image: string;
}
