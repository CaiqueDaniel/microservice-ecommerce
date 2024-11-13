import { Product } from "../domain/Product";
import { ProductFactory } from "../domain/ProductFactory";

export class DefaultProductFactory implements ProductFactory {
  create(props: Record<string, any>): Product {
    return new Product(
      crypto.randomUUID(),
      props.name,
      props.description,
      props.price,
      props.quantity,
      props.offerPrice
    );
  }
}
