import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolCreateNestedOneWithoutCoachesInputObjectSchema as SchoolCreateNestedOneWithoutCoachesInputObjectSchema } from './SchoolCreateNestedOneWithoutCoachesInput.schema';
import { TeamCoachRelationshipCreateNestedManyWithoutCoachInputObjectSchema as TeamCoachRelationshipCreateNestedManyWithoutCoachInputObjectSchema } from './TeamCoachRelationshipCreateNestedManyWithoutCoachInput.schema'

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
  school: z.lazy(() => SchoolCreateNestedOneWithoutCoachesInputObjectSchema),
  teamRelationship: z.lazy(() => TeamCoachRelationshipCreateNestedManyWithoutCoachInputObjectSchema).optional()
}).strict();
export const CoachCreateWithoutPrimarySchoolInputObjectSchema: z.ZodType<Prisma.CoachCreateWithoutPrimarySchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachCreateWithoutPrimarySchoolInput>;
export const CoachCreateWithoutPrimarySchoolInputObjectZodSchema = makeSchema();
