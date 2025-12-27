import {
  competitionsFieldsSchema,
  competitionsInsertSchema,
  competitionsResponse,
  competitionsUpdateSchema,
  eventSelectFieldsSchema,
} from "usad-scheme";
import { OpenAPIHono } from "@hono/zod-openapi";
import { id } from "./:id";

const competitions = new OpenAPIHono();

competitions.openapi(
  {
    method: "get",
    path: "",
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
    const result = await prisma.event.findMany({
      select: eventSelectFieldsSchema,
    }); //TODO: Change to competition
    const count = await prisma.event.count(); //TODO: Change to competition
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
    const result = await prisma.$transaction((tx) => {
      return Promise.all(
        competitions.map(async ({ id, competition }) => {
          return await tx.event.update({
            where: { id },
            data: competition,
            select: eventSelectFieldsSchema,
          });
        })
      );
    });
    return c.json(
      { success: true, competitions: result, count: result.length },
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
        description: "Update competitions",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { competitions } = c.req.valid("json");
    const result = (await prisma.competition.createManyAndReturn({
      data: competitions,
      select: competitionsFieldsSchema
    })).sort((a, b) => a.mutationIndex - b.mutationIndex);

    return c.json(
      { success: true, competitions: result, count: result.length },
      200
    );
  }
);

competitions.route("/:id", id);

export { competitions };
