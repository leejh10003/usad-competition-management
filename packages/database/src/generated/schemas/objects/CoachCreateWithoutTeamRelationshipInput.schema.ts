import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolCreateNestedOneWithoutCoachesInputObjectSchema as SchoolCreateNestedOneWithoutCoachesInputObjectSchema } from './SchoolCreateNestedOneWithoutCoachesInput.schema';
import { SchoolCreateNestedOneWithoutPrimaryCoachInputObjectSchema as SchoolCreateNestedOneWithoutPrimaryCoachInputObjectSchema } from './SchoolCreateNestedOneWithoutPrimaryCoachInput.schema'

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
  primarySchool: z.lazy(() => SchoolCreateNestedOneWithoutPrimaryCoachInputObjectSchema).optional()
}).strict();
export const CoachCreateWithoutTeamRelationshipInputObjectSchema: z.ZodType<Prisma.CoachCreateWithoutTeamRelationshipInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachCreateWithoutTeamRelationshipInput>;
export const CoachCreateWithoutTeamRelationshipInputObjectZodSchema = makeSchema();
