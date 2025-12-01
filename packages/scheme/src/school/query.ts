import { z } from "@hono/zod-openapi";
import { Prisma } from "@prisma/client";

export const schoolQuerySchema = z.object({
  orderBy: z.coerce.string().optional().transform((str) => str ? JSON.parse(str) as Prisma.SchoolFindManyArgs['orderBy'] : undefined).optional(),
    take: z.coerce.number().int().min(1).max(100).optional().default(10).optional(),
    skip: z.coerce.number().int().min(0).optional().default(0).optional(),
    where: z.coerce.string().optional().transform((str) => str ? JSON.parse(str) as Prisma.SchoolFindManyArgs['where'] : undefined).optional(),
});
