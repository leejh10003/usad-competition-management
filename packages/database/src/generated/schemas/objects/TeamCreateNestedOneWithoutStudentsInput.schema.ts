import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCreateWithoutStudentsInputObjectSchema as TeamCreateWithoutStudentsInputObjectSchema } from './TeamCreateWithoutStudentsInput.schema';
import { TeamUncheckedCreateWithoutStudentsInputObjectSchema as TeamUncheckedCreateWithoutStudentsInputObjectSchema } from './TeamUncheckedCreateWithoutStudentsInput.schema';
import { TeamCreateOrConnectWithoutStudentsInputObjectSchema as TeamCreateOrConnectWithoutStudentsInputObjectSchema } from './TeamCreateOrConnectWithoutStudentsInput.schema';
import { TeamWhereUniqueInputObjectSchema as TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TeamCreateWithoutStudentsInputObjectSchema), z.lazy(() => TeamUncheckedCreateWithoutStudentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutStudentsInputObjectSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputObjectSchema).optional()
}).strict();
export const TeamCreateNestedOneWithoutStudentsInputObjectSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCreateNestedOneWithoutStudentsInput>;
export const TeamCreateNestedOneWithoutStudentsInputObjectZodSchema = makeSchema();
