import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInCreateManyEventInputObjectSchema as EventCheckInCreateManyEventInputObjectSchema } from './EventCheckInCreateManyEventInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => EventCheckInCreateManyEventInputObjectSchema), z.lazy(() => EventCheckInCreateManyEventInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const EventCheckInCreateManyEventInputEnvelopeObjectSchema: z.ZodType<Prisma.EventCheckInCreateManyEventInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInCreateManyEventInputEnvelope>;
export const EventCheckInCreateManyEventInputEnvelopeObjectZodSchema = makeSchema();
