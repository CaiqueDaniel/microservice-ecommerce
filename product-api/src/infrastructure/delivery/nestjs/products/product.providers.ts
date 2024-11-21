import { Provider } from '@nestjs/common';
import { CreateProductUseCase } from 'src/core/modules/products/application/CreateProductUseCase';
import { DefaultProductFactory } from 'src/core/modules/products/application/DefaultProductFactory';
import { GetProductUseCase } from 'src/core/modules/products/application/GetProductUseCase';
import { ListProductUseCase } from 'src/core/modules/products/application/ListProductUseCase';
import { UpdateProductUseCase } from 'src/core/modules/products/application/UpdateProductUseCase';
import { ProductRepository } from 'src/core/modules/products/domain/ProductRepository';
import { MemoryProductRepository } from 'src/infrastructure/persistence/memory/product/MemoryProductRepository';

export const productProviders: Provider[] = [
  {
    provide: 'ProductRepository',
    useFactory: () => new MemoryProductRepository(),
  },
  {
    provide: CreateProductUseCase,
    useFactory: (repository: ProductRepository) =>
      new CreateProductUseCase(repository, new DefaultProductFactory()),
    inject: ['ProductRepository'],
  },
  {
    provide: UpdateProductUseCase,
    useFactory: (repository: ProductRepository) =>
      new UpdateProductUseCase(repository, new DefaultProductFactory()),
    inject: ['ProductRepository'],
  },
  {
    provide: GetProductUseCase,
    useFactory: (repository: ProductRepository) =>
      new GetProductUseCase(repository),
    inject: ['ProductRepository'],
  },
  {
    provide: ListProductUseCase,
    useFactory: (repository: ProductRepository) =>
      new ListProductUseCase(repository),
    inject: ['ProductRepository'],
  },
];
