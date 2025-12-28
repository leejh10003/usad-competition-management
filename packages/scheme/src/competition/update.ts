import { z } from "@hono/zod-openapi";
import { stateEnums } from "../constants";

const competitionAvailableStatesModification = z.object({
  delete: z.array(stateEnums),
  create: z.array(stateEnums),
});

export const requiredInfosOptional = z.object({
  name: z.string().optional(),
  startsAt: z.date().optional(),
  endsAt: z.date().optional(),
  competitionAvailableStates: competitionAvailableStatesModification.optional()
});

export const competitionUpdateItem = requiredInfosOptional;

export const competitionUpdateSchema = z.object({
  id: z.uuid(),
  competition: requiredInfosOptional,
});
export const competitionsUpdateSchema = z.object({
  competitions: z.array(competitionUpdateSchema),
});
