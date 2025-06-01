import AppError from './AppError';
import { HttpStatusEnum } from '@shared/infra/http/constants/HttpStatus.enum';

export class ToManyRequests extends AppError {
  constructor(message?: string) {
    super(
      message || 'Limite de solicitações atingido.',
      HttpStatusEnum.TOO_MANY_REQUESTS
    );
  }
}
