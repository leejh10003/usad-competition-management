import { z } from "@hono/zod-openapi";
import { stateEnums } from "../constants";

export const competitionAvailableStates = z.object({
  competitionId: z.uuid(),
  state: stateEnums,
});

export const basicRequiredInfos = z.object({
  name: z.string(),
  startsAt: z.date(),
  endsAt: z.date(),
  mutationIndex: z.number().int(),
  competitionAvailableStates: z.array(competitionAvailableStates)
});
