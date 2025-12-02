import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipWhereInputObjectSchema as TeamCoachRelationshipWhereInputObjectSchema } from './TeamCoachRelationshipWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TeamCoachRelationshipWhereInputObjectSchema).optional(),
  some: z.lazy(() => TeamCoachRelationshipWhereInputObjectSchema).optional(),
  none: z.lazy(() => TeamCoachRelationshipWhereInputObjectSchema).optional()
}).strict();
export const TeamCoachRelationshipListRelationFilterObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipListRelationFilter>;
export const TeamCoachRelationshipListRelationFilterObjectZodSchema = makeSchema();
