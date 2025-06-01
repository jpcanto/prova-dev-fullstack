import AppError from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { logger } from '@shared/utils/logger';

export function handleError(
  error: Error,
  _request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
) {
  if (error instanceof AppError) {
    logger.error(`${error.name}: ${error.message}`, {
      statusCode: error.statusCode,
      stack: error.stack,
    });

    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  logger.error('Internal server error', {
    stack: error.stack,
    message: error.message,
  });

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
