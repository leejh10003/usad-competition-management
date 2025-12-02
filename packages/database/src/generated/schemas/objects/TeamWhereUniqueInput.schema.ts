import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const TeamWhereUniqueInputObjectSchema: z.ZodType<Prisma.TeamWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamWhereUniqueInput>;
export const TeamWhereUniqueInputObjectZodSchema = makeSchema();
