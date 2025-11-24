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
import { Cluster as CockroachCluster } from './.gen/providers/cockroach/cluster';
import { CockroachProvider } from './.gen/providers/cockroach/provider';
import { DataCockroachConnectionString } from './.gen/providers/cockroach/data-cockroach-connection-string';
import { SqlUser } from './.gen/providers/cockroach/sql-user';

dotenv.config();

// --- 환경 변수 또는 .tfvars 파일에서 값을 가져오도록 설정 ---
// 여기서는 간단하게 하드코딩하지만, 실제로는 TerraformVariable을 사용해야 해.
const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID as string;
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN as string;
const VERCEL_API_TOKEN = process.env.VERCEL_API_TOKEN as string;
const COCKROACH_API_KEY = process.env.COCKROACH_API_KEY as string;
const COCKROACH_SQL_USERNAME = process.env.COCKROACH_SQL_USERNAME as string;
const COCKROACH_SQL_USER_PASSWORD = process.env.COCKROACH_SQL_USER_PASSWORD as string;

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
    const cockroachProvider = new CockroachProvider(this, "cockroachdb", {
      apikey: COCKROACH_API_KEY,
    });
    const cockroachCluster = new CockroachCluster(this, "usad-cockroachdb-cluster", {
      name: "usad-cockroachdb-cluster",
      provider: cockroachProvider,
      cloudProvider: "GCP",
      plan: "BASIC",
      regions: [{
        name: "us-central1",
      }],
      serverless: {
        usageLimits: {
          requestUnitLimit: 50000000,
          storageMibLimit: 9536,
        }
      },
    });
    const cockroachUser = new SqlUser(this, "cockroach-sql-user", {
      password: COCKROACH_SQL_USER_PASSWORD,
      clusterId: cockroachCluster.id,
      name: COCKROACH_SQL_USERNAME,
    });
    const connectionString = new DataCockroachConnectionString(this, "cockroach-connection-string", {
      id: cockroachCluster.id,
      sqlUser: COCKROACH_SQL_USERNAME,
      password: COCKROACH_SQL_USER_PASSWORD,
    });
    new R2Bucket(this, 'usad-bucket', {
      name: 'usad-bucket',
      accountId: CLOUDFLARE_ACCOUNT_ID,
      storageClass: 'Standard',
      location: 'wnam'
    });
    const hyperdrive = new HyperdriveConfig(this, "usad-hyperdrive", {
      name: "usad-hyperdrive",
      accountId: CLOUDFLARE_ACCOUNT_ID,
      dependsOn: [connectionString, cockroachCluster, cockroachUser],
      origin: {
        database: "postgres",
        host: connectionString.connectionParams.host,
        password: COCKROACH_SQL_USER_PASSWORD,
        port: Fn.parseint(connectionString.connectionParams.port, 10),
        scheme: "postgres",
        user: COCKROACH_SQL_USERNAME,
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