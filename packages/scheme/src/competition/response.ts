import { z } from "@hono/zod-openapi";
import { basicRequiredInfos } from "./baseTypes";
import { basicSuccess } from "../baseTypes";

export const competitionResponseItemSchema = basicRequiredInfos
  .extend({
    id: z.uuid(),
  });
export const schoolResponse = basicSuccess.extend({
  competition: competitionResponseItemSchema,
});
export const schoolsResponse = basicSuccess.extend({
  competitions: z.array(competitionResponseItemSchema),
  count: z.int(),
});
