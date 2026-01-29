import { OpenAPIHono, z } from "@hono/zod-openapi";
import _, { startCase } from "lodash";
import {
  eventsInsertSchema,
  eventUpdateItemSchema,
  eventsResponseSchema,
  eventsUpdateSchema,
  eventSelectFieldsSchema,
  eventQuerySchema,
} from "usad-scheme";
import { eventsItem } from "./:id";
import { Prisma, Event } from "@prisma/client";
import { insertEvents } from "../../mutation/event";

export function updateEvent(event: z.infer<typeof eventUpdateItemSchema>) {
  return {
    name: !_.isUndefined(event.name) ? event.name : undefined,
    type: !_.isUndefined(event.type) ? event.type : undefined,
  };
}

const events = new OpenAPIHono();
events.openapi(
  {
    method: "get",
    path: "",
    request: {
      query: eventQuerySchema,
    },
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
    const { take, skip, where, orderBy } = c.req.valid("query");
    const result = await prisma.event.findMany({
      select: eventSelectFieldsSchema,
      take,
      skip,
      where,
      orderBy,
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
    const valueRows = events.map((e, i) => Prisma.sql`(
      ${e.id}::UUID,
      ${e.event.name ?? null}::VARCHAR,
      ${e.event.competitionId ?? null}::UUID,
      ${e.event.type ? startCase(e.event.type) : null}::"RelativeEvents",
      ${i}::INTEGER,
      ${e.event.name !== undefined}::BOOLEAN,
      ${e.event.competitionId !== undefined}::BOOLEAN,
      ${e.event.type !== undefined}::BOOLEAN
    )`); 
    const result = await prisma.$queryRaw<Event[]>`
    UPDATE "events" as e
    SET
      "name" = CASE WHEN v."update_name" THEN v."name" ELSE e."name" END,
      "competition_id" = CASE WHEN v."update_competition_id" THEN v."competition_id" ELSE e."competition_id" END,
      "type" = CASE WHEN v."update_type" THEN v."type" ELSE e."type" END,
      "mutation_index" = v."mutation_index"
      FROM (VALUES ${Prisma.join(valueRows, ',')}) AS v(id, "name", "competition_id", "type", "mutation_index", "update_name", "update_competition_id", "update_type")
      WHERE e.id = v.id
      RETURNING 
        e.id,
        e.name,
        e.competition_id AS "competitionId",
        e.type,
        e.mutation_index AS "mutationIndex"
      ;
    `;
    return c.json(
      { success: true, events: result!.sort((a, b) => a.mutationIndex - b.mutationIndex), count: result.length },
      200
    );
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
    const result = await prisma.$transaction(tx => insertEvents(tx, events));
    return c.json({ success: true, events: result, count: result.length }, 200);
  }
);

events.route("/:id", eventsItem);

export { events };
