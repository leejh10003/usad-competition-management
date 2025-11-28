/*
  Warnings:

  - Added the required column `competition_id` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ends_at` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `competition_id` to the `schools` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "events" ADD COLUMN     "competition_id" UUID NOT NULL;
ALTER TABLE "events" ADD COLUMN     "ends_at" TIMESTAMPTZ(3) NOT NULL;

-- AlterTable
ALTER TABLE "schools" ADD COLUMN     "competition_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "students" ADD COLUMN     "competition_id" UUID;

-- CreateTable
CREATE TABLE "competitions" (
    "id" UUID NOT NULL,
    "name" STRING NOT NULL,
    "starts_at" TIMESTAMPTZ(3) NOT NULL,
    "ends_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "competitions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "schools" ADD CONSTRAINT "schools_competition_id_fkey" FOREIGN KEY ("competition_id") REFERENCES "competitions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_competition_id_fkey" FOREIGN KEY ("competition_id") REFERENCES "competitions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_competition_id_fkey" FOREIGN KEY ("competition_id") REFERENCES "competitions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
