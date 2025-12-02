import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { EventUpdateWithoutEventCheckInInputObjectSchema as EventUpdateWithoutEventCheckInInputObjectSchema } from './EventUpdateWithoutEventCheckInInput.schema';
import { EventUncheckedUpdateWithoutEventCheckInInputObjectSchema as EventUncheckedUpdateWithoutEventCheckInInputObjectSchema } from './EventUncheckedUpdateWithoutEventCheckInInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EventUpdateWithoutEventCheckInInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutEventCheckInInputObjectSchema)])
}).strict();
export const EventUpdateToOneWithWhereWithoutEventCheckInInputObjectSchema: z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutEventCheckInInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutEventCheckInInput>;
export const EventUpdateToOneWithWhereWithoutEventCheckInInputObjectZodSchema = makeSchema();
