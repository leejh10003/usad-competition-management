import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInWhereInputObjectSchema as EventCheckInWhereInputObjectSchema } from './EventCheckInWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventCheckInWhereInputObjectSchema).optional()
}).strict();
export const StudentCountOutputTypeCountEventCheckInsArgsObjectSchema = makeSchema();
export const StudentCountOutputTypeCountEventCheckInsArgsObjectZodSchema = makeSchema();
