import AppError from './AppError';
import { HttpStatusEnum } from '@shared/infra/http/constants/HttpStatus.enum';

export class Forbidden extends AppError {
  constructor(message?: string) {
    super(message || 'Sem permissão de acesso.', HttpStatusEnum.FORBIDDEN);
  }
}
