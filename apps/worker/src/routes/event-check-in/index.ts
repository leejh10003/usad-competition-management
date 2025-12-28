import { OpenAPIHono } from "@hono/zod-openapi";
import { eventCheckIn } from "./:id";
import {
  eventCheckedInsInsert,
  eventCheckedInsResponseSchema,
  eventCheckInQuerySchema,
  eventCheckInSelectFieldsSchema,
} from "usad-scheme";

const eventCheckIns = new OpenAPIHono();

eventCheckIns.openapi(
  {
    method: "get",
    path: "",
    request: {
      query: eventCheckInQuerySchema
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: eventCheckedInsResponseSchema,
          },
        },
        description: "",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { take, skip, where, orderBy } = c.req.valid('query');
    const result = await prisma.eventCheckIn.findMany({
      select: eventCheckInSelectFieldsSchema,
      take,
      skip,
      where,
      orderBy,
    });
    const count = await prisma.eventCheckIn.count(); //TODO
    return c.json({ success: true, eventCheckIns: result, count }, 200);
  }
);
eventCheckIns.openapi(
  {
    method: "post",
    path: "",
    request: {
      body: {
        content: {
          "application/json": {
            schema: eventCheckedInsInsert,
          },
        },
      },
    },
    responses: {
      200: {
        description: "Create event check ins",
        content: {
          "application/json": {
            schema: eventCheckedInsResponseSchema,
          },
        },
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { events } = c.req.valid("json");
    const result = (await prisma.eventCheckIn.createManyAndReturn({
      data: events,
      select: eventCheckInSelectFieldsSchema
    })).sort((a, b) => a.mutationIndex - b.mutationIndex);
    return c.json({ success: true, eventCheckIns: result!, count: result.length }, 200);
  }
);

eventCheckIns.route("/:id", eventCheckIn);

export { eventCheckIns };
