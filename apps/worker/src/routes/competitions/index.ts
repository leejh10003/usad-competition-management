import {
  competitionQuerySchema,
  competitionsFieldsSchema,
  competitionsInsertSchema,
  competitionsResponse,
  competitionsUpdateSchema,
} from "usad-scheme";
import { OpenAPIHono, z } from "@hono/zod-openapi";
import { id } from "./:id";
import { set, get } from "es-toolkit/compat";
import { insertCompetitions } from "../../mutation";
import { Prisma, Competition } from "@prisma/client";
import { CompetitionAvailableStateCreateManyInputObjectSchema } from "database/src/generated/schemas/objects/CompetitionAvailableStateCreateManyInput.schema";
import { CompetitionAvailableStateWhereInputObjectSchema } from "database/src/generated/schemas/objects/CompetitionAvailableStateWhereInput.schema";
type CreateCompetitionAvailableStates = z.infer<typeof CompetitionAvailableStateCreateManyInputObjectSchema>;
type DeleteCompetitionAvailableStates = z.infer<typeof CompetitionAvailableStateWhereInputObjectSchema>;

const competitions = new OpenAPIHono();

competitions.openapi(
  {
    method: "get",
    path: "",
    request: {
      query: competitionQuerySchema
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: competitionsResponse,
          },
        },
        description: "Retrieve competitions list",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { take, orderBy, where, skip } = c.req.valid('query');
    const result = (await prisma.competition.findMany({
      select: competitionsFieldsSchema,
      take,
      orderBy,
      where,
      skip,
    })) as z.infer<typeof competitionsResponse>['competitions'];
    const count = await prisma.competition.count({
      where,
    });
    return c.json({ success: true, competitions: result, count }, 200); //TODO: Add offset, limit
  }
);

competitions.openapi(
  {
    method: "put",
    path: "",
    request: {
      body: {
        content: {
          "application/json": {
            schema: competitionsUpdateSchema,
          },
        },
      },
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: competitionsResponse,
          },
        },
        description: "Update competitions",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { competitions } = c.req.valid("json");
    const updateQueries: Prisma.Sql[] = [];
    const createVars: CreateCompetitionAvailableStates[] = [];
    const deleteVars: DeleteCompetitionAvailableStates[] = [];
    competitions.map(async ({ id, competition }, i) => {
      updateQueries.push(Prisma.sql`(
        ${id}::UUID,
        ${competition.name}::TEXT,
        ${competition.startsAt}::TIMESTAMPTZ,
        ${competition.endsAt}::TIMESTAMPTZ,
        ${i}::INTEGER,
        ${competition.round}::INTEGER,
        ${competition.streetAddress}::TEXT,
        ${competition.city}::TEXT,
        ${competition.state}::"State",
        ${competition.zipCode}::TEXT,
        ${competition.name !== undefined}::BOOLEAN,
        ${competition.startsAt !== undefined}::BOOLEAN,
        ${competition.endsAt !== undefined}::BOOLEAN,
        ${competition.round !== undefined}::BOOLEAN,
        ${competition.streetAddress !== undefined}::BOOLEAN,
        ${competition.city !== undefined}::BOOLEAN,
        ${competition.state !== undefined}::BOOLEAN,
        ${competition.zipCode !== undefined}::BOOLEAN
      )`);
        competition.competitionAvailableStates?.delete?.length && deleteVars.push({
          AND: [
          {
            competitionId: {
              equals: id
            },
          },
          {
            state: {
              in: competition.competitionAvailableStates.delete
            }
          }
          ]
        });

        competition.competitionAvailableStates?.create?.length && competition.competitionAvailableStates.create.forEach((state) => { {
          createVars.push({
            competitionId: id,
            state,
          });
        }});
    });
    const [result] = await prisma.$transaction((tx) => {
      return Promise.all([
        tx.$queryRaw<Competition[]>`
          UPDATE "competitions" as c
          SET
            "name" = CASE WHEN v."update_name" THEN v."name" ELSE c."name" END,
            "starts_at" = CASE WHEN v."update_starts_at" THEN v."starts_at" ELSE c."starts_at" END,
            "ends_at" = CASE WHEN v."update_ends_at" THEN v."ends_at" ELSE c."ends_at" END,
            "round" = CASE WHEN v."update_round" THEN v."round" ELSE c."round" END,
            "street_address" = CASE WHEN v."update_street_address" THEN v."street_address" ELSE c."street_address" END,
            "city" = CASE WHEN v."update_city" THEN v."city" ELSE c."city" END,
            "state" = CASE WHEN v."update_state" THEN v."state" ELSE c."state" END,
            "zip_code" = CASE WHEN v."update_zip_code" THEN v."zip_code" ELSE c."zip_code" END
          FROM (VALUES ${Prisma.join(updateQueries)}) AS v(
            id,
            "name",
            "starts_at",
            "ends_at",
            "mutation_index",
            "round",
            "street_address",
            "city",
            "state",
            "zip_code",
            "update_name",
            "update_starts_at",
            "update_ends_at",
            "update_round",
            "update_street_address",
            "update_city",
            "update_state",
            "update_zip_code"
          )
          WHERE c.id = v.id
          RETURNING
            c.id,
            c.name,
            c.starts_at AS "startsAt",
            c.ends_at AS "endsAt",
            c.round,
            c.street_address AS "streetAddress",
            c.city,
            c.state,
            c.zip_code AS "zipCode",
            c.mutation_index AS "mutationIndex"
          ;`,
          tx.competitionAvailableState.deleteMany({
            where: {
              OR: deleteVars
            }
          }),
          tx.competitionAvailableState.createMany({
            data: createVars
          })])
    });
    const idToCompetitionIndexMap = new Map<string, number>();
    result.forEach((c, i) => idToCompetitionIndexMap.set(c.id, i));
    const competitionAvailableStates = await prisma.competitionAvailableState.findMany({
      where: {
        competitionId: {in: result.map((r) => r.id)}
      }
    });
    competitionAvailableStates.forEach((cas) => {
      const compIdx = idToCompetitionIndexMap.get(cas.competitionId)!;
      if (!get(result[compIdx], 'competitionAvailableStates')) {
        set(result[compIdx], 'competitionAvailableStates', []);
      }
      (result[compIdx] as z.infer<typeof competitionsResponse>['competitions'][number]).competitionAvailableStates!.push({
        competitionId: cas.competitionId,
        state: cas.state,
      });
    });
    return c.json(
      { success: true, competitions: result as z.infer<typeof competitionsResponse>['competitions'], count: result.length },
      200
    );
  }
);

competitions.openapi(
  {
    method: "post",
    path: "",
    request: {
      body: {
        content: {
          "application/json": {
            schema: competitionsInsertSchema,
          },
        },
      },
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: competitionsResponse,
          },
        },
        description: "Insert competitions",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { competitions } = c.req.valid("json");
    
    const result = await prisma.$transaction(async (tx) => {
      const result = await insertCompetitions(tx, competitions);
      
      return result;
    });

    return c.json(
      { success: true, competitions: result, count: result.length },
      200
    );
  }
);

competitions.route("/:id", id);

export { competitions };
