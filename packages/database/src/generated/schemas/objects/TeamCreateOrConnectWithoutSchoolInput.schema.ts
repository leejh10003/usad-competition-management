import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWhereUniqueInputObjectSchema as TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamCreateWithoutSchoolInputObjectSchema as TeamCreateWithoutSchoolInputObjectSchema } from './TeamCreateWithoutSchoolInput.schema';
import { TeamUncheckedCreateWithoutSchoolInputObjectSchema as TeamUncheckedCreateWithoutSchoolInputObjectSchema } from './TeamUncheckedCreateWithoutSchoolInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TeamWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TeamCreateWithoutSchoolInputObjectSchema), z.lazy(() => TeamUncheckedCreateWithoutSchoolInputObjectSchema)])
}).strict();
export const TeamCreateOrConnectWithoutSchoolInputObjectSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCreateOrConnectWithoutSchoolInput>;
export const TeamCreateOrConnectWithoutSchoolInputObjectZodSchema = makeSchema();
