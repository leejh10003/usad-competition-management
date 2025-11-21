-- CreateEnum
CREATE TYPE "Division" AS ENUM ('H', 'S', 'V');

-- CreateTable
CREATE TABLE "schools" (
    "id" UUID NOT NULL,
    "external_school_id" STRING,
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
    "external_team_id" STRING,
    "school_id" UUID NOT NULL,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team_coach_relationships" (
    "team_id" UUID NOT NULL,
    "coach_id" UUID NOT NULL,

    CONSTRAINT "team_coach_relationships_pkey" PRIMARY KEY ("team_id","coach_id")
);

-- CreateTable
CREATE TABLE "coaches" (
    "id" UUID NOT NULL,
    "external_coach_id" STRING,
    "first_name" STRING NOT NULL,
    "last_name" STRING NOT NULL,
    "email" STRING NOT NULL,
    "phone" STRING,
    "signature" STRING,
    "school_id" UUID NOT NULL,

    CONSTRAINT "coaches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" UUID NOT NULL,
    "external_student_id" STRING,
    "division" "Division" NOT NULL,
    "gpa" FLOAT8,
    "first_name" STRING NOT NULL,
    "last_name" STRING NOT NULL,
    "usad_pin" STRING,
    "signature" STRING,
    "street_address" STRING,
    "city" STRING,
    "state" STRING,
    "zip_code" STRING,
    "team_id" UUID,
    "school_id" UUID,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" UUID NOT NULL,
    "name" STRING NOT NULL,
    "starts_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_check_ins" (
    "student_id" UUID NOT NULL,
    "event_id" UUID NOT NULL,
    "cheked_in_at" TIMESTAMPTZ(3),

    CONSTRAINT "event_check_ins_pkey" PRIMARY KEY ("student_id","event_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "schools_external_school_id_key" ON "schools"("external_school_id");

-- CreateIndex
CREATE UNIQUE INDEX "schools_primary_coach_id_key" ON "schools"("primary_coach_id");

-- CreateIndex
CREATE UNIQUE INDEX "schools_email_domain_key" ON "schools"("email_domain");

-- CreateIndex
CREATE INDEX "schools_state_city_idx" ON "schools"("state", "city");

-- CreateIndex
CREATE INDEX "schools_name_idx" ON "schools"("name");

-- CreateIndex
CREATE INDEX "teams_school_id_idx" ON "teams"("school_id");

-- CreateIndex
CREATE INDEX "team_coach_relationships_coach_id_idx" ON "team_coach_relationships"("coach_id");

-- CreateIndex
CREATE UNIQUE INDEX "coaches_external_coach_id_key" ON "coaches"("external_coach_id");

-- CreateIndex
CREATE UNIQUE INDEX "coaches_email_key" ON "coaches"("email");

-- CreateIndex
CREATE INDEX "coaches_school_id_idx" ON "coaches"("school_id");

-- CreateIndex
CREATE INDEX "coaches_last_name_first_name_idx" ON "coaches"("last_name", "first_name");

-- CreateIndex
CREATE UNIQUE INDEX "students_external_student_id_key" ON "students"("external_student_id");

-- CreateIndex
CREATE INDEX "students_team_id_idx" ON "students"("team_id");

-- CreateIndex
CREATE INDEX "students_school_id_idx" ON "students"("school_id");

-- CreateIndex
CREATE INDEX "students_last_name_first_name_idx" ON "students"("last_name", "first_name");

-- CreateIndex
CREATE INDEX "students_school_id_division_idx" ON "students"("school_id", "division");

-- CreateIndex
CREATE INDEX "events_starts_at_idx" ON "events"("starts_at");

-- CreateIndex
CREATE INDEX "event_check_ins_event_id_idx" ON "event_check_ins"("event_id");

-- AddForeignKey
ALTER TABLE "schools" ADD CONSTRAINT "schools_primary_coach_id_fkey" FOREIGN KEY ("primary_coach_id") REFERENCES "coaches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_coach_relationships" ADD CONSTRAINT "team_coach_relationships_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_coach_relationships" ADD CONSTRAINT "team_coach_relationships_coach_id_fkey" FOREIGN KEY ("coach_id") REFERENCES "coaches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coaches" ADD CONSTRAINT "coaches_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "schools"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_check_ins" ADD CONSTRAINT "event_check_ins_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_check_ins" ADD CONSTRAINT "event_check_ins_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
