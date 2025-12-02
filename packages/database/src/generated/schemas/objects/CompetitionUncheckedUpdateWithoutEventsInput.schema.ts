import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StateSchema } from '../enums/State.schema';
import { NullableEnumStateFieldUpdateOperationsInputObjectSchema as NullableEnumStateFieldUpdateOperationsInputObjectSchema } from './NullableEnumStateFieldUpdateOperationsInput.schema';
import { SchoolUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema as SchoolUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema } from './SchoolUncheckedUpdateManyWithoutCompetitionNestedInput.schema';
import { StudentUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema as StudentUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema } from './StudentUncheckedUpdateManyWithoutCompetitionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  startsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  endsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  state: z.union([StateSchema, z.lazy(() => NullableEnumStateFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  schools: z.lazy(() => SchoolUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema).optional(),
  students: z.lazy(() => StudentUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema).optional()
}).strict();
export const CompetitionUncheckedUpdateWithoutEventsInputObjectSchema: z.ZodType<Prisma.CompetitionUncheckedUpdateWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUncheckedUpdateWithoutEventsInput>;
export const CompetitionUncheckedUpdateWithoutEventsInputObjectZodSchema = makeSchema();
