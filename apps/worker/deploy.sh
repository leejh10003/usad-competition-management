VERCEL_RESULT="$(pnpm vercel project list 2>&1)"
DASHBOARD_URL="$(echo $VERCEL_RESULT | grep -o 'https:\/\/dashboard[a-z|A-Z|0-9|\-]*.vercel.app')"
FIELD_OPS_URL="$(echo $VERCEL_RESULT | grep -o 'https:\/\/field-ops[a-z|A-Z|0-9|\-]*.vercel.app')"
REGISTRATION_URL="$(echo $VERCEL_RESULT | grep -o 'https:\/\/registration[a-z|A-Z|0-9|\-]*.vercel.app')"
echo $VERCEL_RESULT
echo $DASHBOARD_URL $FIELD_OPS_URL $REGISTRATION_URL
sed -i ''  "s|DASHBOARD_URL=.*|DASHBOARD_URL=\"${DASHBOARD_URL}\"|g" ./wrangler.toml.tftpl
sed -i ''  "s|DASHBOARD_URL=.*|DASHBOARD_URL=\"${DASHBOARD_URL}\"|g" ./wrangler.toml
sed -i ''  "s|FIELD_OPS_URL=.*|FIELD_OPS_URL=\"${FIELD_OPS_URL}\"|g" ./wrangler.toml.tftpl
sed -i ''  "s|FIELD_OPS_URL=.*|FIELD_OPS_URL=\"${FIELD_OPS_URL}\"|g" ./wrangler.toml
sed -i ''  "s|REGISTRATION_URL=.*|REGISTRATION_URL=\"${REGISTRATION_URL}\"|g" ./wrangler.toml.tftpl
sed -i ''  "s|REGISTRATION_URL=.*|REGISTRATION_URL=\"${REGISTRATION_URL}\"|g" ./wrangler.toml
pnpm wrangler types
RUN_RESULT="$(pnpm wrangler deploy --outdir dist --minify)"
echo "${RUN_RESULT}"
OUTPUT="$(echo $RUN_RESULT | grep -o 'https:\/\/usad-competition-management-backend.[a-z|A-Z|0-9|\-]*.workers.dev')"
sed -i ''  "s|PUBLIC_WORKER_API_HOST=.*|PUBLIC_WORKER_API_HOST=${OUTPUT}|g" ../field-ops/.env
sed -i ''  "s|PUBLIC_WORKER_API_HOST=.*|PUBLIC_WORKER_API_HOST=${OUTPUT}|g" ../dashboard/.env
sed -i ''  "s|PUBLIC_WORKER_API_HOST=.*|PUBLIC_WORKER_API_HOST=${OUTPUT}|g" ../registration/.env