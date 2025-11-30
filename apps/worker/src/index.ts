import { Env } from "./env";
import { PrismaClient } from "database";
import { PrismaPg } from "@prisma/adapter-pg";
import { OpenAPIHono } from "@hono/zod-openapi";
import { appendTrailingSlash } from "hono/trailing-slash";
import { students } from "./routes/students";
import { coaches } from "./routes/coaches";
import { schools } from "./routes/schools";
import { teams } from "./routes/teams";
import { events } from "./routes/event";
import { eventCheckIns } from "./routes/event-check-in";
import { files } from "./routes/files";
import { competitions } from "./routes/competitions";
import { cors } from "hono/cors";
import { test } from "./routes/test";
//import { PrismaClientUnknownRequestError, PrismaClientValidationError, PrismaClientKnownRequestError, PrismaClientInitializationError } from '@prisma/client/runtime/library';

const app = new OpenAPIHono<Env>({});

declare module "hono" {
  interface ContextVariableMap {
    logger: (
      level: "INFO" | "ERROR" | "WARN",
      message: string,
      context?: string,
      data?: object
    ) => void;
    prisma: PrismaClient;
  }
}

app.use("*", appendTrailingSlash());
app.use("*", async (c, next) => {
  const adapter = new PrismaPg({
    connectionString: c.env.HYPERDRIVE.connectionString,
  });
  const prisma = new PrismaClient({
    adapter,
  });
  c.set("prisma", prisma);
  await next();
});
app.use(
  "*",
  cors({
    origin: (origin, context) => {
      const env = context.env as Env["Bindings"];
      const urls = [
        env.DASHBOARD_URL,
        env.FIELD_OPS_URL,
        env.REGISTRATION_URL,
        "http://localhost:5173",
      ]; //TODO: Remove localhost
      return urls.includes(origin) ? origin : null;
    },
    credentials: true,
  })
);

app.use("*", async (c, next) => {
  const requestId = c.req.header("cf-request-id");
  const logBuffer: string[] = [];

  // logger 함수가 세 번째 인자로 'context'를 받도록 수정
  c.set("logger", (level, message, context, data) => {
    logBuffer.push(
      `${new Date().toISOString()} ${level} ${context} ${message} ${data}`
    );
  });

  try {
    return await next();
  } catch (e) {
    console.error(
      JSON.stringify(
        {
          level: "FATAL",
          message: "Request failed, flushing log buffer.",
          requestId,
          bufferedLogs: logBuffer,
          error: {
            message: e instanceof Error ? e.message : String(e),
            stack: e instanceof Error ? e.stack : undefined,
          },
        },
        null,
        2
      )
    );
    c.status(500);
    return c.json({
      success: false,
      error: "Internal Server Error",
      requestId,
    });
  }
});

// --- API 그룹 정의 ---
const api = app.basePath("/api");

api.route("/students", students);
api.route("/coaches", coaches);
api.route("/schools", schools);
api.route("/teams", teams);
api.route("/events", events);
api.route("/event-check-ins", eventCheckIns);
api.route("/files", files);
api.route("/competitions", competitions);
api.route("/test", test);

//api.route('/', students);

// 기본 export
export default app;
