import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { EnumStateFilterObjectSchema as EnumStateFilterObjectSchema } from './EnumStateFilter.schema';
import { StateSchema } from '../enums/State.schema';
import { CompetitionScalarRelationFilterObjectSchema as CompetitionScalarRelationFilterObjectSchema } from './CompetitionScalarRelationFilter.schema';
import { CompetitionWhereInputObjectSchema as CompetitionWhereInputObjectSchema } from './CompetitionWhereInput.schema'

const competitionavailablestatewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CompetitionAvailableStateWhereInputObjectSchema), z.lazy(() => CompetitionAvailableStateWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CompetitionAvailableStateWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CompetitionAvailableStateWhereInputObjectSchema), z.lazy(() => CompetitionAvailableStateWhereInputObjectSchema).array()]).optional(),
  competitionId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  state: z.union([z.lazy(() => EnumStateFilterObjectSchema), StateSchema]).optional(),
  competition: z.union([z.lazy(() => CompetitionScalarRelationFilterObjectSchema), z.lazy(() => CompetitionWhereInputObjectSchema)]).optional()
}).strict();
export const CompetitionAvailableStateWhereInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateWhereInput> = competitionavailablestatewhereinputSchema as unknown as z.ZodType<Prisma.CompetitionAvailableStateWhereInput>;
export const CompetitionAvailableStateWhereInputObjectZodSchema = competitionavailablestatewhereinputSchema;
