import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StateSchema } from '../enums/State.schema';
import { NullableEnumStateFieldUpdateOperationsInputObjectSchema as NullableEnumStateFieldUpdateOperationsInputObjectSchema } from './NullableEnumStateFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { SchoolUpdateManyWithoutCompetitionNestedInputObjectSchema as SchoolUpdateManyWithoutCompetitionNestedInputObjectSchema } from './SchoolUpdateManyWithoutCompetitionNestedInput.schema';
import { StudentUpdateManyWithoutCompetitionNestedInputObjectSchema as StudentUpdateManyWithoutCompetitionNestedInputObjectSchema } from './StudentUpdateManyWithoutCompetitionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  startsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  endsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  state: z.union([StateSchema, z.lazy(() => NullableEnumStateFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  mutationIndex: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  schools: z.lazy(() => SchoolUpdateManyWithoutCompetitionNestedInputObjectSchema).optional(),
  students: z.lazy(() => StudentUpdateManyWithoutCompetitionNestedInputObjectSchema).optional()
}).strict();
export const CompetitionUpdateWithoutEventsInputObjectSchema: z.ZodType<Prisma.CompetitionUpdateWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUpdateWithoutEventsInput>;
export const CompetitionUpdateWithoutEventsInputObjectZodSchema = makeSchema();
