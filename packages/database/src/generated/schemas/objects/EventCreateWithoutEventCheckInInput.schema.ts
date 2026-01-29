import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RelativeEventsSchema } from '../enums/RelativeEvents.schema';
import { CompetitionCreateNestedOneWithoutEventsInputObjectSchema as CompetitionCreateNestedOneWithoutEventsInputObjectSchema } from './CompetitionCreateNestedOneWithoutEventsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  mutationIndex: z.number().int(),
  type: RelativeEventsSchema,
  competition: z.lazy(() => CompetitionCreateNestedOneWithoutEventsInputObjectSchema)
}).strict();
export const EventCreateWithoutEventCheckInInputObjectSchema: z.ZodType<Prisma.EventCreateWithoutEventCheckInInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateWithoutEventCheckInInput>;
export const EventCreateWithoutEventCheckInInputObjectZodSchema = makeSchema();
