import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RelativeEventsSchema } from '../enums/RelativeEvents.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  competitionId: z.string(),
  mutationIndex: z.number().int(),
  type: RelativeEventsSchema
}).strict();
export const EventCreateManyInputObjectSchema: z.ZodType<Prisma.EventCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateManyInput>;
export const EventCreateManyInputObjectZodSchema = makeSchema();
