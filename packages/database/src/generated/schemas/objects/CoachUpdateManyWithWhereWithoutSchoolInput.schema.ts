import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachScalarWhereInputObjectSchema as CoachScalarWhereInputObjectSchema } from './CoachScalarWhereInput.schema';
import { CoachUpdateManyMutationInputObjectSchema as CoachUpdateManyMutationInputObjectSchema } from './CoachUpdateManyMutationInput.schema';
import { CoachUncheckedUpdateManyWithoutSchoolInputObjectSchema as CoachUncheckedUpdateManyWithoutSchoolInputObjectSchema } from './CoachUncheckedUpdateManyWithoutSchoolInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CoachScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CoachUpdateManyMutationInputObjectSchema), z.lazy(() => CoachUncheckedUpdateManyWithoutSchoolInputObjectSchema)])
}).strict();
export const CoachUpdateManyWithWhereWithoutSchoolInputObjectSchema: z.ZodType<Prisma.CoachUpdateManyWithWhereWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachUpdateManyWithWhereWithoutSchoolInput>;
export const CoachUpdateManyWithWhereWithoutSchoolInputObjectZodSchema = makeSchema();
