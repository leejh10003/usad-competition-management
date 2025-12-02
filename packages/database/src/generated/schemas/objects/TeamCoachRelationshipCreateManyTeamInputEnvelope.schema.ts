import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipCreateManyTeamInputObjectSchema as TeamCoachRelationshipCreateManyTeamInputObjectSchema } from './TeamCoachRelationshipCreateManyTeamInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TeamCoachRelationshipCreateManyTeamInputObjectSchema), z.lazy(() => TeamCoachRelationshipCreateManyTeamInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TeamCoachRelationshipCreateManyTeamInputEnvelopeObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipCreateManyTeamInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipCreateManyTeamInputEnvelope>;
export const TeamCoachRelationshipCreateManyTeamInputEnvelopeObjectZodSchema = makeSchema();
