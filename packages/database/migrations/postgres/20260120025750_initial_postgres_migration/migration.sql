-- CreateEnum
CREATE TYPE "Division" AS ENUM ('H', 'S', 'V');

-- CreateEnum
CREATE TYPE "NonRelativeEvents" AS ENUM ('Math', 'Economics', 'Science', 'Social Science', 'Music', 'Art', 'Language', 'Essay', 'Super Quiz');

-- CreateEnum
CREATE TYPE "RelativeEvents" AS ENUM ('Speech', 'Interview');

-- CreateEnum
CREATE TYPE "State" AS ENUM ('AA', 'AE', 'AL', 'AK', 'AP', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY');

-- CreateTable
CREATE TABLE "schools" (
    "id" UUID NOT NULL,
    "external_school_id" TEXT,
    "name" TEXT NOT NULL,
    "is_virtual" BOOLEAN NOT NULL DEFAULT false,
    "street_address" TEXT,
    "city" TEXT,
    "state" "State",
    "zip_code" TEXT,
    "phone" TEXT,
    "principal_name" TEXT,
    "principal_email" TEXT,
    "objective_score" DOUBLE PRECISION,
    "subjective_score" DOUBLE PRECISION,
    "primary_coach_id" UUID,
    "email_domain" TEXT,
    "division" INTEGER,
    "competition_id" UUID NOT NULL,
    "mutation_index" INTEGER NOT NULL,

    CONSTRAINT "schools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teams" (
    "id" UUID NOT NULL,
    "external_team_id" TEXT,
    "school_id" UUID NOT NULL,
    "division" INTEGER,
    "objective_score" DOUBLE PRECISION,
    "subjective_score" DOUBLE PRECISION,
    "mutation_index" INTEGER NOT NULL,

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
    "external_coach_id" TEXT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "signature" TEXT,
    "mutation_index" INTEGER NOT NULL,
    "school_id" UUID NOT NULL,

    CONSTRAINT "coaches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" UUID NOT NULL,
    "external_student_id" TEXT,
    "division" "Division" NOT NULL,
    "gpa" DOUBLE PRECISION,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "usad_pin" TEXT,
    "signature" TEXT,
    "attachment_on_registering" TEXT,
    "street_address" TEXT,
    "city" TEXT,
    "state" "State",
    "zip_code" TEXT,
    "guardian_first_name" TEXT,
    "guardian_last_name" TEXT,
    "guardian_phone" TEXT,
    "guardian_email" TEXT,
    "mutation_index" INTEGER NOT NULL,
    "objective_score" DOUBLE PRECISION,
    "subjective_score" DOUBLE PRECISION,
    "team_id" UUID,
    "school_id" UUID,
    "competition_id" UUID,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "competitions" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "starts_at" TIMESTAMPTZ(3) NOT NULL,
    "ends_at" TIMESTAMPTZ(3) NOT NULL,
    "mutation_index" INTEGER NOT NULL,
    "round" INTEGER NOT NULL,
    "non_relative_events" "NonRelativeEvents"[],

    CONSTRAINT "competitions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "competition_available_states" (
    "Competition" UUID NOT NULL,
    "state" "State" NOT NULL,

    CONSTRAINT "competition_available_states_pkey" PRIMARY KEY ("Competition","state")
);

-- CreateTable
CREATE TABLE "events" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "starts_at" TIMESTAMPTZ(3) NOT NULL,
    "ends_at" TIMESTAMPTZ(3) NOT NULL,
    "competition_id" UUID NOT NULL,
    "mutation_index" INTEGER NOT NULL,
    "type" "RelativeEvents" NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_check_ins" (
    "student_id" UUID NOT NULL,
    "event_id" UUID NOT NULL,
    "cheked_in_at" TIMESTAMPTZ(3),
    "mutation_index" INTEGER NOT NULL,

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
CREATE INDEX "schools_division_idx" ON "schools"("division");

-- CreateIndex
CREATE INDEX "schools_name_idx" ON "schools"("name");

-- CreateIndex
CREATE INDEX "schools_competition_id_idx" ON "schools"("competition_id");

-- CreateIndex
CREATE INDEX "teams_school_id_idx" ON "teams"("school_id");

-- CreateIndex
CREATE INDEX "teams_division_idx" ON "teams"("division");

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
CREATE INDEX "coaches_school_id_signature_idx" ON "coaches"("school_id", "signature");

-- CreateIndex
CREATE INDEX "coaches_signature_idx" ON "coaches"("signature");

-- CreateIndex
CREATE UNIQUE INDEX "students_external_student_id_key" ON "students"("external_student_id");

-- CreateIndex
CREATE INDEX "students_team_id_idx" ON "students"("team_id");

-- CreateIndex
CREATE INDEX "students_school_id_idx" ON "students"("school_id");

-- CreateIndex
CREATE INDEX "students_id_external_student_id_first_name_last_name_idx" ON "students"("id", "external_student_id", "first_name", "last_name");

-- CreateIndex
CREATE INDEX "students_id_external_student_id_school_id_division_idx" ON "students"("id", "external_student_id", "school_id", "division");

-- CreateIndex
CREATE INDEX "students_id_external_student_id_school_id_signature_idx" ON "students"("id", "external_student_id", "school_id", "signature");

-- CreateIndex
CREATE INDEX "students_id_external_student_id_team_id_signature_idx" ON "students"("id", "external_student_id", "team_id", "signature");

-- CreateIndex
CREATE INDEX "students_id_external_student_id_signature_idx" ON "students"("id", "external_student_id", "signature");

-- CreateIndex
CREATE INDEX "students_competition_id_idx" ON "students"("competition_id");

-- CreateIndex
CREATE INDEX "competitions_starts_at_idx" ON "competitions"("starts_at");

-- CreateIndex
CREATE INDEX "competitions_ends_at_idx" ON "competitions"("ends_at");

-- CreateIndex
CREATE INDEX "competitions_name_idx" ON "competitions"("name");

-- CreateIndex
CREATE INDEX "competitions_round_idx" ON "competitions"("round");

-- CreateIndex
CREATE INDEX "competitions_non_relative_events_idx" ON "competitions"("non_relative_events");

-- CreateIndex
CREATE INDEX "events_starts_at_idx" ON "events"("starts_at");

-- CreateIndex
CREATE INDEX "events_competition_id_idx" ON "events"("competition_id");

-- CreateIndex
CREATE INDEX "events_type_idx" ON "events"("type");

-- CreateIndex
CREATE INDEX "event_check_ins_event_id_idx" ON "event_check_ins"("event_id");

-- CreateIndex
CREATE INDEX "event_check_ins_cheked_in_at_idx" ON "event_check_ins"("cheked_in_at");

-- CreateIndex
CREATE INDEX "event_check_ins_event_id_cheked_in_at_idx" ON "event_check_ins"("event_id", "cheked_in_at");

-- AddForeignKey
ALTER TABLE "schools" ADD CONSTRAINT "schools_primary_coach_id_fkey" FOREIGN KEY ("primary_coach_id") REFERENCES "coaches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schools" ADD CONSTRAINT "schools_competition_id_fkey" FOREIGN KEY ("competition_id") REFERENCES "competitions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "students" ADD CONSTRAINT "students_competition_id_fkey" FOREIGN KEY ("competition_id") REFERENCES "competitions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "competition_available_states" ADD CONSTRAINT "competition_available_states_Competition_fkey" FOREIGN KEY ("Competition") REFERENCES "competitions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_competition_id_fkey" FOREIGN KEY ("competition_id") REFERENCES "competitions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_check_ins" ADD CONSTRAINT "event_check_ins_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_check_ins" ADD CONSTRAINT "event_check_ins_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
