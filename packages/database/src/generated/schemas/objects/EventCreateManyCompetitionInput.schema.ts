import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date()
}).strict();
export const EventCreateManyCompetitionInputObjectSchema: z.ZodType<Prisma.EventCreateManyCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateManyCompetitionInput>;
export const EventCreateManyCompetitionInputObjectZodSchema = makeSchema();
