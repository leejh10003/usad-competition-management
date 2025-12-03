import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionArgsObjectSchema as CompetitionArgsObjectSchema } from './CompetitionArgs.schema';
import { EventCheckInFindManySchema as EventCheckInFindManySchema } from '../findManyEventCheckIn.schema';
import { EventCountOutputTypeArgsObjectSchema as EventCountOutputTypeArgsObjectSchema } from './EventCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  startsAt: z.boolean().optional(),
  endsAt: z.boolean().optional(),
  competitionId: z.boolean().optional(),
  mutationIndex: z.boolean().optional(),
  competition: z.union([z.boolean(), z.lazy(() => CompetitionArgsObjectSchema)]).optional(),
  eventCheckIn: z.union([z.boolean(), z.lazy(() => EventCheckInFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EventSelectObjectSchema: z.ZodType<Prisma.EventSelect> = makeSchema() as unknown as z.ZodType<Prisma.EventSelect>;
export const EventSelectObjectZodSchema = makeSchema();
