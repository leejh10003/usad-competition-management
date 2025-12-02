import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolCreateWithoutTeamsInputObjectSchema as SchoolCreateWithoutTeamsInputObjectSchema } from './SchoolCreateWithoutTeamsInput.schema';
import { SchoolUncheckedCreateWithoutTeamsInputObjectSchema as SchoolUncheckedCreateWithoutTeamsInputObjectSchema } from './SchoolUncheckedCreateWithoutTeamsInput.schema';
import { SchoolCreateOrConnectWithoutTeamsInputObjectSchema as SchoolCreateOrConnectWithoutTeamsInputObjectSchema } from './SchoolCreateOrConnectWithoutTeamsInput.schema';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SchoolCreateWithoutTeamsInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutTeamsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SchoolCreateOrConnectWithoutTeamsInputObjectSchema).optional(),
  connect: z.lazy(() => SchoolWhereUniqueInputObjectSchema).optional()
}).strict();
export const SchoolCreateNestedOneWithoutTeamsInputObjectSchema: z.ZodType<Prisma.SchoolCreateNestedOneWithoutTeamsInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolCreateNestedOneWithoutTeamsInput>;
export const SchoolCreateNestedOneWithoutTeamsInputObjectZodSchema = makeSchema();
