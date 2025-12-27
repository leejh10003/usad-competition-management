import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionAvailableStateCompetitionIdStateCompoundUniqueInputObjectSchema as CompetitionAvailableStateCompetitionIdStateCompoundUniqueInputObjectSchema } from './CompetitionAvailableStateCompetitionIdStateCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  competitionId_state: z.lazy(() => CompetitionAvailableStateCompetitionIdStateCompoundUniqueInputObjectSchema).optional()
}).strict();
export const CompetitionAvailableStateWhereUniqueInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateWhereUniqueInput>;
export const CompetitionAvailableStateWhereUniqueInputObjectZodSchema = makeSchema();
