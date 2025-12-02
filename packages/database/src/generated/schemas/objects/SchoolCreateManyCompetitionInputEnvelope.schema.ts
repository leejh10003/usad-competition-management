import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolCreateManyCompetitionInputObjectSchema as SchoolCreateManyCompetitionInputObjectSchema } from './SchoolCreateManyCompetitionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SchoolCreateManyCompetitionInputObjectSchema), z.lazy(() => SchoolCreateManyCompetitionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SchoolCreateManyCompetitionInputEnvelopeObjectSchema: z.ZodType<Prisma.SchoolCreateManyCompetitionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SchoolCreateManyCompetitionInputEnvelope>;
export const SchoolCreateManyCompetitionInputEnvelopeObjectZodSchema = makeSchema();
