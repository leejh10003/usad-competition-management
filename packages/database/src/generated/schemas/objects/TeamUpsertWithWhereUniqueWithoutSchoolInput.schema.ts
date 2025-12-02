import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWhereUniqueInputObjectSchema as TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamUpdateWithoutSchoolInputObjectSchema as TeamUpdateWithoutSchoolInputObjectSchema } from './TeamUpdateWithoutSchoolInput.schema';
import { TeamUncheckedUpdateWithoutSchoolInputObjectSchema as TeamUncheckedUpdateWithoutSchoolInputObjectSchema } from './TeamUncheckedUpdateWithoutSchoolInput.schema';
import { TeamCreateWithoutSchoolInputObjectSchema as TeamCreateWithoutSchoolInputObjectSchema } from './TeamCreateWithoutSchoolInput.schema';
import { TeamUncheckedCreateWithoutSchoolInputObjectSchema as TeamUncheckedCreateWithoutSchoolInputObjectSchema } from './TeamUncheckedCreateWithoutSchoolInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TeamWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TeamUpdateWithoutSchoolInputObjectSchema), z.lazy(() => TeamUncheckedUpdateWithoutSchoolInputObjectSchema)]),
  create: z.union([z.lazy(() => TeamCreateWithoutSchoolInputObjectSchema), z.lazy(() => TeamUncheckedCreateWithoutSchoolInputObjectSchema)])
}).strict();
export const TeamUpsertWithWhereUniqueWithoutSchoolInputObjectSchema: z.ZodType<Prisma.TeamUpsertWithWhereUniqueWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamUpsertWithWhereUniqueWithoutSchoolInput>;
export const TeamUpsertWithWhereUniqueWithoutSchoolInputObjectZodSchema = makeSchema();
