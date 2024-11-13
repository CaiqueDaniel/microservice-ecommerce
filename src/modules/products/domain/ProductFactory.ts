import { Product } from "./Product";

export interface ProductFactory {
  create(props: Record<string, any>): Product;
}
