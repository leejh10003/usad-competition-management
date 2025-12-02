import { z } from "@hono/zod-openapi";
import { Prisma } from "@prisma/client";

export const teamQuerySchema = z.object({
  orderBy: z.coerce.string().optional().transform((str) => str ? JSON.parse(str) as Prisma.TeamFindManyArgs['orderBy'] : undefined).optional(),
    take: z.coerce.number().int().min(1).max(100).optional().default(10).optional(),
    skip: z.coerce.number().int().min(0).optional().default(0).optional(),
    where: z.coerce.string().optional().transform((str) => str ? JSON.parse(str) as Prisma.TeamFindManyArgs['where'] : undefined).optional(),
});
