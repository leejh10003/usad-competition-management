import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentCreateNestedOneWithoutEventCheckInsInputObjectSchema as StudentCreateNestedOneWithoutEventCheckInsInputObjectSchema } from './StudentCreateNestedOneWithoutEventCheckInsInput.schema';
import { EventCreateNestedOneWithoutEventCheckInInputObjectSchema as EventCreateNestedOneWithoutEventCheckInInputObjectSchema } from './EventCreateNestedOneWithoutEventCheckInInput.schema'

const makeSchema = () => z.object({
  checkedInAt: z.coerce.date().optional().nullable(),
  mutationIndex: z.number().int(),
  student: z.lazy(() => StudentCreateNestedOneWithoutEventCheckInsInputObjectSchema),
  event: z.lazy(() => EventCreateNestedOneWithoutEventCheckInInputObjectSchema)
}).strict();
export const EventCheckInCreateInputObjectSchema: z.ZodType<Prisma.EventCheckInCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInCreateInput>;
export const EventCheckInCreateInputObjectZodSchema = makeSchema();
