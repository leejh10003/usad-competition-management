/*
  Warnings:

  - The values [Eco] on the enum `NonRelativeEvents` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
ALTER TYPE "NonRelativeEvents" ADD VALUE 'Economics';
ALTER TYPE "NonRelativeEvents"DROP VALUE 'Eco';
