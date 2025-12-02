import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachCreateManySchoolInputObjectSchema as CoachCreateManySchoolInputObjectSchema } from './CoachCreateManySchoolInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CoachCreateManySchoolInputObjectSchema), z.lazy(() => CoachCreateManySchoolInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CoachCreateManySchoolInputEnvelopeObjectSchema: z.ZodType<Prisma.CoachCreateManySchoolInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CoachCreateManySchoolInputEnvelope>;
export const CoachCreateManySchoolInputEnvelopeObjectZodSchema = makeSchema();
