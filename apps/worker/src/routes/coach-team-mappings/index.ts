import {
  coachTeamMappingsFieldsSchema,
  coachTeamMappingsQuerySchema,
  coachTeamMappingsRespnse,
} from "usad-scheme";
import { OpenAPIHono } from "@hono/zod-openapi";

const coachTeamMappings = new OpenAPIHono();

coachTeamMappings.openapi(
  {
    method: "get",
    path: "",
    request: {
      query: coachTeamMappingsQuerySchema,
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: coachTeamMappingsRespnse,
          },
        },
        description: "Successfully retreived coarhTeamMappings",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { teamId, coachId } = c.req.valid("query");
    const condition: Exclude<Parameters<typeof prisma['teamCoachRelationship']['findMany']>[0], undefined>['where'] = {
        teamId,
        coachId,
      };
    const result = await prisma.teamCoachRelationship.findMany({
      select: coachTeamMappingsFieldsSchema,
      where: condition,
    });
    const count = await prisma.teamCoachRelationship.count({
      where: condition
    })
    return c.json({ success: true, coachTeamMappings: result!, count }, 200);
  }
);

export { coachTeamMappings };
