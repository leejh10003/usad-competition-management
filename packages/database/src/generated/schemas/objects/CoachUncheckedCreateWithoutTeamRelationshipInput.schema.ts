import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolUncheckedCreateNestedOneWithoutPrimaryCoachInputObjectSchema as SchoolUncheckedCreateNestedOneWithoutPrimaryCoachInputObjectSchema } from './SchoolUncheckedCreateNestedOneWithoutPrimaryCoachInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  externalCoachId: z.string().optional().nullable(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string().optional().nullable(),
  signature: z.string().optional().nullable(),
  objectiveScore: z.number().optional().nullable(),
  subjectiveScore: z.number().optional().nullable(),
  mutationIndex: z.number().int(),
  schoolId: z.string(),
  primarySchool: z.lazy(() => SchoolUncheckedCreateNestedOneWithoutPrimaryCoachInputObjectSchema).optional()
}).strict();
export const CoachUncheckedCreateWithoutTeamRelationshipInputObjectSchema: z.ZodType<Prisma.CoachUncheckedCreateWithoutTeamRelationshipInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachUncheckedCreateWithoutTeamRelationshipInput>;
export const CoachUncheckedCreateWithoutTeamRelationshipInputObjectZodSchema = makeSchema();
