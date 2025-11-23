-- DropIndex
DROP INDEX "students_last_name_first_name_idx";

-- DropIndex
DROP INDEX "students_school_id_division_idx";

-- DropIndex
DROP INDEX "students_school_id_signature_idx";

-- DropIndex
DROP INDEX "students_signature_idx";

-- DropIndex
DROP INDEX "students_team_id_signature_idx";

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
