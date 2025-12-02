import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipCreateManyCoachInputObjectSchema as TeamCoachRelationshipCreateManyCoachInputObjectSchema } from './TeamCoachRelationshipCreateManyCoachInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TeamCoachRelationshipCreateManyCoachInputObjectSchema), z.lazy(() => TeamCoachRelationshipCreateManyCoachInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TeamCoachRelationshipCreateManyCoachInputEnvelopeObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipCreateManyCoachInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipCreateManyCoachInputEnvelope>;
export const TeamCoachRelationshipCreateManyCoachInputEnvelopeObjectZodSchema = makeSchema();
