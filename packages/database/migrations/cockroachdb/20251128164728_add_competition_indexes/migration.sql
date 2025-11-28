-- CreateIndex
CREATE INDEX "competitions_starts_at_idx" ON "competitions"("starts_at");

-- CreateIndex
CREATE INDEX "competitions_ends_at_idx" ON "competitions"("ends_at");

-- CreateIndex
CREATE INDEX "competitions_name_idx" ON "competitions"("name");

-- CreateIndex
CREATE INDEX "events_competition_id_idx" ON "events"("competition_id");

-- CreateIndex
CREATE INDEX "schools_competition_id_idx" ON "schools"("competition_id");

-- CreateIndex
CREATE INDEX "students_competition_id_idx" ON "students"("competition_id");
