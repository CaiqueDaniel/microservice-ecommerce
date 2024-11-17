import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { productProviders } from './product.providers';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: productProviders,
})
export class ProductModule {}
