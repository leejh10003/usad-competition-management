import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolCreateNestedOneWithoutCoachesInputObjectSchema as SchoolCreateNestedOneWithoutCoachesInputObjectSchema } from './SchoolCreateNestedOneWithoutCoachesInput.schema';
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
  school: z.lazy(() => SchoolCreateNestedOneWithoutCoachesInputObjectSchema),
  primarySchool: z.lazy(() => SchoolCreateNestedOneWithoutPrimaryCoachInputObjectSchema).optional(),
  teamRelationship: z.lazy(() => TeamCoachRelationshipCreateNestedManyWithoutCoachInputObjectSchema).optional()
}).strict();
export const CoachCreateInputObjectSchema: z.ZodType<Prisma.CoachCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachCreateInput>;
export const CoachCreateInputObjectZodSchema = makeSchema();
