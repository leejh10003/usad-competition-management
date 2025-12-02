import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "./src/prisma/schema.prisma",
  migrations: {
    path: "./migrations/cockroachdb",
  },
  datasource: {
    url: process.env.DATABASE_URL!
  }
});
