import { Construct } from "constructs";
import { App, TerraformStack, Fn } from "cdktf";
import * as path from "path";
import * as dotenv from 'dotenv';
import { CloudflareProvider } from "@cdktf/provider-cloudflare/lib/provider";
import { Worker } from "@cdktf/provider-cloudflare/lib/worker";
import { VercelProvider } from './.gen/providers/vercel/provider';
import { Project as VercelProject } from './.gen/providers/vercel/project';
import { LocalProvider } from '@cdktf/provider-local/lib/provider';
import { File } from '@cdktf/provider-local/lib/file';
import { HyperdriveConfig } from '@cdktf/provider-cloudflare/lib/hyperdrive-config';
import { R2Bucket } from '@cdktf/provider-cloudflare/lib/r2-bucket';
import { NeonProvider } from './.gen/providers/neon/provider';
import { Project as NeonProject } from './.gen/providers/neon/project';
//import { Endpoint as NeonEndpoint } from './.gen/providers/neon/endpoint';
//import { Role as NeonRole } from './.gen/providers/neon/role';
//import { Database as NeonDatabase } from './.gen/providers/neon/database';
//import { CockroachProvider } from './.gen/providers/cockroach/provider';

dotenv.config();

// --- 환경 변수 또는 .tfvars 파일에서 값을 가져오도록 설정 ---
// 여기서는 간단하게 하드코딩하지만, 실제로는 TerraformVariable을 사용해야 해.
const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID as string;
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN as string;
const VERCEL_API_TOKEN = process.env.VERCEL_API_TOKEN as string;
const NEON_API_KEY = process.env.NEON_API_KEY as string;
//const COCKROACH_API_KEY = process.env.COCKROACH_API_KEY as string;
const NEON_ORG_ID = process.env.NEON_ORG_ID as string;
//const COCKROACH_SQL_USERNAME = process.env.COCKROACH_SQL_USERNAME as string;
//const COCKROACH_SQL_USER_PASSWORD = process.env.COCKROACH_SQL_USER_PASSWORD as string;

class MyUsadPocStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // 2. Cloudflare Provider를 스택에 등록
    new CloudflareProvider(this, "cloudflare", {
      apiToken: CLOUDFLARE_API_TOKEN,
    });
    new VercelProvider(this, "vercel", {
      apiToken: VERCEL_API_TOKEN,
    });
    new LocalProvider(this, "local", {});
    new R2Bucket(this, 'usad-bucket', {
      name: 'usad-bucket',
      accountId: CLOUDFLARE_ACCOUNT_ID,
      storageClass: 'Standard',
      location: 'wnam'
    });
    const neonProvider = new NeonProvider(this, "usad-neon-provider", {
      apiKey: NEON_API_KEY,
    })
    /*new CockroachProvider(this, "cockroachdb", {
      apikey: COCKROACH_API_KEY,
    });*/
    const neonProject = new NeonProject(this, "usad-neon-project", {
      provider: neonProvider,
      orgId: NEON_ORG_ID,
      name: "usad-competition-management-neon-project",
      historyRetentionSeconds: 6 * 60 * 60, // 6 hours
    });
    const hyperdrive = new HyperdriveConfig(this, "usad-hyperdrive", {
      name: "usad-hyperdrive",
      accountId: CLOUDFLARE_ACCOUNT_ID,
      origin: {
        database: neonProject.databaseName,
        host: neonProject.databaseHost,
        password: neonProject.databasePassword,
        port: neonProject.connection?.port ?? 5432,
        scheme: "postgresql",
        user: neonProject.databaseUser,
      },
      caching: {
        disabled: false,
      },
    });
    new Worker(this, "usad-worker", {
      accountId: CLOUDFLARE_ACCOUNT_ID,
      name: "usad-competition-management-backend",
      subdomain: {
        enabled: true,
      }
    });
    new VercelProject(this, "field-ops", {
      name: "field-ops",
      framework: "vite",
      rootDirectory: "apps/field-ops",
      gitRepository: {
        type: "github",
        repo: "leejh10003/usad-competition-management",
      },
      buildCommand: "pnpm prepare && pnpm build",
      installCommand: "pnpm install",
      outputDirectory: "build",
    });
    new VercelProject(this, "dashboard", {
      name: "dashboard",
      framework: "vite",
      rootDirectory: "apps/dashboard",
      gitRepository: {
        type: "github",
        repo: "leejh10003/usad-competition-management",
      },
      buildCommand: "pnpm prepare && pnpm build",
      installCommand: "pnpm install",
      outputDirectory: "build",
    });
    new VercelProject(this, "registration", {
      name: "registration",
      framework: "vite",
      rootDirectory: "apps/registration",
      gitRepository: {
        type: "github",
        repo: "leejh10003/usad-competition-management",
      },
      buildCommand: "pnpm prepare && pnpm build",
      installCommand: "pnpm install",
      outputDirectory: "build",
    });
    new File(this, "wrangler-config-file", {
      content: Fn.templatefile(
        path.join(__dirname, '..', 'apps', 'worker', 'wrangler.toml.tftpl'),
        {
          hyperdrive_id: hyperdrive.id,
        }
      ),
      filename: path.join(__dirname, '..', 'apps', 'worker', 'wrangler.toml'),
    });
  }
}

const app = new App();
new MyUsadPocStack(app, "usad-competition-management-infra");
app.synth();