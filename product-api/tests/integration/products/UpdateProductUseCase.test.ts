import { UpdateProductUseCase } from 'src/core/modules/products/application/UpdateProductUseCase';
import { DefaultProductFactory } from 'src/core/modules/products/application/DefaultProductFactory';
import { MemoryProductRepository } from 'src/infrastructure/persistence/memory/product/MemoryProductRepository';
import { ProductBuilder } from 'tests/fixtures/ProductFixture';
import { NotFoundError } from 'src/core/shared/application/NotFoundError';

describe('UpdateProductUseCase integration tests', () => {
  let sut: UpdateProductUseCase;
  let repository: MemoryProductRepository;
  const data = Object.freeze({
    name: 'Caderno 2',
    description: 'Caderno 2',
    price: 2.7,
    quantity: 45,
  });

  beforeEach(() => {
    repository = new MemoryProductRepository();
    sut = new UpdateProductUseCase(repository, new DefaultProductFactory());
  });

  afterEach(() => {
    repository.clear();
  });

  it('should be able to update a product', async () => {
    const product = ProductBuilder.aProduct().build();

    await repository.save(product);
    await sut.execute({ ...data, id: product.id });

    const result = await repository.get(product.id);
    expect(await repository.all()).toHaveLength(1);
    expect(result.name).toBe(data.name);
    expect(result.description).toBe(data.description);
    expect(result.price).toBe(data.price);
    expect(result.offerPrice).toBeUndefined();
    expect(result.quantity).toBe(data.quantity);
  });

  it("should not be able to update a product that don't exists", async () => {
    await repository.save(ProductBuilder.aProduct().build());

    const result = sut.execute({ ...data, id: crypto.randomUUID() });

    await expect(result).rejects.toThrowError(NotFoundError);
  });
});
