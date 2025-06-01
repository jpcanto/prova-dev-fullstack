import AppError from './AppError';
import { HttpStatusEnum } from '@shared/infra/http/constants/HttpStatus.enum';

export class InternalServerError extends AppError {
  constructor(message?: string) {
    super(
      message || 'Internal server error.',
      HttpStatusEnum.INTERNAL_SERVER_ERROR
    );
  }
}
