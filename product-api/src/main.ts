import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './infrastructure/delivery/nestjs/app.module';
import { ExceptionHandlerFilter } from './infrastructure/delivery/nestjs/shared/exception-handler.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new ExceptionHandlerFilter(httpAdapter));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
