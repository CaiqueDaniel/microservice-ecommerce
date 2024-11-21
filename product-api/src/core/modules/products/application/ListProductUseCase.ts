import { UseCase } from "src/core/shared/application/UseCase";
import { ProductRepository } from "../domain/ProductRepository";

export class ListProductUseCase implements UseCase<void, Promise<Output[]>> {
  constructor(private readonly repository: ProductRepository) {}

  async execute(): Promise<Output[]> {
    return (await this.repository.all()).map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      offerPrice: product.offerPrice ?? null,
    }));
  }
}

type Output = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  offerPrice: number | null;
};
