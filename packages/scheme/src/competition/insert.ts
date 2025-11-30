import { z } from "@hono/zod-openapi";
import { basicOptionalInfos, basicRequiredInfos } from "./baseTypes";


export const competitionInsertItem = basicRequiredInfos.extend(basicOptionalInfos.shape);
export const competitionInsertSchema = z.object({
  competition: competitionInsertItem,
});
export const competitionsInsertSchema = z.object({
  competitions: z.array(competitionInsertItem),
});
