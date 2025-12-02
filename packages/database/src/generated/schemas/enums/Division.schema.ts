import * as z from 'zod';

export const DivisionSchema = z.enum(['H', 'S', 'V'])

export type Division = z.infer<typeof DivisionSchema>;