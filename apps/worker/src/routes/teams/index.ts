import { OpenAPIHono, z } from "@hono/zod-openapi";
import {
  teamsInsertSchema,
  teamSelectFieldsSchema,
  teamsResponseSchema,
  teamQuerySchema,
  teamsUpdateSchema,
  teamUpdateSchema,
} from "usad-scheme";
import { id } from "./:id";
import { Prisma, Team } from "@prisma/client";
import { insertTeams } from "../../mutation";
const teams = new OpenAPIHono();
export function updateTeam(team: z.infer<typeof teamUpdateSchema>["team"]) {
  return {
    externalTeamId:
      team.externalTeamId !== undefined ? team.externalTeamId : undefined,
    schoolId: team.schoolId !== undefined ? team.schoolId : undefined,
  };
}
teams.openapi(
  {
    path: "",
    method: "get",
    description: "Get Teams Information list",
    summary: "Get Teams",
    request: {
      query: teamQuerySchema,
    },
    responses: {
      200: {
        description: "Successful Response",
        content: {
          "application/json": {
            schema: teamsResponseSchema,
          },
        },
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { take, skip, where, orderBy } = c.req.valid("query");
    const result = await prisma.team.findMany({
      select: teamSelectFieldsSchema,
      where,
      skip,
      take,
      orderBy
    }) as z.infer<typeof teamsResponseSchema>['teams'];
    const count = await prisma.team.count({
      where
    })
    return c.json({ success: true, teams: result, count });
  }
);
teams.openapi(
  {
    method: "post",
    path: "",
    request: {
      body: {
        content: {
          "application/json": {
            schema: teamsInsertSchema,
          },
        },
      },
    },
    responses: {
      200: {
        description: "Successful Response",
        content: {
          "application/json": {
            schema: teamsResponseSchema,
          },
        },
      },
    },
  },
  async (c) => {
    const { teams } = c.req.valid("json");
    const prisma = c.get("prisma");
    const schoolIds = new Set<string>();
    teams.forEach(t => schoolIds.add(t.schoolId));
    const schoolInfos = await prisma.school.findMany({
      where: { id: { in: Array.from(schoolIds) } },
      select: {
        id: true,
        competitionId: true
      }
    });
    if (schoolInfos.length !== schoolIds.size) {
      throw new Error('Some schoolIds do not exist.');
    }
    const schoolIdCompetitionIdMap = new Map<string, string>();
    schoolInfos.forEach(schoolInfo => {
      schoolIdCompetitionIdMap.set(schoolInfo.id, schoolInfo.competitionId);
    });
    const teamsWithCompetitionIds = teams.map(t => {
      const competitionId = schoolIdCompetitionIdMap.get(t.schoolId);
      if (!competitionId) {
        throw new Error('School competitionId not found.');
      }
      return {
        ...t,
        competitionId
      };
    })
    const result = await prisma.$transaction((tx) => insertTeams(tx, teamsWithCompetitionIds));
    return c.json({ success: true, teams: result, count: result.length }, 200);
  }
);
teams.openapi(
  {
    method: "put",
    path: "",
    request: {
      body: {
        content: {
          "application/json": {
            schema: teamsUpdateSchema,
          },
        },
      },
    },
    responses: {
      200: {
        description: "Successful Response",
        content: {
          "application/json": {
            schema: teamsResponseSchema,
          },
        },
      },
    },
  },
  async (c) => {
    const { teams } = c.req.valid("json");
    const prisma = c.get("prisma");
    const valueRows = teams.map((e) => Prisma.sql`(
      ${e.id}::UUID,
      ${e.team.externalTeamId}::TEXT,
      ${e.team.schoolId}::UUID,
      ${e.team.division}::INTEGER,
      ${e.team.objectiveScore}::FLOAT8,
      ${e.team.subjectiveScore}::FLOAT8,
      ${e.team.mutationIndex}::INTEGER,
      ${e.team.externalTeamId !== undefined}::BOOLEAN,
      ${e.team.schoolId !== undefined}::BOOLEAN,
      ${e.team.division !== undefined}::BOOLEAN,
      ${e.team.objectiveScore !== undefined}::BOOLEAN,
      ${e.team.subjectiveScore !== undefined}::BOOLEAN
    )`)
    const result = await prisma.$queryRaw<Team[]>`
      UPDATE "team" as t
      SET
        "external_team_id" = CASE WHEN v."update_external_team_id" THEN v."external_team_id" ELSE t."external_team_id" END,
        "school_id" = CASE WHEN v."update_school_id" THEN v."school_id" ELSE t."school_id" END,
        "division" = CASE WHEN v."update_division" THEN v."division" ELSE t."division" END,
        "objective_score" = CASE WHEN v."update_objective_score" THEN v."objective_score" ELSE t."objective_score" END,
        "subjective_score" = CASE WHEN v."update_subjective_score" THEN v."subjective_score" ELSE t."subjective_score" END,
        "mutation_index" = v."mutation_index"
      FROM (VALUES ${Prisma.join(valueRows, ',')}) AS v(
        id,
        "external_team_id",
        "school_id",
        "division",
        "objective_score",
        "subjective_score",
        "mutation_index",
        "update_external_team_id",
        "update_school_id",
        "update_division",
        "update_objective_score",
        "update_subjective_score"
      )
      WHERE t.id = v.id
      RETURNING 
        t.id,
        t.external_team_id AS "externalTeamId",
        t.school_id AS "schoolId",
        t.division,
        t.objective_score AS "objectiveScore",
        t.subjective_score AS "subjectiveScore",
        t.mutation_index AS "mutationIndex"
      ;
    ` as z.infer<typeof teamsResponseSchema>['teams'];
    return c.json({ success: true, teams: result, count: result.length }, 200);
  }
);

teams.route("/:id", id);

export { teams };
