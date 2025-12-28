import {
  competitionsFieldsSchema,
  competitionsInsertSchema,
  competitionsResponse,
  competitionsUpdateSchema,
} from "usad-scheme";
import { OpenAPIHono } from "@hono/zod-openapi";
import { id } from "./:id";
import { omit } from "lodash";

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
    const result = await prisma.competition.findMany({
      select: competitionsFieldsSchema,
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
          const result = await tx.competition.update({
            where: { id },
            data: {
              ...omit(competition, 'competitionAvailableStates'),
              ...(competition.competitionAvailableStates ? {competitionAvailableStates: {
                ...(competition.competitionAvailableStates.create ? {create: competition.competitionAvailableStates.create.map((state) => ({
                  state
                })),} : {}),
                ...(competition.competitionAvailableStates.delete ? {delete: competition.competitionAvailableStates.delete.map((state) => ({
                  competitionId_state: {
                    competitionId: id,
                    state,
                  },
                })),} : {}),
              }} : {})
            },
            select: competitionsFieldsSchema,
          });
          return result;
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
