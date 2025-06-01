import AppError from './AppError';
import { HttpStatusEnum } from '@shared/infra/http/constants/HttpStatus.enum';

export class NotFound extends AppError {
  constructor(message?: string) {
    super(
      message || 'Não foi possível encontrar o que foi solicitado',
      HttpStatusEnum.NOT_FOUND
    );
  }
}
