/*
  Warnings:

  - Added the required column `round` to the `competitions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "NonRelativeEvents" AS ENUM ('Math', 'Eco', 'Science', 'Social Science', 'Music', 'Art', 'Language', 'Essay', 'Super Quiz');

-- CreateEnum
CREATE TYPE "RelativeEvents" AS ENUM ('Speech', 'Interview');

-- AlterTable
ALTER TABLE "competitions" ADD COLUMN     "non_relative_events" "NonRelativeEvents"[];
ALTER TABLE "competitions" ADD COLUMN     "round" INT4 NOT NULL;

-- AlterTable
ALTER TABLE "events" ADD COLUMN     "type" "RelativeEvents" NOT NULL;

-- CreateIndex
CREATE INDEX "competitions_round_idx" ON "competitions"("round");

-- CreateIndex
CREATE INDEX "competitions_non_relative_events_idx" ON "competitions"("non_relative_events");

-- CreateIndex
CREATE INDEX "events_type_idx" ON "events"("type");
