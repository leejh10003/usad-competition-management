import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentCreateNestedOneWithoutEventCheckInsInputObjectSchema as StudentCreateNestedOneWithoutEventCheckInsInputObjectSchema } from './StudentCreateNestedOneWithoutEventCheckInsInput.schema'

const makeSchema = () => z.object({
  checkedInAt: z.coerce.date().optional().nullable(),
  student: z.lazy(() => StudentCreateNestedOneWithoutEventCheckInsInputObjectSchema)
}).strict();
export const EventCheckInCreateWithoutEventInputObjectSchema: z.ZodType<Prisma.EventCheckInCreateWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInCreateWithoutEventInput>;
export const EventCheckInCreateWithoutEventInputObjectZodSchema = makeSchema();
