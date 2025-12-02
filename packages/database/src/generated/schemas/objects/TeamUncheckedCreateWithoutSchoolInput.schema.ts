import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipUncheckedCreateNestedManyWithoutTeamInputObjectSchema as TeamCoachRelationshipUncheckedCreateNestedManyWithoutTeamInputObjectSchema } from './TeamCoachRelationshipUncheckedCreateNestedManyWithoutTeamInput.schema';
import { StudentUncheckedCreateNestedManyWithoutTeamInputObjectSchema as StudentUncheckedCreateNestedManyWithoutTeamInputObjectSchema } from './StudentUncheckedCreateNestedManyWithoutTeamInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  externalTeamId: z.string().optional().nullable(),
  division: z.number().int().optional().nullable(),
  objectiveScore: z.number().optional().nullable(),
  subjectiveScore: z.number().optional().nullable(),
  coachesRelationship: z.lazy(() => TeamCoachRelationshipUncheckedCreateNestedManyWithoutTeamInputObjectSchema).optional(),
  students: z.lazy(() => StudentUncheckedCreateNestedManyWithoutTeamInputObjectSchema).optional()
}).strict();
export const TeamUncheckedCreateWithoutSchoolInputObjectSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamUncheckedCreateWithoutSchoolInput>;
export const TeamUncheckedCreateWithoutSchoolInputObjectZodSchema = makeSchema();
