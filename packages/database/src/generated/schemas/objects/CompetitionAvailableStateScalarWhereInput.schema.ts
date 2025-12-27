import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { EnumStateFilterObjectSchema as EnumStateFilterObjectSchema } from './EnumStateFilter.schema';
import { StateSchema } from '../enums/State.schema'

const competitionavailablestatescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CompetitionAvailableStateScalarWhereInputObjectSchema), z.lazy(() => CompetitionAvailableStateScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CompetitionAvailableStateScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CompetitionAvailableStateScalarWhereInputObjectSchema), z.lazy(() => CompetitionAvailableStateScalarWhereInputObjectSchema).array()]).optional(),
  competitionId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  state: z.union([z.lazy(() => EnumStateFilterObjectSchema), StateSchema]).optional()
}).strict();
export const CompetitionAvailableStateScalarWhereInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateScalarWhereInput> = competitionavailablestatescalarwhereinputSchema as unknown as z.ZodType<Prisma.CompetitionAvailableStateScalarWhereInput>;
export const CompetitionAvailableStateScalarWhereInputObjectZodSchema = competitionavailablestatescalarwhereinputSchema;
