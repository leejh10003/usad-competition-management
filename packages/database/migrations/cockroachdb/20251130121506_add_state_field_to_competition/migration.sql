-- AlterTable
ALTER TABLE "competitions" ADD COLUMN     "state" STRING;

-- CreateIndex
CREATE INDEX "competitions_state_idx" ON "competitions"("state");
