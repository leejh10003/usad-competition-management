import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachUpdateOneRequiredWithoutTeamRelationshipNestedInputObjectSchema as CoachUpdateOneRequiredWithoutTeamRelationshipNestedInputObjectSchema } from './CoachUpdateOneRequiredWithoutTeamRelationshipNestedInput.schema'

const makeSchema = () => z.object({
  coach: z.lazy(() => CoachUpdateOneRequiredWithoutTeamRelationshipNestedInputObjectSchema).optional()
}).strict();
export const TeamCoachRelationshipUpdateWithoutTeamInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipUpdateWithoutTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUpdateWithoutTeamInput>;
export const TeamCoachRelationshipUpdateWithoutTeamInputObjectZodSchema = makeSchema();
