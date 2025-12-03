import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  competitionId: z.string(),
  mutationIndex: z.number().int()
}).strict();
export const EventUncheckedCreateWithoutEventCheckInInputObjectSchema: z.ZodType<Prisma.EventUncheckedCreateWithoutEventCheckInInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedCreateWithoutEventCheckInInput>;
export const EventUncheckedCreateWithoutEventCheckInInputObjectZodSchema = makeSchema();
