import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema'

const teamcoachrelationshipscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TeamCoachRelationshipScalarWhereInputObjectSchema), z.lazy(() => TeamCoachRelationshipScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TeamCoachRelationshipScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TeamCoachRelationshipScalarWhereInputObjectSchema), z.lazy(() => TeamCoachRelationshipScalarWhereInputObjectSchema).array()]).optional(),
  teamId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  coachId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional()
}).strict();
export const TeamCoachRelationshipScalarWhereInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipScalarWhereInput> = teamcoachrelationshipscalarwhereinputSchema as unknown as z.ZodType<Prisma.TeamCoachRelationshipScalarWhereInput>;
export const TeamCoachRelationshipScalarWhereInputObjectZodSchema = teamcoachrelationshipscalarwhereinputSchema;
