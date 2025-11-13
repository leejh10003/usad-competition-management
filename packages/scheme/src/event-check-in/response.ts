import { z } from "@hono/zod-openapi";
import { basicSuccess } from "../baseTypes";
import { eventCheckedInItem } from "./baseTypes";

export const eventCheckedInsResponseSchema = basicSuccess.extend({
  eventCheckIns: z.array(eventCheckedInItem),
});

export const eventCheckedInResponseSchema = basicSuccess.extend({
  eventCheckIn: eventCheckedInItem,
});
