import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInScalarWhereInputObjectSchema as EventCheckInScalarWhereInputObjectSchema } from './EventCheckInScalarWhereInput.schema';
import { EventCheckInUpdateManyMutationInputObjectSchema as EventCheckInUpdateManyMutationInputObjectSchema } from './EventCheckInUpdateManyMutationInput.schema';
import { EventCheckInUncheckedUpdateManyWithoutStudentInputObjectSchema as EventCheckInUncheckedUpdateManyWithoutStudentInputObjectSchema } from './EventCheckInUncheckedUpdateManyWithoutStudentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventCheckInScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => EventCheckInUpdateManyMutationInputObjectSchema), z.lazy(() => EventCheckInUncheckedUpdateManyWithoutStudentInputObjectSchema)])
}).strict();
export const EventCheckInUpdateManyWithWhereWithoutStudentInputObjectSchema: z.ZodType<Prisma.EventCheckInUpdateManyWithWhereWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInUpdateManyWithWhereWithoutStudentInput>;
export const EventCheckInUpdateManyWithWhereWithoutStudentInputObjectZodSchema = makeSchema();
