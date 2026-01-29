import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NonRelativeEventsSchema } from '../enums/NonRelativeEvents.schema'

const makeSchema = () => z.object({
  set: NonRelativeEventsSchema.array().optional(),
  push: z.union([NonRelativeEventsSchema, NonRelativeEventsSchema.array()]).optional()
}).strict();
export const CompetitionUpdatenonRelativeEventsInputObjectSchema: z.ZodType<Prisma.CompetitionUpdatenonRelativeEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUpdatenonRelativeEventsInput>;
export const CompetitionUpdatenonRelativeEventsInputObjectZodSchema = makeSchema();
