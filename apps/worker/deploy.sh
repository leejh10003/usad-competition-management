RUN_RESULT="$(pnpm wrangler deploy --outdir dist --minify)"
echo "${RUN_RESULT}"
OUTPUT="$(echo $RUN_RESULT | grep -o 'https://[^ ]*')"
echo "${OUTPUT}"
sed -i ''  "s|PUBLIC_WORKER_API_HOST=.*|PUBLIC_WORKER_API_HOST=${OUTPUT}|g" ../field-ops/.env
sed -i ''  "s|PUBLIC_WORKER_API_HOST=.*|PUBLIC_WORKER_API_HOST=${OUTPUT}|g" ../dashboard/.env
sed -i ''  "s|PUBLIC_WORKER_API_HOST=.*|PUBLIC_WORKER_API_HOST=${OUTPUT}|g" ../registration/.env