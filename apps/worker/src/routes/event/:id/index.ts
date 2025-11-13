import { OpenAPIHono } from "@hono/zod-openapi";
import {
  eventResponseSchema,
  eventSelectFieldsSchema,
  eventUpdateSchema,
} from "usad-scheme";
import { updateEvent } from "..";

const eventsItem = new OpenAPIHono();
eventsItem.openapi(
  {
    method: "get",
    path: "",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: eventResponseSchema,
          },
        },
        description: "Retrieve one event",
      },
    },
  },
  async (c) => {
    const id = c.req.param("id");
    const prisma = c.get("prisma");
    const result = await prisma.event.findFirst({
      where: {
        id,
      },
      select: eventSelectFieldsSchema,
    });
    return c.json({ success: true, event: result! }, 200);
  }
);

eventsItem.openapi({
  method: "patch",
  path: "",
  request: {
    body: {
      content: {
        "application/json": {
          schema: eventUpdateSchema,
        },
      },
    },
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: eventResponseSchema,
        },
      },
      description: "Update one event",
    },
  },
}, async c => {
    const id = c.req.param('id');
    const { event } = c.req.valid('json');
    const prisma = c.get('prisma');
    const result = await prisma.event.update({
        data: updateEvent(event),
        where: {
            id
        },
        select: eventSelectFieldsSchema
    });
    return c.json({success: true, event: result!}, 200);
});

export { eventsItem };
