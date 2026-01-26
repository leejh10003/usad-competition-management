import { z } from "@hono/zod-openapi";
import { competitionRounds, nonRelativeEventsEnums, stateEnums } from "../constants";

export const competitionAvailableStates = z.object({
  competitionId: z.uuid(),
  state: stateEnums,
});

export const basicRequiredInfos = z.object({
  name: z.string(),
  startsAt: z.date(),
  endsAt: z.date(),
  mutationIndex: z.number().int(),
  competitionAvailableStates: z.array(competitionAvailableStates),
  round: competitionRounds,
  nonRelativeEvents: z.array(nonRelativeEventsEnums),
});

export const optionalBasicInfos = z.object({
  streetAddress: z.string().nullable().optional(),
  city: z.string().nullable().optional(),
  state: stateEnums.nullable().optional(),
  zipCode: z.string().nullable().optional(),
})