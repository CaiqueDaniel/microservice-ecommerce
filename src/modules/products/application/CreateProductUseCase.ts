import { UseCase } from "../../../shared/application/UseCase";
import { ProductFactory } from "../domain/ProductFactory";
import { ProductRepository } from "../domain/ProductRepository";

export class CreateProductUseCase implements UseCase<Input, Promise<void>> {
  constructor(
    private readonly repository: ProductRepository,
    private readonly factory: ProductFactory
  ) {}

  async execute(input: Input): Promise<void> {
    await this.repository.save(this.factory.create(input));
  }
}

type Input = {
  name: string;
  description: string;
  price: number;
  quantity: number;
  offerPrice?: number;
};
