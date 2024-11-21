import { Product } from "src/core/modules/products/domain/Product";

export class ProductBuilder {
  private name = "Caderno";
  private description = "Caderno";
  private price = 2.77;
  private quantity = 30;

  static aProduct() {
    return new ProductBuilder();
  }

  build() {
    return new Product(
      crypto.randomUUID(),
      this.name,
      this.description,
      this.price,
      this.quantity
    );
  }
}
