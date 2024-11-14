import { Product } from "src/core/modules/products/domain/Product";
import { ProductRepository } from "src/core/modules/products/domain/ProductRepository";

export class MemoryProductRepository implements ProductRepository {
  private items: Map<string, Product> = new Map();

  async save(entity: Product): Promise<void> {
    this.items.set(entity.id, entity);
  }

  async get(id: string): Promise<Product | undefined> {
    return this.items.get(id);
  }

  async remove(entity: Product): Promise<void> {
    this.items.delete(entity.id);
  }

  async all(): Promise<Product[]> {
    return Array.from(this.items.values());
  }
}
