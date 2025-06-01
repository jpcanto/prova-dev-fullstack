import { z } from 'zod';

/**
 * Schema que valida e transforma uma string em um número inteiro.
 * Ideal para receber parâmetros query.
 */
export const stringToIntegerSchema = z.string().transform((val, ctx) => {
  const parsedVal = parseInt(val, 10);
  if (isNaN(parsedVal) || !Number.isInteger(parsedVal)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Invalid integer',
    });
    return z.NEVER;
  }

  return parsedVal;
});
