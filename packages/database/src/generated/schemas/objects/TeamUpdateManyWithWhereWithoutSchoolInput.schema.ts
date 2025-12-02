import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamScalarWhereInputObjectSchema as TeamScalarWhereInputObjectSchema } from './TeamScalarWhereInput.schema';
import { TeamUpdateManyMutationInputObjectSchema as TeamUpdateManyMutationInputObjectSchema } from './TeamUpdateManyMutationInput.schema';
import { TeamUncheckedUpdateManyWithoutSchoolInputObjectSchema as TeamUncheckedUpdateManyWithoutSchoolInputObjectSchema } from './TeamUncheckedUpdateManyWithoutSchoolInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TeamScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TeamUpdateManyMutationInputObjectSchema), z.lazy(() => TeamUncheckedUpdateManyWithoutSchoolInputObjectSchema)])
}).strict();
export const TeamUpdateManyWithWhereWithoutSchoolInputObjectSchema: z.ZodType<Prisma.TeamUpdateManyWithWhereWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamUpdateManyWithWhereWithoutSchoolInput>;
export const TeamUpdateManyWithWhereWithoutSchoolInputObjectZodSchema = makeSchema();
