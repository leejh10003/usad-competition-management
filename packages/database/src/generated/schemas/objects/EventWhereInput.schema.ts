import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumRelativeEventsFilterObjectSchema as EnumRelativeEventsFilterObjectSchema } from './EnumRelativeEventsFilter.schema';
import { RelativeEventsSchema } from '../enums/RelativeEvents.schema';
import { CompetitionScalarRelationFilterObjectSchema as CompetitionScalarRelationFilterObjectSchema } from './CompetitionScalarRelationFilter.schema';
import { CompetitionWhereInputObjectSchema as CompetitionWhereInputObjectSchema } from './CompetitionWhereInput.schema';
import { EventCheckInListRelationFilterObjectSchema as EventCheckInListRelationFilterObjectSchema } from './EventCheckInListRelationFilter.schema'

const eventwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EventWhereInputObjectSchema), z.lazy(() => EventWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EventWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EventWhereInputObjectSchema), z.lazy(() => EventWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  competitionId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  mutationIndex: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => EnumRelativeEventsFilterObjectSchema), RelativeEventsSchema]).optional(),
  competition: z.union([z.lazy(() => CompetitionScalarRelationFilterObjectSchema), z.lazy(() => CompetitionWhereInputObjectSchema)]).optional(),
  eventCheckIn: z.lazy(() => EventCheckInListRelationFilterObjectSchema).optional()
}).strict();
export const EventWhereInputObjectSchema: z.ZodType<Prisma.EventWhereInput> = eventwhereinputSchema as unknown as z.ZodType<Prisma.EventWhereInput>;
export const EventWhereInputObjectZodSchema = eventwhereinputSchema;
