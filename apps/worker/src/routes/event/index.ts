import { OpenAPIHono, z } from "@hono/zod-openapi";
import _ from "lodash";
import {
  eventsInsertSchema,
  eventUpdateItemSchema,
  eventsResponseSchema,
  eventsUpdateSchema,
  eventSelectFieldsSchema,
} from "usad-scheme";
import { eventsItem } from "./:id";

export function updateEvent(event: z.infer<typeof eventUpdateItemSchema>) {
  return {
    name: !_.isUndefined(event.name) ? event.name : undefined,
    startsAt: !_.isUndefined(event.startsAt) ? event.startsAt : undefined,
  };
}

const events = new OpenAPIHono();
events.openapi(
  {
    method: "get",
    path: "",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: eventsResponseSchema,
          },
        },
        description: "Retrieve events list",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const result = await prisma.event.findMany({
      select: eventSelectFieldsSchema,
    });
    const count = await prisma.event.count(); //TODO
    return c.json({ success: true, events: result, count }, 200); //TODO: Add offset, limit
  }
);

events.openapi(
  {
    method: "put",
    path: "",
    request: {
      body: {
        content: {
          "application/json": {
            schema: eventsUpdateSchema,
          },
        },
      },
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: eventsResponseSchema,
          },
        },
        description: "Update students",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { events } = c.req.valid("json");
    const result = await prisma.$transaction((tx) =>
      Promise.all(
        events.map(({ id, event }) =>
          tx.event.update({
            select: eventSelectFieldsSchema,
            where: {
              id,
            },
            data: event,
          })
        )
      )
    );
    return c.json({ success: true, events: result!, count: result.length }, 200);
  }
);
events.openapi(
  {
    path: "",
    method: "post",
    request: {
      body: {
        content: {
          "application/json": {
            schema: eventsInsertSchema,
          },
        },
      },
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: eventsResponseSchema,
          },
        },
        description: "Create events",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { events } = c.req.valid("json");
    /*const result = await prisma.event.createManyAndReturn({
      data: events,
      select: eventSelectFieldsSchema,
    });*/
    const result = (await prisma.event.createManyAndReturn({
      data: events,
      select: eventSelectFieldsSchema
    })).sort((a, b) => a.mutationIndex - b.mutationIndex);
    return c.json({ success: true, events: result, count: result.length }, 200);
  }
);

events.route("/:id", eventsItem);

export { events };
