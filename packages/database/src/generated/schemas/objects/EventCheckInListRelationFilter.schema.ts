import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInWhereInputObjectSchema as EventCheckInWhereInputObjectSchema } from './EventCheckInWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => EventCheckInWhereInputObjectSchema).optional(),
  some: z.lazy(() => EventCheckInWhereInputObjectSchema).optional(),
  none: z.lazy(() => EventCheckInWhereInputObjectSchema).optional()
}).strict();
export const EventCheckInListRelationFilterObjectSchema: z.ZodType<Prisma.EventCheckInListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInListRelationFilter>;
export const EventCheckInListRelationFilterObjectZodSchema = makeSchema();
