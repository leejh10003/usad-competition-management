import { OpenAPIHono } from "@hono/zod-openapi";
import { eventCheckedInResponseSchema } from "usad-scheme";

const eventCheckIn = new OpenAPIHono();

export { eventCheckIn };
