import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema'

const teamcoachrelationshipscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TeamCoachRelationshipScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TeamCoachRelationshipScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TeamCoachRelationshipScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TeamCoachRelationshipScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TeamCoachRelationshipScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  teamId: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  coachId: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const TeamCoachRelationshipScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipScalarWhereWithAggregatesInput> = teamcoachrelationshipscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TeamCoachRelationshipScalarWhereWithAggregatesInput>;
export const TeamCoachRelationshipScalarWhereWithAggregatesInputObjectZodSchema = teamcoachrelationshipscalarwherewithaggregatesinputSchema;
