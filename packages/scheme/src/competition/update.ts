import { z } from "@hono/zod-openapi";
import { basicOptionalInfos } from "./baseTypes";

export const requiredInfosOptional = z.object({
  name: z.string().optional(),
  startsAt: z.date().optional(),
  endsAt: z.date().optional(),
});

export const competitionUpdateItem = requiredInfosOptional.extend(basicOptionalInfos.shape);

export const competitionUpdateSchema = z.object({
  id: z.uuid(),
  competition: requiredInfosOptional,
});
export const competitionsUpdateSchema = z.object({
  competitions: z.array(competitionUpdateSchema),
});
