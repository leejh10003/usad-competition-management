import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCreateNestedOneWithoutCoachesRelationshipInputObjectSchema as TeamCreateNestedOneWithoutCoachesRelationshipInputObjectSchema } from './TeamCreateNestedOneWithoutCoachesRelationshipInput.schema'

const makeSchema = () => z.object({
  team: z.lazy(() => TeamCreateNestedOneWithoutCoachesRelationshipInputObjectSchema)
}).strict();
export const TeamCoachRelationshipCreateWithoutCoachInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipCreateWithoutCoachInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipCreateWithoutCoachInput>;
export const TeamCoachRelationshipCreateWithoutCoachInputObjectZodSchema = makeSchema();
