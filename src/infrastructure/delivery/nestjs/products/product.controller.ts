import { Controller, Get } from '@nestjs/common';

@Controller()
export class ProductController {
  constructor() {}

  @Get()
  getHello(): string {
    return '';
  }
}
