import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolScalarWhereInputObjectSchema as SchoolScalarWhereInputObjectSchema } from './SchoolScalarWhereInput.schema';
import { SchoolUpdateManyMutationInputObjectSchema as SchoolUpdateManyMutationInputObjectSchema } from './SchoolUpdateManyMutationInput.schema';
import { SchoolUncheckedUpdateManyWithoutCompetitionInputObjectSchema as SchoolUncheckedUpdateManyWithoutCompetitionInputObjectSchema } from './SchoolUncheckedUpdateManyWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SchoolScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SchoolUpdateManyMutationInputObjectSchema), z.lazy(() => SchoolUncheckedUpdateManyWithoutCompetitionInputObjectSchema)])
}).strict();
export const SchoolUpdateManyWithWhereWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.SchoolUpdateManyWithWhereWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUpdateManyWithWhereWithoutCompetitionInput>;
export const SchoolUpdateManyWithWhereWithoutCompetitionInputObjectZodSchema = makeSchema();
