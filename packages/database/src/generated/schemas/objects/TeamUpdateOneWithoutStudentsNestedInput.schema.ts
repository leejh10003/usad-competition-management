import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCreateWithoutStudentsInputObjectSchema as TeamCreateWithoutStudentsInputObjectSchema } from './TeamCreateWithoutStudentsInput.schema';
import { TeamUncheckedCreateWithoutStudentsInputObjectSchema as TeamUncheckedCreateWithoutStudentsInputObjectSchema } from './TeamUncheckedCreateWithoutStudentsInput.schema';
import { TeamCreateOrConnectWithoutStudentsInputObjectSchema as TeamCreateOrConnectWithoutStudentsInputObjectSchema } from './TeamCreateOrConnectWithoutStudentsInput.schema';
import { TeamUpsertWithoutStudentsInputObjectSchema as TeamUpsertWithoutStudentsInputObjectSchema } from './TeamUpsertWithoutStudentsInput.schema';
import { TeamWhereInputObjectSchema as TeamWhereInputObjectSchema } from './TeamWhereInput.schema';
import { TeamWhereUniqueInputObjectSchema as TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamUpdateToOneWithWhereWithoutStudentsInputObjectSchema as TeamUpdateToOneWithWhereWithoutStudentsInputObjectSchema } from './TeamUpdateToOneWithWhereWithoutStudentsInput.schema';
import { TeamUpdateWithoutStudentsInputObjectSchema as TeamUpdateWithoutStudentsInputObjectSchema } from './TeamUpdateWithoutStudentsInput.schema';
import { TeamUncheckedUpdateWithoutStudentsInputObjectSchema as TeamUncheckedUpdateWithoutStudentsInputObjectSchema } from './TeamUncheckedUpdateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TeamCreateWithoutStudentsInputObjectSchema), z.lazy(() => TeamUncheckedCreateWithoutStudentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutStudentsInputObjectSchema).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutStudentsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TeamWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TeamWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TeamUpdateToOneWithWhereWithoutStudentsInputObjectSchema), z.lazy(() => TeamUpdateWithoutStudentsInputObjectSchema), z.lazy(() => TeamUncheckedUpdateWithoutStudentsInputObjectSchema)]).optional()
}).strict();
export const TeamUpdateOneWithoutStudentsNestedInputObjectSchema: z.ZodType<Prisma.TeamUpdateOneWithoutStudentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamUpdateOneWithoutStudentsNestedInput>;
export const TeamUpdateOneWithoutStudentsNestedInputObjectZodSchema = makeSchema();
