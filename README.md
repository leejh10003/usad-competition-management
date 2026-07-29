# USAD Competition Management

A collection of web applications for managing United States Academic Decathlon competitions, from registration and roster administration to on-site check-in.

> [!NOTE]
> This project is under active development. Features, data models, and deployment workflows may change.

## Applications

| Application | Path | Purpose |
| --- | --- | --- |
| Dashboard | `apps/dashboard` | Manage competitions, schools, teams, coaches, students, events, and check-in records. |
| Registration | `apps/registration` | Guide schools and individual participants through competition registration. |
| Field Ops | `apps/field-ops` | Support on-site workflows, including QR-code scanning, team check-in, event check-in, and signature capture. |
| API Worker | `apps/worker` | Expose the shared REST API and file storage endpoints through a Cloudflare Worker. |

The repository also contains shared packages for the Prisma data model, generated Zod schemas, API request helpers, and common enums.

## Architecture

```mermaid
flowchart LR
    Dashboard["Dashboard"]
    Registration["Registration"]
    FieldOps["Field Ops"]
    Worker["Hono API<br/>Cloudflare Worker"]
    R2["Cloudflare R2"]
    Hyperdrive["Cloudflare Hyperdrive"]
    Postgres["PostgreSQL / Neon"]

    Dashboard --> Worker
    Registration --> Worker
    FieldOps --> Worker
    Worker --> R2
    Worker --> Hyperdrive
    Hyperdrive --> Postgres
```

The three frontends are statically built SvelteKit applications. They communicate with a Hono API deployed to Cloudflare Workers. Prisma provides typed access to PostgreSQL through Cloudflare Hyperdrive, while uploaded files are stored in R2. CDK for Terraform provisions the Cloudflare, Neon, and Vercel resources.

## Technology

- Svelte 5, SvelteKit, Vite, Tailwind CSS, and Skeleton
- TypeScript and Zod
- Hono and Cloudflare Workers
- Prisma and PostgreSQL
- Cloudflare Hyperdrive and R2
- Neon
- CDK for Terraform
- pnpm workspaces

## Repository Structure

```text
.
├── apps/
│   ├── dashboard/       # Competition administration UI
│   ├── registration/    # Participant registration UI
│   ├── field-ops/       # Mobile-oriented on-site operations UI
│   └── worker/          # Hono REST API
├── packages/
│   ├── api-request/     # Shared typed API request helpers
│   ├── database/        # Prisma models, migrations, and generated schemas
│   └── enums/           # Shared application enums
├── infra/               # CDKTF infrastructure definitions
├── pnpm-workspace.yaml
└── tsconfig.base.json
```

## Prerequisites

- Node.js 20.19 or newer
- pnpm 10
- Docker, if you want to run PostgreSQL locally
- Cloudflare, Neon, and Vercel credentials for infrastructure deployment

## Getting Started

Install the workspace dependencies:

```bash
pnpm install
```

### Start a frontend

Each frontend expects the API base URL in its own `.env` file:

```dotenv
PUBLIC_WORKER_API_HOST=http://localhost:8787
```

The files are located at:

- `apps/dashboard/.env`
- `apps/registration/.env`
- `apps/field-ops/.env`

Start one application from the repository root:

```bash
pnpm --filter dashboard dev
pnpm --filter registration dev
pnpm --filter field-ops dev
```

Vite uses port `5173` by default. When running multiple frontends at once, assign a different port to each additional application:

```bash
pnpm --filter registration dev -- --port 5174
pnpm --filter field-ops dev -- --port 5175
```

### Start the local database

The database package includes a PostgreSQL 17 Docker Compose configuration:

```bash
pnpm --filter database db:container:local
```

Create `packages/database/.env.local`:

```dotenv
DATABASE_URL=postgresql://testuser:testpass@localhost:5432/testdb
```

Apply the local migrations:

```bash
pnpm --filter database db:migrate:local
```

Useful database commands:

```bash
# Regenerate the Prisma client
pnpm --filter database db:generate

# Regenerate the Prisma client and Zod schemas
pnpm --filter database db:zod:generate

# Open Prisma Studio
pnpm --filter database db:studio:local
```

### Run the API Worker

The Worker requires a generated `apps/worker/wrangler.toml` with valid Hyperdrive and R2 bindings. Once those resources are configured, start Wrangler from the Worker package:

```bash
pnpm --filter worker exec wrangler dev
```

The REST API is mounted under `/api` and includes resources for competitions, schools, teams, coaches, students, events, event check-ins, and files.

## Quality Checks

Run checks for an individual frontend:

```bash
pnpm --filter dashboard check
pnpm --filter dashboard lint
pnpm --filter dashboard build
```

Replace `dashboard` with `registration` or `field-ops` to check another application.

Build the Worker without deploying it:

```bash
pnpm --filter worker build
```

## Infrastructure and Deployment

Infrastructure is managed separately from the pnpm workspace and has its own npm lockfile:

```bash
cd infra
npm install
```

Create `infra/.env` with the required provider credentials:

```dotenv
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_API_TOKEN=
VERCEL_API_TOKEN=
NEON_API_KEY=
NEON_ORG_ID=
```

Then generate provider bindings, synthesize the Terraform configuration, and deploy:

```bash
npm run get
npm run synth
npm run deploy
```

The infrastructure stack provisions:

- a Neon PostgreSQL project
- Cloudflare Hyperdrive
- a Cloudflare R2 bucket
- a Cloudflare Worker
- Vercel projects for the three frontends
- the Worker's `wrangler.toml` binding configuration

After the infrastructure exists, deploy the Worker from `apps/worker`:

```bash
pnpm deploy
```

The deployment script discovers the Vercel frontend URLs, updates the Worker's allowed CORS origins, deploys the Worker, and writes its public URL to each frontend `.env` file.

## Data Model

The core model covers:

- competitions and their available states
- schools, teams, coaches, and students
- team-to-coach relationships
- academic events
- event check-ins

Prisma models are assembled from the partial schema files in `packages/database/src/prisma/partials`. PostgreSQL migrations live in `packages/database/migrations/postgres`.

## Contributing

When making a change:

1. Keep application-specific code in its corresponding `apps` directory.
2. Put reusable schemas, enums, and request logic in the appropriate shared package.
3. Run the relevant `check`, `lint`, and `build` commands before opening a pull request.
4. Include database migrations when changing the Prisma data model.

## License

No license has been specified for this repository.
