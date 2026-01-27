/*
  Warnings:

  - You are about to drop the column `ends_at` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `starts_at` on the `events` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "events_starts_at_idx";

-- AlterTable
ALTER TABLE "events" DROP COLUMN "ends_at",
DROP COLUMN "starts_at";
