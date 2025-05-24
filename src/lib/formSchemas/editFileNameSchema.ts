import { z } from 'zod';

export const editFileNameSchema = z.object({
  name: z.string().min(1, {
    message: '* Requerido',
  }),
});
