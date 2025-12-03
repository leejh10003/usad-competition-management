import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolCreateNestedOneWithoutTeamsInputObjectSchema as SchoolCreateNestedOneWithoutTeamsInputObjectSchema } from './SchoolCreateNestedOneWithoutTeamsInput.schema';
import { StudentCreateNestedManyWithoutTeamInputObjectSchema as StudentCreateNestedManyWithoutTeamInputObjectSchema } from './StudentCreateNestedManyWithoutTeamInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  externalTeamId: z.string().optional().nullable(),
  division: z.number().int().optional().nullable(),
  objectiveScore: z.number().optional().nullable(),
  subjectiveScore: z.number().optional().nullable(),
  mutationIndex: z.number().int(),
  school: z.lazy(() => SchoolCreateNestedOneWithoutTeamsInputObjectSchema),
  students: z.lazy(() => StudentCreateNestedManyWithoutTeamInputObjectSchema).optional()
}).strict();
export const TeamCreateWithoutCoachesRelationshipInputObjectSchema: z.ZodType<Prisma.TeamCreateWithoutCoachesRelationshipInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCreateWithoutCoachesRelationshipInput>;
export const TeamCreateWithoutCoachesRelationshipInputObjectZodSchema = makeSchema();
