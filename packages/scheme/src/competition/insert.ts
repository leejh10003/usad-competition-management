import { z } from "@hono/zod-openapi";
import { basicRequiredInfos } from "./baseTypes";


export const competitionInsertItem = basicRequiredInfos;
export const competitionInsertSchema = z.object({
  competition: competitionInsertItem,
});
export const competitionsInsertSchema = z.object({
  competitions: z.array(competitionInsertItem),
});
