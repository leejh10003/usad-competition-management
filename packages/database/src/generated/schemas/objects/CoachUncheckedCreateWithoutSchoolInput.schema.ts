import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolUncheckedCreateNestedOneWithoutPrimaryCoachInputObjectSchema as SchoolUncheckedCreateNestedOneWithoutPrimaryCoachInputObjectSchema } from './SchoolUncheckedCreateNestedOneWithoutPrimaryCoachInput.schema';
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
  primarySchool: z.lazy(() => SchoolUncheckedCreateNestedOneWithoutPrimaryCoachInputObjectSchema).optional(),
  teamRelationship: z.lazy(() => TeamCoachRelationshipUncheckedCreateNestedManyWithoutCoachInputObjectSchema).optional()
}).strict();
export const CoachUncheckedCreateWithoutSchoolInputObjectSchema: z.ZodType<Prisma.CoachUncheckedCreateWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachUncheckedCreateWithoutSchoolInput>;
export const CoachUncheckedCreateWithoutSchoolInputObjectZodSchema = makeSchema();
