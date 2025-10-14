-- CreateEnum
CREATE TYPE "Division" AS ENUM ('H', 'S', 'V');

-- CreateEnum
CREATE TYPE "ScanType" AS ENUM ('REGISTRATION_COACH', 'REGISTRATION_CHECK_IN_COACH', 'CHECK_IN_SPEECH_STUDENT', 'EVALUATION_SPEECH_STUDENT', 'AWARDS', 'STUDENT_EVENT');

-- CreateTable
CREATE TABLE "schools" (
    "id" UUID NOT NULL,
    "external_school_id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "is_virtual" BOOL NOT NULL DEFAULT false,
    "street_address" STRING,
    "city" STRING,
    "state" STRING,
    "zip_code" STRING,
    "phone" STRING,
    "principal_name" STRING,
    "principal_email" STRING,
    "primary_coach_id" UUID,
    "email_domain" STRING,

    CONSTRAINT "schools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teams" (
    "id" UUID NOT NULL,
    "external_team_id" STRING NOT NULL,
    "school_id" UUID NOT NULL,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coaches" (
    "id" UUID NOT NULL,
    "external_coach_id" STRING NOT NULL,
    "first_name" STRING NOT NULL,
    "last_name" STRING NOT NULL,
    "email" STRING NOT NULL,
    "phone" STRING,
    "school_id" UUID NOT NULL,

    CONSTRAINT "coaches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" UUID NOT NULL,
    "external_student_id" STRING NOT NULL,
    "division" "Division" NOT NULL,
    "gpa" FLOAT8,
    "first_name" STRING NOT NULL,
    "last_name" STRING NOT NULL,
    "usad_pin" STRING,
    "team_id" UUID NOT NULL,
    "school_id" UUID NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scans" (
    "id" UUID NOT NULL,
    "type" "ScanType" NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "coach_id" UUID,
    "student_id" UUID,

    CONSTRAINT "scans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CoachToTeam" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "schools_external_school_id_key" ON "schools"("external_school_id");

-- CreateIndex
CREATE UNIQUE INDEX "schools_primary_coach_id_key" ON "schools"("primary_coach_id");

-- CreateIndex
CREATE UNIQUE INDEX "schools_email_domain_key" ON "schools"("email_domain");

-- CreateIndex
CREATE UNIQUE INDEX "teams_external_team_id_school_id_key" ON "teams"("external_team_id", "school_id");

-- CreateIndex
CREATE UNIQUE INDEX "coaches_external_coach_id_key" ON "coaches"("external_coach_id");

-- CreateIndex
CREATE UNIQUE INDEX "coaches_email_key" ON "coaches"("email");

-- CreateIndex
CREATE UNIQUE INDEX "students_external_student_id_key" ON "students"("external_student_id");

-- CreateIndex
CREATE UNIQUE INDEX "_CoachToTeam_AB_unique" ON "_CoachToTeam"("A", "B");

-- CreateIndex
CREATE INDEX "_CoachToTeam_B_index" ON "_CoachToTeam"("B");

-- AddForeignKey
ALTER TABLE "schools" ADD CONSTRAINT "schools_primary_coach_id_fkey" FOREIGN KEY ("primary_coach_id") REFERENCES "coaches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coaches" ADD CONSTRAINT "coaches_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scans" ADD CONSTRAINT "scans_coach_id_fkey" FOREIGN KEY ("coach_id") REFERENCES "coaches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scans" ADD CONSTRAINT "scans_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CoachToTeam" ADD CONSTRAINT "_CoachToTeam_A_fkey" FOREIGN KEY ("A") REFERENCES "coaches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CoachToTeam" ADD CONSTRAINT "_CoachToTeam_B_fkey" FOREIGN KEY ("B") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;
