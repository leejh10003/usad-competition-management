import { z } from "@hono/zod-openapi";
import { basicOptionalInfos, basicRequiredInfos } from "./baseTypes";
import { eventsInsertSchema } from "../event";
import { schoolsInsertSchema } from "../school";


export const competitionInsertItem = basicRequiredInfos
  .extend(basicOptionalInfos.shape)
  .extend(eventsInsertSchema.shape)
  .extend(schoolsInsertSchema.shape);
export const competitionInsertSchema = z.object({
  competition: competitionInsertItem,
});
export const competitionsInsertSchema = z.object({
  competitions: z.array(competitionInsertItem),
});
