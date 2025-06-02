import { z } from 'zod';

export const createSchema = z.object({
  original_language: z.string().min(1),
  original_title: z.string().min(1),
  overview: z.string().min(1),
  popularity: z.number().min(1),
  poster_path: z.string().min(1),
  release_date: z.string().min(1),
  title: z.string().min(1),
  mediaType: z.union([z.literal('movie'), z.literal('tv')]),
});

export const updateSchema = z.object({
  original_language: z.string().min(1).optional(),
  original_title: z.string().min(1).optional(),
  overview: z.string().min(1).optional(),
  popularity: z.number().min(1).optional(),
  poster_path: z.string().min(1).optional(),
  release_date: z.string().min(1).optional(),
  title: z.string().min(1).optional(),
  mediaType: z.union([z.literal('movie'), z.literal('tv')]).optional(),
});

// params sempre são strings. Em caso de querer obter um ID int, por exemplo, é necessário
// usar um transform no schema.
export const idFromParamsSchema = z.object({
  id: z.string().uuid(),
});
