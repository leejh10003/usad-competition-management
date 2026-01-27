import { z } from "@hono/zod-openapi";
import { competitionRounds, nonRelativeEventsEnums, stateEnums } from "../constants";
import { optionalBasicInfos } from "./baseTypes";

const competitionAvailableStatesModification = z.object({
  delete: z.array(stateEnums),
  create: z.array(stateEnums),
});

export const requiredInfosOptional = z.object({
  name: z.string().optional(),
  startsAt: z.coerce.date().optional(),
  endsAt: z.coerce.date().optional(),
  competitionAvailableStates: competitionAvailableStatesModification.optional(),
  round: competitionRounds.optional(),
  nonRelativeEvents: z.array(nonRelativeEventsEnums).optional(),
});

export const competitionUpdateItem = requiredInfosOptional.extend(optionalBasicInfos.shape);

export const competitionUpdateSchema = z.object({
  id: z.uuid(),
  competition: competitionUpdateItem,
});
export const competitionsUpdateSchema = z.object({
  competitions: z.array(competitionUpdateSchema),
});
