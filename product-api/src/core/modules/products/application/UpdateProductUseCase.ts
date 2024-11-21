import { NotFoundError } from 'src/core/shared/application/NotFoundError';
import { UseCase } from '../../../shared/application/UseCase';
import { ProductFactory } from '../domain/ProductFactory';
import { ProductRepository } from '../domain/ProductRepository';

export class UpdateProductUseCase implements UseCase<Input, Promise<void>> {
  constructor(
    private readonly repository: ProductRepository,
    private readonly factory: ProductFactory,
  ) {}

  async execute(input: Input): Promise<void> {
    const product = await this.repository.get(input.id);

    if (!product) throw new NotFoundError();

    product.update(
      input.name,
      input.description,
      input.price,
      input.quantity,
      input.offerPrice,
    );

    await this.repository.save(product);
  }
}

type Input = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  offerPrice?: number;
};
