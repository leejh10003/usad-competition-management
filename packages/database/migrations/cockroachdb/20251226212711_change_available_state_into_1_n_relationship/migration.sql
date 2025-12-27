/*
  Warnings:

  - You are about to drop the column `state` on the `competitions` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "competitions_state_idx";

-- AlterTable
ALTER TABLE "competitions" DROP COLUMN "state";

-- CreateTable
CREATE TABLE "competition_available_states" (
    "Competition" UUID NOT NULL,
    "state" "State" NOT NULL,

    CONSTRAINT "competition_available_states_pkey" PRIMARY KEY ("Competition","state")
);

-- AddForeignKey
ALTER TABLE "competition_available_states" ADD CONSTRAINT "competition_available_states_Competition_fkey" FOREIGN KEY ("Competition") REFERENCES "competitions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
