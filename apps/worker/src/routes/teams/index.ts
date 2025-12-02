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
    const result = await prisma.$transaction(
      async (tx) => await insertTeams({ teams }, tx, {})
    );
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
    const result = await prisma.$transaction((tx) =>
      Promise.all(
        teams.map(
          async ({ team, id }) =>
            await tx.team.update({
              where: {
                id: id,
              },
              data: updateTeam(team),
              select: teamSelectFieldsSchema,
            })  as z.infer<typeof teamsResponseSchema>['teams'][number]
        )
      )
    );
    return c.json({ success: true, teams: result, count: result.length }, 200);
  }
);

teams.route("/:id", id);

export { teams };
