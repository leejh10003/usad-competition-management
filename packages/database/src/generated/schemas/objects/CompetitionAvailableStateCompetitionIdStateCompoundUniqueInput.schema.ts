import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema'

const makeSchema = () => z.object({
  competitionId: z.string(),
  state: StateSchema
}).strict();
export const CompetitionAvailableStateCompetitionIdStateCompoundUniqueInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateCompetitionIdStateCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateCompetitionIdStateCompoundUniqueInput>;
export const CompetitionAvailableStateCompetitionIdStateCompoundUniqueInputObjectZodSchema = makeSchema();
