import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  externalTeamId: z.string().optional().nullable(),
  schoolId: z.string(),
  division: z.number().int().optional().nullable(),
  objectiveScore: z.number().optional().nullable(),
  subjectiveScore: z.number().optional().nullable()
}).strict();
export const TeamCreateManyInputObjectSchema: z.ZodType<Prisma.TeamCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCreateManyInput>;
export const TeamCreateManyInputObjectZodSchema = makeSchema();
