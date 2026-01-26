-- CreateIndex
CREATE INDEX "competitions_state_city_street_address_zip_code_idx" ON "competitions"("state", "city", "street_address", "zip_code");
