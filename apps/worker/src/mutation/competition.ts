import { z } from "@hono/zod-openapi";
import {
  competitionResponseItemSchema,
  competitionsInsertSchema,
  competitionInsertSchema,
} from "usad-scheme";
import _ from "lodash";
import { TransactionSessionType } from "./index";

export async function insertCompetition(
  competitionInput: z.infer<typeof competitionInsertSchema>,
  tx: TransactionSessionType
): Promise<z.infer<typeof competitionResponseItemSchema>> {
  const competition = (await tx.competition.create({
    data: competitionInput.competition,
  })) as z.infer<typeof competitionResponseItemSchema>;
  return competition;
}
export async function insertCompetitions(
  competitionsInput: z.infer<typeof competitionsInsertSchema>,
  tx: TransactionSessionType
): Promise<Array<z.infer<typeof competitionResponseItemSchema>>> {
  return await Promise.all(
    competitionsInput.competitions.map(
      async (competition) => await insertCompetition({ competition }, tx)
    )
  );
}
