import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionArgsObjectSchema as CompetitionArgsObjectSchema } from './CompetitionArgs.schema';
import { EventCheckInFindManySchema as EventCheckInFindManySchema } from '../findManyEventCheckIn.schema';
import { EventCountOutputTypeArgsObjectSchema as EventCountOutputTypeArgsObjectSchema } from './EventCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  competition: z.union([z.boolean(), z.lazy(() => CompetitionArgsObjectSchema)]).optional(),
  eventCheckIn: z.union([z.boolean(), z.lazy(() => EventCheckInFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EventIncludeObjectSchema: z.ZodType<Prisma.EventInclude> = makeSchema() as unknown as z.ZodType<Prisma.EventInclude>;
export const EventIncludeObjectZodSchema = makeSchema();
