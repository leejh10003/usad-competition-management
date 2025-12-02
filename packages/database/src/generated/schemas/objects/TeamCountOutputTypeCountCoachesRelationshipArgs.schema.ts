import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipWhereInputObjectSchema as TeamCoachRelationshipWhereInputObjectSchema } from './TeamCoachRelationshipWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TeamCoachRelationshipWhereInputObjectSchema).optional()
}).strict();
export const TeamCountOutputTypeCountCoachesRelationshipArgsObjectSchema = makeSchema();
export const TeamCountOutputTypeCountCoachesRelationshipArgsObjectZodSchema = makeSchema();
