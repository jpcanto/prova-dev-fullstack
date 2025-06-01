import { BadRequest } from '@shared/errors/BadRequest';
import { ZodType, ZodTypeDef } from 'zod';

/**
 * Execute o parsing de um corpo de requisição qualquer. Caso o corpo seja inválido,
 * uma exceção do tipo AppError será lançada.
 */
export function parseRequest<
  Out,
  Def extends ZodTypeDef = ZodTypeDef,
  In = Out
>(schema: ZodType<Out, Def, In>, body: unknown): Out {
  const out = schema.safeParse(body);
  if (out.success) return out.data;

  const details: string[] = [];

  for (const error of out.error.errors) {
    const path = error.path.join('.');
    details.push(`${path}: ${error.message}`);
  }

  throw new BadRequest(details.join(', '));
}
