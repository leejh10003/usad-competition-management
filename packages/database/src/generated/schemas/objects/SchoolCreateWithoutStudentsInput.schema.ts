import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema';
import { CoachCreateNestedOneWithoutPrimarySchoolInputObjectSchema as CoachCreateNestedOneWithoutPrimarySchoolInputObjectSchema } from './CoachCreateNestedOneWithoutPrimarySchoolInput.schema';
import { CompetitionCreateNestedOneWithoutSchoolsInputObjectSchema as CompetitionCreateNestedOneWithoutSchoolsInputObjectSchema } from './CompetitionCreateNestedOneWithoutSchoolsInput.schema';
import { CoachCreateNestedManyWithoutSchoolInputObjectSchema as CoachCreateNestedManyWithoutSchoolInputObjectSchema } from './CoachCreateNestedManyWithoutSchoolInput.schema';
import { TeamCreateNestedManyWithoutSchoolInputObjectSchema as TeamCreateNestedManyWithoutSchoolInputObjectSchema } from './TeamCreateNestedManyWithoutSchoolInput.schema'

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
  competition: z.lazy(() => CompetitionCreateNestedOneWithoutSchoolsInputObjectSchema),
  coaches: z.lazy(() => CoachCreateNestedManyWithoutSchoolInputObjectSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutSchoolInputObjectSchema).optional()
}).strict();
export const SchoolCreateWithoutStudentsInputObjectSchema: z.ZodType<Prisma.SchoolCreateWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolCreateWithoutStudentsInput>;
export const SchoolCreateWithoutStudentsInputObjectZodSchema = makeSchema();
