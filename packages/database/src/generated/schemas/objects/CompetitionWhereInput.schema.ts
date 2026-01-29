import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumNonRelativeEventsNullableListFilterObjectSchema as EnumNonRelativeEventsNullableListFilterObjectSchema } from './EnumNonRelativeEventsNullableListFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumStateNullableFilterObjectSchema as EnumStateNullableFilterObjectSchema } from './EnumStateNullableFilter.schema';
import { StateSchema } from '../enums/State.schema';
import { EventListRelationFilterObjectSchema as EventListRelationFilterObjectSchema } from './EventListRelationFilter.schema';
import { CompetitionAvailableStateListRelationFilterObjectSchema as CompetitionAvailableStateListRelationFilterObjectSchema } from './CompetitionAvailableStateListRelationFilter.schema';
import { SchoolListRelationFilterObjectSchema as SchoolListRelationFilterObjectSchema } from './SchoolListRelationFilter.schema';
import { StudentListRelationFilterObjectSchema as StudentListRelationFilterObjectSchema } from './StudentListRelationFilter.schema'

const competitionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CompetitionWhereInputObjectSchema), z.lazy(() => CompetitionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CompetitionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CompetitionWhereInputObjectSchema), z.lazy(() => CompetitionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  startsAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  endsAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  mutationIndex: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  round: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nonRelativeEvents: z.lazy(() => EnumNonRelativeEventsNullableListFilterObjectSchema).optional(),
  streetAddress: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  city: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  state: z.union([z.lazy(() => EnumStateNullableFilterObjectSchema), StateSchema]).optional().nullable(),
  zipCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  events: z.lazy(() => EventListRelationFilterObjectSchema).optional(),
  competitionAvailableStates: z.lazy(() => CompetitionAvailableStateListRelationFilterObjectSchema).optional(),
  schools: z.lazy(() => SchoolListRelationFilterObjectSchema).optional(),
  students: z.lazy(() => StudentListRelationFilterObjectSchema).optional()
}).strict();
export const CompetitionWhereInputObjectSchema: z.ZodType<Prisma.CompetitionWhereInput> = competitionwhereinputSchema as unknown as z.ZodType<Prisma.CompetitionWhereInput>;
export const CompetitionWhereInputObjectZodSchema = competitionwhereinputSchema;
