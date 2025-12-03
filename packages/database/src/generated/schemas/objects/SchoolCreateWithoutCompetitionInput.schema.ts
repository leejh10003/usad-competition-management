import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema';
import { CoachCreateNestedOneWithoutPrimarySchoolInputObjectSchema as CoachCreateNestedOneWithoutPrimarySchoolInputObjectSchema } from './CoachCreateNestedOneWithoutPrimarySchoolInput.schema';
import { CoachCreateNestedManyWithoutSchoolInputObjectSchema as CoachCreateNestedManyWithoutSchoolInputObjectSchema } from './CoachCreateNestedManyWithoutSchoolInput.schema';
import { TeamCreateNestedManyWithoutSchoolInputObjectSchema as TeamCreateNestedManyWithoutSchoolInputObjectSchema } from './TeamCreateNestedManyWithoutSchoolInput.schema';
import { StudentCreateNestedManyWithoutSchoolInputObjectSchema as StudentCreateNestedManyWithoutSchoolInputObjectSchema } from './StudentCreateNestedManyWithoutSchoolInput.schema'

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
  emailDomain: z.string().optional().nullable(),
  division: z.number().int().optional().nullable(),
  mutationIndex: z.number().int(),
  primaryCoach: z.lazy(() => CoachCreateNestedOneWithoutPrimarySchoolInputObjectSchema).optional(),
  coaches: z.lazy(() => CoachCreateNestedManyWithoutSchoolInputObjectSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutSchoolInputObjectSchema).optional(),
  students: z.lazy(() => StudentCreateNestedManyWithoutSchoolInputObjectSchema).optional()
}).strict();
export const SchoolCreateWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.SchoolCreateWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolCreateWithoutCompetitionInput>;
export const SchoolCreateWithoutCompetitionInputObjectZodSchema = makeSchema();
