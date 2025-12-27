/*
  Warnings:

  - You are about to drop the column `objective_score` on the `coaches` table. All the data in the column will be lost.
  - You are about to drop the column `subjective_score` on the `coaches` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "coaches" DROP COLUMN "objective_score";
ALTER TABLE "coaches" DROP COLUMN "subjective_score";

-- AlterTable
ALTER TABLE "schools" ADD COLUMN     "objective_score" FLOAT8;
ALTER TABLE "schools" ADD COLUMN     "subjective_score" FLOAT8;
