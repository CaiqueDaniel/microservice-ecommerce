import { GetProductUseCase } from "src/core/modules/products/application/GetProductUseCase";
import { ProductRepository } from "src/core/modules/products/domain/ProductRepository";
import { NotFoundError } from "src/core/shared/application/NotFoundError";
import { ProductBuilder } from "tests/fixtures/ProductFixture";
import { Mocked } from "vitest";

describe("GetProductUseCase integration tests", () => {
  let sut: GetProductUseCase;
  let repository: Mocked<ProductRepository>;

  beforeEach(() => {
    repository = {
      save: vi.fn(),
      get: vi.fn(),
      all: vi.fn(),
      remove: vi.fn(),
    };
    sut = new GetProductUseCase(repository);
  });

  it("should be able to get a product", async () => {
    const product = ProductBuilder.aProduct().build();

    repository.get.mockImplementationOnce(async () => product);

    const result = await sut.execute({ id: crypto.randomUUID() });

    expect(result.id).toBe(product.id);
    expect(result.name).toBe(product.name);
    expect(result.description).toBe(product.description);
    expect(result.price).toBe(product.price);
    expect(result.quantity).toBe(product.quantity);
    expect(result.offerPrice).toBe(product.offerPrice ?? null);
  });

  it("should not be able to get a product that do not exists", async () => {
    const result = sut.execute({ id: crypto.randomUUID() });

    await expect(result).rejects.toThrowError(NotFoundError);
  });
});
