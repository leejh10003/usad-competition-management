/*
  Warnings:

  - You are about to drop the `_CoachToTeam` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `scans` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CoachToTeam" DROP CONSTRAINT "_CoachToTeam_A_fkey";

-- DropForeignKey
ALTER TABLE "_CoachToTeam" DROP CONSTRAINT "_CoachToTeam_B_fkey";

-- DropForeignKey
ALTER TABLE "scans" DROP CONSTRAINT "scans_coach_id_fkey";

-- DropForeignKey
ALTER TABLE "scans" DROP CONSTRAINT "scans_student_id_fkey";

-- DropTable
DROP TABLE "_CoachToTeam";

-- DropTable
DROP TABLE "scans";

-- DropEnum
DROP TYPE "ScanType";

-- CreateTable
CREATE TABLE "TeamCoachRelationship" (
    "team_id" UUID NOT NULL,
    "coach_id" UUID NOT NULL,

    CONSTRAINT "TeamCoachRelationship_pkey" PRIMARY KEY ("team_id","coach_id")
);

-- AddForeignKey
ALTER TABLE "TeamCoachRelationship" ADD CONSTRAINT "TeamCoachRelationship_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamCoachRelationship" ADD CONSTRAINT "TeamCoachRelationship_coach_id_fkey" FOREIGN KEY ("coach_id") REFERENCES "coaches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
