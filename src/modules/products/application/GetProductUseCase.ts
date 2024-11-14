import { UseCase } from "src/shared/application/UseCase";
import { ProductRepository } from "../domain/ProductRepository";
import { NotFoundError } from "src/shared/application/NotFoundError";

export class GetProductUseCase implements UseCase<Input, Promise<Output>> {
  constructor(private readonly repository: ProductRepository) {}

  async execute(input: Input): Promise<Output> {
    const product = await this.repository.get(input.id);

    if (!product) throw new NotFoundError();

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      offerPrice: product.offerPrice ?? null,
    };
  }
}

type Input = {
  id: string;
};

type Output = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  offerPrice: number | null;
};
