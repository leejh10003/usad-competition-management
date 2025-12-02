import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWhereUniqueInputObjectSchema as TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamUpdateWithoutSchoolInputObjectSchema as TeamUpdateWithoutSchoolInputObjectSchema } from './TeamUpdateWithoutSchoolInput.schema';
import { TeamUncheckedUpdateWithoutSchoolInputObjectSchema as TeamUncheckedUpdateWithoutSchoolInputObjectSchema } from './TeamUncheckedUpdateWithoutSchoolInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TeamWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TeamUpdateWithoutSchoolInputObjectSchema), z.lazy(() => TeamUncheckedUpdateWithoutSchoolInputObjectSchema)])
}).strict();
export const TeamUpdateWithWhereUniqueWithoutSchoolInputObjectSchema: z.ZodType<Prisma.TeamUpdateWithWhereUniqueWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamUpdateWithWhereUniqueWithoutSchoolInput>;
export const TeamUpdateWithWhereUniqueWithoutSchoolInputObjectZodSchema = makeSchema();
