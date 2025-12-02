import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const CompetitionWhereUniqueInputObjectSchema: z.ZodType<Prisma.CompetitionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionWhereUniqueInput>;
export const CompetitionWhereUniqueInputObjectZodSchema = makeSchema();
