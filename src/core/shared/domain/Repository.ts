import { Entity } from "./Entity";

export interface Repository<T extends Entity> {
  save(entity: T): Promise<void>;
  get(id: string): Promise<T | undefined>;
  remove(entity: T): Promise<void>;
  all(): Promise<T[]>;
}
