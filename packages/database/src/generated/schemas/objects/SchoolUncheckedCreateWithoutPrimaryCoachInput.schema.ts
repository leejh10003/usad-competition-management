import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema';
import { CoachUncheckedCreateNestedManyWithoutSchoolInputObjectSchema as CoachUncheckedCreateNestedManyWithoutSchoolInputObjectSchema } from './CoachUncheckedCreateNestedManyWithoutSchoolInput.schema';
import { TeamUncheckedCreateNestedManyWithoutSchoolInputObjectSchema as TeamUncheckedCreateNestedManyWithoutSchoolInputObjectSchema } from './TeamUncheckedCreateNestedManyWithoutSchoolInput.schema';
import { StudentUncheckedCreateNestedManyWithoutSchoolInputObjectSchema as StudentUncheckedCreateNestedManyWithoutSchoolInputObjectSchema } from './StudentUncheckedCreateNestedManyWithoutSchoolInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  externalSchoolId: z.string().optional().nullable(),
  name: z.string(),
  isVirtual: z.boolean().optional(),
  streetAddress: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: StateSchema.optional().nullable(),
  zipCode: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  principalName: z.string().optional().nullable(),
  principalEmail: z.string().optional().nullable(),
  objectiveScore: z.number().optional().nullable(),
  subjectiveScore: z.number().optional().nullable(),
  emailDomain: z.string().optional().nullable(),
  division: z.number().int().optional().nullable(),
  competitionId: z.string(),
  mutationIndex: z.number().int(),
  coaches: z.lazy(() => CoachUncheckedCreateNestedManyWithoutSchoolInputObjectSchema).optional(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutSchoolInputObjectSchema).optional(),
  students: z.lazy(() => StudentUncheckedCreateNestedManyWithoutSchoolInputObjectSchema).optional()
}).strict();
export const SchoolUncheckedCreateWithoutPrimaryCoachInputObjectSchema: z.ZodType<Prisma.SchoolUncheckedCreateWithoutPrimaryCoachInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUncheckedCreateWithoutPrimaryCoachInput>;
export const SchoolUncheckedCreateWithoutPrimaryCoachInputObjectZodSchema = makeSchema();
