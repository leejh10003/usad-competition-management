import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NonRelativeEventsSchema } from '../enums/NonRelativeEvents.schema'

const makeSchema = () => z.object({
  set: NonRelativeEventsSchema.array()
}).strict();
export const CompetitionCreatenonRelativeEventsInputObjectSchema: z.ZodType<Prisma.CompetitionCreatenonRelativeEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionCreatenonRelativeEventsInput>;
export const CompetitionCreatenonRelativeEventsInputObjectZodSchema = makeSchema();
