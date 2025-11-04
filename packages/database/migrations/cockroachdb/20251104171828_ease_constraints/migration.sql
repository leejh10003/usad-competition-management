-- DropIndex
DROP INDEX "public"."teams_external_team_id_school_id_key";

-- AlterTable
ALTER TABLE "coaches" ALTER COLUMN "external_coach_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "schools" ALTER COLUMN "external_school_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "students" ALTER COLUMN "external_student_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "teams" ALTER COLUMN "external_team_id" DROP NOT NULL;
