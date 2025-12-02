import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCreateManyCompetitionInputObjectSchema as EventCreateManyCompetitionInputObjectSchema } from './EventCreateManyCompetitionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => EventCreateManyCompetitionInputObjectSchema), z.lazy(() => EventCreateManyCompetitionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const EventCreateManyCompetitionInputEnvelopeObjectSchema: z.ZodType<Prisma.EventCreateManyCompetitionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateManyCompetitionInputEnvelope>;
export const EventCreateManyCompetitionInputEnvelopeObjectZodSchema = makeSchema();
