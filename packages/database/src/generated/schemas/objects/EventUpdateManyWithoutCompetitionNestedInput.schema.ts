import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCreateWithoutCompetitionInputObjectSchema as EventCreateWithoutCompetitionInputObjectSchema } from './EventCreateWithoutCompetitionInput.schema';
import { EventUncheckedCreateWithoutCompetitionInputObjectSchema as EventUncheckedCreateWithoutCompetitionInputObjectSchema } from './EventUncheckedCreateWithoutCompetitionInput.schema';
import { EventCreateOrConnectWithoutCompetitionInputObjectSchema as EventCreateOrConnectWithoutCompetitionInputObjectSchema } from './EventCreateOrConnectWithoutCompetitionInput.schema';
import { EventUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema as EventUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema } from './EventUpsertWithWhereUniqueWithoutCompetitionInput.schema';
import { EventCreateManyCompetitionInputEnvelopeObjectSchema as EventCreateManyCompetitionInputEnvelopeObjectSchema } from './EventCreateManyCompetitionInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema as EventUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema } from './EventUpdateWithWhereUniqueWithoutCompetitionInput.schema';
import { EventUpdateManyWithWhereWithoutCompetitionInputObjectSchema as EventUpdateManyWithWhereWithoutCompetitionInputObjectSchema } from './EventUpdateManyWithWhereWithoutCompetitionInput.schema';
import { EventScalarWhereInputObjectSchema as EventScalarWhereInputObjectSchema } from './EventScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutCompetitionInputObjectSchema), z.lazy(() => EventCreateWithoutCompetitionInputObjectSchema).array(), z.lazy(() => EventUncheckedCreateWithoutCompetitionInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutCompetitionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EventCreateOrConnectWithoutCompetitionInputObjectSchema), z.lazy(() => EventCreateOrConnectWithoutCompetitionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => EventUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema), z.lazy(() => EventUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EventCreateManyCompetitionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => EventUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema), z.lazy(() => EventUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => EventUpdateManyWithWhereWithoutCompetitionInputObjectSchema), z.lazy(() => EventUpdateManyWithWhereWithoutCompetitionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => EventScalarWhereInputObjectSchema), z.lazy(() => EventScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const EventUpdateManyWithoutCompetitionNestedInputObjectSchema: z.ZodType<Prisma.EventUpdateManyWithoutCompetitionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateManyWithoutCompetitionNestedInput>;
export const EventUpdateManyWithoutCompetitionNestedInputObjectZodSchema = makeSchema();
