import { OpenAPIHono } from "@hono/zod-openapi";
import { teamResponseSchema, teamSelectFieldsSchema, teamUpdateSchema } from "../../../schema";
import { updateTeam } from "..";

const id = new OpenAPIHono();
id.openapi(
  {
    method: "get",
    path: "",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: teamResponseSchema,
          },
        },
        description: "Success to retrieve one team",
      },
    },
  },
  async (c) => {
    const id = c.req.param("id");
    const prisma = c.get("prisma");
    const result = await prisma.team.findUnique({
      where: {
        id,
      },
    });
    return c.json({ success: true, team: result! }, 200);
  }
);

id.openapi(
  {
    method: "patch",
    path: "",
    request: {
        body: {
            content: {
                "application/json": {
                    schema: teamUpdateSchema
                }
            }
        }
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: teamResponseSchema,
          },
        },
        description: "Success to retrieve one team",
      },
    },
  },
  async (c) => {
    const id = c.req.param("id");
    const { team } = c.req.valid('json');
    const prisma = c.get("prisma");
    const result = await prisma.team.update({
      select: teamSelectFieldsSchema,
      data: updateTeam(team),
      where: {
        id,
      }
    });
    return c.json({ success: true, team: result! }, 200);
  }
);

export { id };
