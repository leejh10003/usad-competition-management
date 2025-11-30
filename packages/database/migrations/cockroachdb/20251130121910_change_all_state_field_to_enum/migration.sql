/*
  Warnings:

  - The `state` column on the `competitions` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `state` column on the `schools` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `state` column on the `students` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "State" AS ENUM ('AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY');

-- AlterTable
ALTER TABLE "competitions" DROP COLUMN "state";
ALTER TABLE "competitions" ADD COLUMN     "state" "State";

-- AlterTable
ALTER TABLE "schools" DROP COLUMN "state";
ALTER TABLE "schools" ADD COLUMN     "state" "State";

-- AlterTable
ALTER TABLE "students" DROP COLUMN "state";
ALTER TABLE "students" ADD COLUMN     "state" "State";

-- CreateIndex
CREATE INDEX "competitions_state_idx" ON "competitions"("state");

-- CreateIndex
CREATE INDEX "schools_state_city_idx" ON "schools"("state", "city");
