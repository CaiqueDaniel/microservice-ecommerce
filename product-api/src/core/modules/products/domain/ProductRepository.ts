import { Repository } from "../../../shared/domain/Repository";
import { Product } from "./Product";

export interface ProductRepository extends Repository<Product> {}
