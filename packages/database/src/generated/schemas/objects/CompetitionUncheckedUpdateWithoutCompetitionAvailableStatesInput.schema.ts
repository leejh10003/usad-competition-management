import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { EventUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema as EventUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema } from './EventUncheckedUpdateManyWithoutCompetitionNestedInput.schema';
import { SchoolUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema as SchoolUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema } from './SchoolUncheckedUpdateManyWithoutCompetitionNestedInput.schema';
import { StudentUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema as StudentUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema } from './StudentUncheckedUpdateManyWithoutCompetitionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  startsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  endsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  mutationIndex: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  events: z.lazy(() => EventUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema).optional(),
  schools: z.lazy(() => SchoolUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema).optional(),
  students: z.lazy(() => StudentUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema).optional()
}).strict();
export const CompetitionUncheckedUpdateWithoutCompetitionAvailableStatesInputObjectSchema: z.ZodType<Prisma.CompetitionUncheckedUpdateWithoutCompetitionAvailableStatesInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUncheckedUpdateWithoutCompetitionAvailableStatesInput>;
export const CompetitionUncheckedUpdateWithoutCompetitionAvailableStatesInputObjectZodSchema = makeSchema();
