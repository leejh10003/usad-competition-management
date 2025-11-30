import { z } from "@hono/zod-openapi";
import { Prisma } from "@prisma/client";

export const studentQuerySchema = z.object({
  orderBy: z.coerce.string().transform((str) => str ? JSON.parse(str) as Prisma.StudentFindManyArgs['orderBy'] : undefined),
  take: z.coerce.number().int().min(1).max(100).optional().default(10),
  skip: z.coerce.number().int().min(0).optional().default(0),
  where: z.coerce.string().transform((str) => str ? JSON.parse(str) as Prisma.StudentFindManyArgs['where'] : undefined)
});
