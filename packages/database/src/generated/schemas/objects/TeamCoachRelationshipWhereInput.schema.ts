import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { TeamScalarRelationFilterObjectSchema as TeamScalarRelationFilterObjectSchema } from './TeamScalarRelationFilter.schema';
import { TeamWhereInputObjectSchema as TeamWhereInputObjectSchema } from './TeamWhereInput.schema';
import { CoachScalarRelationFilterObjectSchema as CoachScalarRelationFilterObjectSchema } from './CoachScalarRelationFilter.schema';
import { CoachWhereInputObjectSchema as CoachWhereInputObjectSchema } from './CoachWhereInput.schema'

const teamcoachrelationshipwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TeamCoachRelationshipWhereInputObjectSchema), z.lazy(() => TeamCoachRelationshipWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TeamCoachRelationshipWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TeamCoachRelationshipWhereInputObjectSchema), z.lazy(() => TeamCoachRelationshipWhereInputObjectSchema).array()]).optional(),
  teamId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  coachId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  team: z.union([z.lazy(() => TeamScalarRelationFilterObjectSchema), z.lazy(() => TeamWhereInputObjectSchema)]).optional(),
  coach: z.union([z.lazy(() => CoachScalarRelationFilterObjectSchema), z.lazy(() => CoachWhereInputObjectSchema)]).optional()
}).strict();
export const TeamCoachRelationshipWhereInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipWhereInput> = teamcoachrelationshipwhereinputSchema as unknown as z.ZodType<Prisma.TeamCoachRelationshipWhereInput>;
export const TeamCoachRelationshipWhereInputObjectZodSchema = teamcoachrelationshipwhereinputSchema;
