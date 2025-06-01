import AppError from './AppError';
import { HttpStatusEnum } from '@shared/infra/http/constants/HttpStatus.enum';

export class Unauthorized extends AppError {
  constructor(message?: string) {
    super(message || 'Sem autorização de acesso.', HttpStatusEnum.UNAUTHORIZED);
  }
}
