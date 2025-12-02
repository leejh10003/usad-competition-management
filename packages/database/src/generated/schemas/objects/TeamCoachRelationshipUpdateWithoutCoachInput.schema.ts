import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamUpdateOneRequiredWithoutCoachesRelationshipNestedInputObjectSchema as TeamUpdateOneRequiredWithoutCoachesRelationshipNestedInputObjectSchema } from './TeamUpdateOneRequiredWithoutCoachesRelationshipNestedInput.schema'

const makeSchema = () => z.object({
  team: z.lazy(() => TeamUpdateOneRequiredWithoutCoachesRelationshipNestedInputObjectSchema).optional()
}).strict();
export const TeamCoachRelationshipUpdateWithoutCoachInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipUpdateWithoutCoachInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUpdateWithoutCoachInput>;
export const TeamCoachRelationshipUpdateWithoutCoachInputObjectZodSchema = makeSchema();
