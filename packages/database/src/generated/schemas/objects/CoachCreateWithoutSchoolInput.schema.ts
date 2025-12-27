import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolCreateNestedOneWithoutPrimaryCoachInputObjectSchema as SchoolCreateNestedOneWithoutPrimaryCoachInputObjectSchema } from './SchoolCreateNestedOneWithoutPrimaryCoachInput.schema';
import { TeamCoachRelationshipCreateNestedManyWithoutCoachInputObjectSchema as TeamCoachRelationshipCreateNestedManyWithoutCoachInputObjectSchema } from './TeamCoachRelationshipCreateNestedManyWithoutCoachInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  externalCoachId: z.string().optional().nullable(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string().optional().nullable(),
  signature: z.string().optional().nullable(),
  mutationIndex: z.number().int(),
  primarySchool: z.lazy(() => SchoolCreateNestedOneWithoutPrimaryCoachInputObjectSchema).optional(),
  teamRelationship: z.lazy(() => TeamCoachRelationshipCreateNestedManyWithoutCoachInputObjectSchema).optional()
}).strict();
export const CoachCreateWithoutSchoolInputObjectSchema: z.ZodType<Prisma.CoachCreateWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachCreateWithoutSchoolInput>;
export const CoachCreateWithoutSchoolInputObjectZodSchema = makeSchema();
