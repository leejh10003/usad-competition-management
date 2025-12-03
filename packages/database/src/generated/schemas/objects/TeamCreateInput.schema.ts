import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolCreateNestedOneWithoutTeamsInputObjectSchema as SchoolCreateNestedOneWithoutTeamsInputObjectSchema } from './SchoolCreateNestedOneWithoutTeamsInput.schema';
import { TeamCoachRelationshipCreateNestedManyWithoutTeamInputObjectSchema as TeamCoachRelationshipCreateNestedManyWithoutTeamInputObjectSchema } from './TeamCoachRelationshipCreateNestedManyWithoutTeamInput.schema';
import { StudentCreateNestedManyWithoutTeamInputObjectSchema as StudentCreateNestedManyWithoutTeamInputObjectSchema } from './StudentCreateNestedManyWithoutTeamInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  externalTeamId: z.string().optional().nullable(),
  division: z.number().int().optional().nullable(),
  objectiveScore: z.number().optional().nullable(),
  subjectiveScore: z.number().optional().nullable(),
  mutationIndex: z.number().int(),
  school: z.lazy(() => SchoolCreateNestedOneWithoutTeamsInputObjectSchema),
  coachesRelationship: z.lazy(() => TeamCoachRelationshipCreateNestedManyWithoutTeamInputObjectSchema).optional(),
  students: z.lazy(() => StudentCreateNestedManyWithoutTeamInputObjectSchema).optional()
}).strict();
export const TeamCreateInputObjectSchema: z.ZodType<Prisma.TeamCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCreateInput>;
export const TeamCreateInputObjectZodSchema = makeSchema();
