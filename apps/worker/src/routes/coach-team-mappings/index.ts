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
    const result = await prisma.teamCoachRelationship.findMany({
      select: coachTeamMappingsFieldsSchema,
      where: {
        teamId,
        coachId,
      },
    });
    return c.json({ success: true, coachTeamMappings: result! }, 200);
  }
);

export { coachTeamMappings };
