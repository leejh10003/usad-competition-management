import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWhereUniqueInputObjectSchema as TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamCreateWithoutStudentsInputObjectSchema as TeamCreateWithoutStudentsInputObjectSchema } from './TeamCreateWithoutStudentsInput.schema';
import { TeamUncheckedCreateWithoutStudentsInputObjectSchema as TeamUncheckedCreateWithoutStudentsInputObjectSchema } from './TeamUncheckedCreateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TeamWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TeamCreateWithoutStudentsInputObjectSchema), z.lazy(() => TeamUncheckedCreateWithoutStudentsInputObjectSchema)])
}).strict();
export const TeamCreateOrConnectWithoutStudentsInputObjectSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCreateOrConnectWithoutStudentsInput>;
export const TeamCreateOrConnectWithoutStudentsInputObjectZodSchema = makeSchema();
