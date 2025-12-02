import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema';
import { SchoolCreateWithoutTeamsInputObjectSchema as SchoolCreateWithoutTeamsInputObjectSchema } from './SchoolCreateWithoutTeamsInput.schema';
import { SchoolUncheckedCreateWithoutTeamsInputObjectSchema as SchoolUncheckedCreateWithoutTeamsInputObjectSchema } from './SchoolUncheckedCreateWithoutTeamsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SchoolWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SchoolCreateWithoutTeamsInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutTeamsInputObjectSchema)])
}).strict();
export const SchoolCreateOrConnectWithoutTeamsInputObjectSchema: z.ZodType<Prisma.SchoolCreateOrConnectWithoutTeamsInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolCreateOrConnectWithoutTeamsInput>;
export const SchoolCreateOrConnectWithoutTeamsInputObjectZodSchema = makeSchema();
