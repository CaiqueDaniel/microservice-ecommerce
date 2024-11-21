import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { Product } from './Product';

export class ProductValidationRules {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @IsInt()
  quantity: number;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  offerPrice?: number;

  constructor(data: Product) {
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;
    this.quantity = data.quantity;
    this.offerPrice = data.offerPrice;
  }
}
