import { ListProductUseCase } from "src/modules/products/application/ListProductUseCase";
import { ProductRepository } from "src/modules/products/domain/ProductRepository";
import { ProductBuilder } from "tests/fixtures/ProductFixture";
import { Mocked } from "vitest";

describe("ListProductUseCase integration tests", () => {
  let sut: ListProductUseCase;
  let repository: Mocked<ProductRepository>;

  beforeEach(() => {
    repository = {
      save: vi.fn(),
      get: vi.fn(),
      all: vi.fn(),
      remove: vi.fn(),
    };
    sut = new ListProductUseCase(repository);
  });

  it("should be able to list products", async () => {
    repository.all.mockImplementationOnce(async () => [
      ProductBuilder.aProduct().build(),
    ]);

    const result = await sut.execute();
    expect(result).toHaveLength(1);
  });
});
