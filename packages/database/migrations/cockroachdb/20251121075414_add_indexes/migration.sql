-- CreateIndex
CREATE INDEX "coaches_school_id_signature_idx" ON "coaches"("school_id", "signature");

-- CreateIndex
CREATE INDEX "coaches_signature_idx" ON "coaches"("signature");

-- CreateIndex
CREATE INDEX "event_check_ins_cheked_in_at_idx" ON "event_check_ins"("cheked_in_at");

-- CreateIndex
CREATE INDEX "event_check_ins_event_id_cheked_in_at_idx" ON "event_check_ins"("event_id", "cheked_in_at");

-- CreateIndex
CREATE INDEX "students_school_id_signature_idx" ON "students"("school_id", "signature");

-- CreateIndex
CREATE INDEX "students_team_id_signature_idx" ON "students"("team_id", "signature");

-- CreateIndex
CREATE INDEX "students_signature_idx" ON "students"("signature");
