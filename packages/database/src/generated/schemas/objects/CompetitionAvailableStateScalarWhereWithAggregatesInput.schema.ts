import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { EnumStateWithAggregatesFilterObjectSchema as EnumStateWithAggregatesFilterObjectSchema } from './EnumStateWithAggregatesFilter.schema';
import { StateSchema } from '../enums/State.schema'

const competitionavailablestatescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CompetitionAvailableStateScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CompetitionAvailableStateScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CompetitionAvailableStateScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CompetitionAvailableStateScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CompetitionAvailableStateScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  competitionId: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  state: z.union([z.lazy(() => EnumStateWithAggregatesFilterObjectSchema), StateSchema]).optional()
}).strict();
export const CompetitionAvailableStateScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateScalarWhereWithAggregatesInput> = competitionavailablestatescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CompetitionAvailableStateScalarWhereWithAggregatesInput>;
export const CompetitionAvailableStateScalarWhereWithAggregatesInputObjectZodSchema = competitionavailablestatescalarwherewithaggregatesinputSchema;
