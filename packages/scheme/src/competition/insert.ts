import { z } from "@hono/zod-openapi";
import { basicRequiredInfos, optionalBasicInfos } from "./baseTypes";
import { eventsInsertSchema } from "../event";
import { schoolsInsertSchema } from "../school";


export const competitionInsertItem = z.object({
  ...basicRequiredInfos.shape,
  competitionAvailableStates: z.array(basicRequiredInfos.shape.competitionAvailableStates.element.omit({ competitionId: true })),
})
  .extend({
    ...optionalBasicInfos.shape
  })
  .extend({
    ...eventsInsertSchema.shape,
    events: z.array(eventsInsertSchema.shape.events.element.omit({ competitionId: true })),
  })
  .extend({
    ...schoolsInsertSchema.shape,
    schools: z.array(schoolsInsertSchema.shape.schools.element.omit({ competitionId: true })),
  });
export const competitionInsertSchema = z.object({
  competition: competitionInsertItem,
});
export const competitionsInsertSchema = z.object({
  competitions: z.array(competitionInsertItem),
});
