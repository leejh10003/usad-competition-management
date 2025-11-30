import { PrismaClient } from "@prisma/client";
import { z } from "@hono/zod-openapi";
import _ from "lodash";
export type TransactionSessionType = Parameters<
  Parameters<PrismaClient["$transaction"]>[0]
>[0];
const transactionContextSchema = z.strictObject({
  schoolId: z.uuid().optional(),
  teamId: z.uuid().optional(),
  primaryCoachId: z.uuid().optional(),
});
export type TransactionContextType = z.infer<typeof transactionContextSchema>;

export * from './coach';
export * from './school';
export * from './student';
export * from './team';
export * from './competition';