import { OpenAPIHono } from "@hono/zod-openapi";
import { competitionResponse, competitionUpdateSchema } from "usad-scheme";

const id = new OpenAPIHono();

id.openapi(
  {
    method: "get",
    path: "",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: competitionResponse,
          },
        },
        description: "Retrieve competition by ID",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const id = c.req.param("id");
    const result = await prisma.competition.findUnique({
      where: { id },
    });
    return c.json({ success: true, competition: result! }, 200);
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
            schema: competitionUpdateSchema,
          },
        },
      },
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: competitionResponse,
          },
        },
        description: "Update competition by ID",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const id = c.req.param("id");
    const updateData = c.req.valid("json");
    const result = await prisma.competition.update({
      where: { id },
      data: updateData,
    });
    return c.json({ success: true, competition: result }, 200);
  }
);

export { id };
