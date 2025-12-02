import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  competitionId: z.string()
}).strict();
export const EventCreateManyInputObjectSchema: z.ZodType<Prisma.EventCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateManyInput>;
export const EventCreateManyInputObjectZodSchema = makeSchema();
