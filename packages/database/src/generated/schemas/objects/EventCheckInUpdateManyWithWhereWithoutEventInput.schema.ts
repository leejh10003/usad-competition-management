import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInScalarWhereInputObjectSchema as EventCheckInScalarWhereInputObjectSchema } from './EventCheckInScalarWhereInput.schema';
import { EventCheckInUpdateManyMutationInputObjectSchema as EventCheckInUpdateManyMutationInputObjectSchema } from './EventCheckInUpdateManyMutationInput.schema';
import { EventCheckInUncheckedUpdateManyWithoutEventInputObjectSchema as EventCheckInUncheckedUpdateManyWithoutEventInputObjectSchema } from './EventCheckInUncheckedUpdateManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventCheckInScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => EventCheckInUpdateManyMutationInputObjectSchema), z.lazy(() => EventCheckInUncheckedUpdateManyWithoutEventInputObjectSchema)])
}).strict();
export const EventCheckInUpdateManyWithWhereWithoutEventInputObjectSchema: z.ZodType<Prisma.EventCheckInUpdateManyWithWhereWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInUpdateManyWithWhereWithoutEventInput>;
export const EventCheckInUpdateManyWithWhereWithoutEventInputObjectZodSchema = makeSchema();
