import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  externalSchoolId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  isVirtual: z.literal(true).optional(),
  streetAddress: z.literal(true).optional(),
  city: z.literal(true).optional(),
  state: z.literal(true).optional(),
  zipCode: z.literal(true).optional(),
  phone: z.literal(true).optional(),
  principalName: z.literal(true).optional(),
  principalEmail: z.literal(true).optional(),
  primaryCoachId: z.literal(true).optional(),
  emailDomain: z.literal(true).optional(),
  division: z.literal(true).optional(),
  competitionId: z.literal(true).optional(),
  mutationIndex: z.literal(true).optional()
}).strict();
export const SchoolMinAggregateInputObjectSchema: z.ZodType<Prisma.SchoolMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SchoolMinAggregateInputType>;
export const SchoolMinAggregateInputObjectZodSchema = makeSchema();
