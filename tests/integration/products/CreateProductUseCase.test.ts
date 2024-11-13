import { CreateProductUseCase } from "src/modules/products/application/CreateProductUseCase";
import { DefaultProductFactory } from "src/modules/products/application/DefaultProductFactory";
import { ProductRepository } from "src/modules/products/domain/ProductRepository";

describe("CreateProductUseCase integration tests", () => {
  let sut: CreateProductUseCase;
  let repository: ProductRepository;
  const data = Object.freeze({
    name: "Caderno",
    description: "Caderno",
    price: 2.77,
    quantity: 30,
  });

  beforeEach(() => {
    repository = {
      save: vi.fn(),
      get: vi.fn(),
      all: vi.fn(),
      remove: vi.fn(),
    };
    sut = new CreateProductUseCase(repository, new DefaultProductFactory());
  });

  it("should be able to create a product", async () => {
    await sut.execute(data);

    expect(repository.save).toHaveBeenCalledWith(expect.objectContaining(data));
  });
});
