import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionAvailableStateCreateManyCompetitionInputObjectSchema as CompetitionAvailableStateCreateManyCompetitionInputObjectSchema } from './CompetitionAvailableStateCreateManyCompetitionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CompetitionAvailableStateCreateManyCompetitionInputObjectSchema), z.lazy(() => CompetitionAvailableStateCreateManyCompetitionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CompetitionAvailableStateCreateManyCompetitionInputEnvelopeObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateCreateManyCompetitionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateCreateManyCompetitionInputEnvelope>;
export const CompetitionAvailableStateCreateManyCompetitionInputEnvelopeObjectZodSchema = makeSchema();
