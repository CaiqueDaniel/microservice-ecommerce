import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProductUseCase } from 'src/core/modules/products/application/CreateProductUseCase';
import { ProductDto } from './product.dto';
import { ListProductUseCase } from 'src/core/modules/products/application/ListProductUseCase';
import { GetProductUseCase } from 'src/core/modules/products/application/GetProductUseCase';

@Controller('products')
export class ProductController {
  constructor(
    private readonly createProduct: CreateProductUseCase,
    private readonly getProduct: GetProductUseCase,
    private readonly listProduct: ListProductUseCase,
  ) {}

  @Post()
  create(@Body() dto: ProductDto) {
    return this.createProduct.execute(dto);
  }

  @Get()
  list() {
    return this.listProduct.execute();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.getProduct.execute({ id });
  }
}