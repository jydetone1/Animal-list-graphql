export type AnimalType = {
  image: string;
  id: string;
  title: string;
  price: string;
  slug: string;
};

export type CategoryType = {
  id: string;
  category: string;
  image: string;
  slug: string;
};

export interface AnimalDetails {
  stock: number;
  description: string;
  price: string;
  image: string;
}
