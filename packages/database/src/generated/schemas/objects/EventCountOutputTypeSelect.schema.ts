import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCountOutputTypeCountEventCheckInArgsObjectSchema as EventCountOutputTypeCountEventCheckInArgsObjectSchema } from './EventCountOutputTypeCountEventCheckInArgs.schema'

const makeSchema = () => z.object({
  eventCheckIn: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeCountEventCheckInArgsObjectSchema)]).optional()
}).strict();
export const EventCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.EventCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.EventCountOutputTypeSelect>;
export const EventCountOutputTypeSelectObjectZodSchema = makeSchema();
