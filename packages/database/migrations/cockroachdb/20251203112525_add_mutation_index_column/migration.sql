/*
  Warnings:

  - Added the required column `mutation_index` to the `coaches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mutation_index` to the `competitions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mutation_index` to the `event_check_ins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mutation_index` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mutation_index` to the `schools` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mutation_index` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mutation_index` to the `teams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "coaches" ADD COLUMN     "mutation_index" INT4 NOT NULL;

-- AlterTable
ALTER TABLE "competitions" ADD COLUMN     "mutation_index" INT4 NOT NULL;

-- AlterTable
ALTER TABLE "event_check_ins" ADD COLUMN     "mutation_index" INT4 NOT NULL;

-- AlterTable
ALTER TABLE "events" ADD COLUMN     "mutation_index" INT4 NOT NULL;

-- AlterTable
ALTER TABLE "schools" ADD COLUMN     "mutation_index" INT4 NOT NULL;

-- AlterTable
ALTER TABLE "students" ADD COLUMN     "mutation_index" INT4 NOT NULL;

-- AlterTable
ALTER TABLE "teams" ADD COLUMN     "mutation_index" INT4 NOT NULL;
