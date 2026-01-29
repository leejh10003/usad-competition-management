import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionCreatenonRelativeEventsInputObjectSchema as CompetitionCreatenonRelativeEventsInputObjectSchema } from './CompetitionCreatenonRelativeEventsInput.schema';
import { NonRelativeEventsSchema } from '../enums/NonRelativeEvents.schema';
import { StateSchema } from '../enums/State.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  mutationIndex: z.number().int(),
  round: z.number().int(),
  nonRelativeEvents: z.union([z.lazy(() => CompetitionCreatenonRelativeEventsInputObjectSchema), NonRelativeEventsSchema.array()]).optional(),
  streetAddress: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: StateSchema.optional().nullable(),
  zipCode: z.string().optional().nullable()
}).strict();
export const CompetitionCreateManyInputObjectSchema: z.ZodType<Prisma.CompetitionCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionCreateManyInput>;
export const CompetitionCreateManyInputObjectZodSchema = makeSchema();
