import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RelativeEventsSchema } from '../enums/RelativeEvents.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  mutationIndex: z.number().int(),
  type: RelativeEventsSchema
}).strict();
export const EventCreateManyCompetitionInputObjectSchema: z.ZodType<Prisma.EventCreateManyCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateManyCompetitionInput>;
export const EventCreateManyCompetitionInputObjectZodSchema = makeSchema();
