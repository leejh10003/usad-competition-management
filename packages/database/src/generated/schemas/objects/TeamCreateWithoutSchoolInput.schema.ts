import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipCreateNestedManyWithoutTeamInputObjectSchema as TeamCoachRelationshipCreateNestedManyWithoutTeamInputObjectSchema } from './TeamCoachRelationshipCreateNestedManyWithoutTeamInput.schema';
import { StudentCreateNestedManyWithoutTeamInputObjectSchema as StudentCreateNestedManyWithoutTeamInputObjectSchema } from './StudentCreateNestedManyWithoutTeamInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  externalTeamId: z.string().optional().nullable(),
  division: z.number().int().optional().nullable(),
  objectiveScore: z.number().optional().nullable(),
  subjectiveScore: z.number().optional().nullable(),
  mutationIndex: z.number().int(),
  coachesRelationship: z.lazy(() => TeamCoachRelationshipCreateNestedManyWithoutTeamInputObjectSchema).optional(),
  students: z.lazy(() => StudentCreateNestedManyWithoutTeamInputObjectSchema).optional()
}).strict();
export const TeamCreateWithoutSchoolInputObjectSchema: z.ZodType<Prisma.TeamCreateWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCreateWithoutSchoolInput>;
export const TeamCreateWithoutSchoolInputObjectZodSchema = makeSchema();
