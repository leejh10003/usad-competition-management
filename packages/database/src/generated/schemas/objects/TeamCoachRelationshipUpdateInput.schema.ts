import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamUpdateOneRequiredWithoutCoachesRelationshipNestedInputObjectSchema as TeamUpdateOneRequiredWithoutCoachesRelationshipNestedInputObjectSchema } from './TeamUpdateOneRequiredWithoutCoachesRelationshipNestedInput.schema';
import { CoachUpdateOneRequiredWithoutTeamRelationshipNestedInputObjectSchema as CoachUpdateOneRequiredWithoutTeamRelationshipNestedInputObjectSchema } from './CoachUpdateOneRequiredWithoutTeamRelationshipNestedInput.schema'

const makeSchema = () => z.object({
  team: z.lazy(() => TeamUpdateOneRequiredWithoutCoachesRelationshipNestedInputObjectSchema).optional(),
  coach: z.lazy(() => CoachUpdateOneRequiredWithoutTeamRelationshipNestedInputObjectSchema).optional()
}).strict();
export const TeamCoachRelationshipUpdateInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUpdateInput>;
export const TeamCoachRelationshipUpdateInputObjectZodSchema = makeSchema();
