import { logger } from '@shared/utils/logger';

class AppError extends Error {
  public readonly name: string;
  public readonly message: string;
  public readonly statusCode: number;
  public readonly stack?: string;

  constructor(message: string, statusCode = 500) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);

    logger.error(`AppError: ${this.message}`, {
      name: this.name,
      statusCode: this.statusCode,
      stack: this.stack,
    });
  }
}

export default AppError;
