import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  mutationIndex: z.number().int()
}).strict();
export const CompetitionCreateManyInputObjectSchema: z.ZodType<Prisma.CompetitionCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionCreateManyInput>;
export const CompetitionCreateManyInputObjectZodSchema = makeSchema();
