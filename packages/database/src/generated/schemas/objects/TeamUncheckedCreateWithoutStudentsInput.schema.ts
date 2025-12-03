import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipUncheckedCreateNestedManyWithoutTeamInputObjectSchema as TeamCoachRelationshipUncheckedCreateNestedManyWithoutTeamInputObjectSchema } from './TeamCoachRelationshipUncheckedCreateNestedManyWithoutTeamInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  externalTeamId: z.string().optional().nullable(),
  schoolId: z.string(),
  division: z.number().int().optional().nullable(),
  objectiveScore: z.number().optional().nullable(),
  subjectiveScore: z.number().optional().nullable(),
  mutationIndex: z.number().int(),
  coachesRelationship: z.lazy(() => TeamCoachRelationshipUncheckedCreateNestedManyWithoutTeamInputObjectSchema).optional()
}).strict();
export const TeamUncheckedCreateWithoutStudentsInputObjectSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamUncheckedCreateWithoutStudentsInput>;
export const TeamUncheckedCreateWithoutStudentsInputObjectZodSchema = makeSchema();
