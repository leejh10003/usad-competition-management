import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentUncheckedCreateNestedManyWithoutTeamInputObjectSchema as StudentUncheckedCreateNestedManyWithoutTeamInputObjectSchema } from './StudentUncheckedCreateNestedManyWithoutTeamInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  externalTeamId: z.string().optional().nullable(),
  schoolId: z.string(),
  division: z.number().int().optional().nullable(),
  objectiveScore: z.number().optional().nullable(),
  subjectiveScore: z.number().optional().nullable(),
  students: z.lazy(() => StudentUncheckedCreateNestedManyWithoutTeamInputObjectSchema).optional()
}).strict();
export const TeamUncheckedCreateWithoutCoachesRelationshipInputObjectSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutCoachesRelationshipInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamUncheckedCreateWithoutCoachesRelationshipInput>;
export const TeamUncheckedCreateWithoutCoachesRelationshipInputObjectZodSchema = makeSchema();
