import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipUncheckedCreateNestedManyWithoutCoachInputObjectSchema as TeamCoachRelationshipUncheckedCreateNestedManyWithoutCoachInputObjectSchema } from './TeamCoachRelationshipUncheckedCreateNestedManyWithoutCoachInput.schema'

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
  schoolId: z.string(),
  teamRelationship: z.lazy(() => TeamCoachRelationshipUncheckedCreateNestedManyWithoutCoachInputObjectSchema).optional()
}).strict();
export const CoachUncheckedCreateWithoutPrimarySchoolInputObjectSchema: z.ZodType<Prisma.CoachUncheckedCreateWithoutPrimarySchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachUncheckedCreateWithoutPrimarySchoolInput>;
export const CoachUncheckedCreateWithoutPrimarySchoolInputObjectZodSchema = makeSchema();
