import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';
import { NotFoundError } from 'src/core/shared/application/NotFoundError';
import { EntityValidationError } from 'src/core/shared/domain/EntityValidationError';

@Catch()
export class ExceptionHandlerFilter implements ExceptionFilter {
  constructor(
    private readonly httpAdapterHost: AbstractHttpAdapter<any, any, any>,
  ) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const responseBody = {
      statusCode: this.getStatusCodeFrom(exception as Error),
      timestamp: new Date().toISOString(),
      ...this.getMessagesFrom(exception as Error),
    };

    this.httpAdapterHost.reply(
      ctx.getResponse(),
      responseBody,
      responseBody.statusCode,
    );
  }

  private getStatusCodeFrom(exception: Error) {
    if (exception instanceof HttpException) return exception.getStatus();
    if (exception instanceof NotFoundError) return HttpStatus.NOT_FOUND;
    if (exception instanceof EntityValidationError)
      return HttpStatus.BAD_REQUEST;

    return HttpStatus.INTERNAL_SERVER_ERROR;
  }

  private getMessagesFrom(exception: Error) {
    if (exception instanceof EntityValidationError)
      return {
        errors: exception.errors.map(({ field, message }) => ({
          [field]: message,
        })),
      };
  }
}
