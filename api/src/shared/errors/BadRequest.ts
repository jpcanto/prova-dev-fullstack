import AppError from './AppError';
import { HttpStatusEnum } from '@shared/infra/http/constants/HttpStatus.enum';

export class BadRequest extends AppError {
  constructor(message: string) {
    super(message, HttpStatusEnum.BAD_REQUEST);
  }
}
