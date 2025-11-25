-- AlterTable
ALTER TABLE "schools" ADD COLUMN     "division" INT4;

-- AlterTable
ALTER TABLE "teams" ADD COLUMN     "division" INT4;

-- CreateIndex
CREATE INDEX "schools_division_idx" ON "schools"("division");

-- CreateIndex
CREATE INDEX "teams_division_idx" ON "teams"("division");
