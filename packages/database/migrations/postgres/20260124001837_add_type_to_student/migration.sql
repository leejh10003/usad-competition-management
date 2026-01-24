/*
  Warnings:

  - Added the required column `type` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StudentType" AS ENUM ('individual', 'team');

-- AlterTable
ALTER TABLE "students" ADD COLUMN     "type" "StudentType" NOT NULL;
