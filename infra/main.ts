import { Construct } from "constructs";
import { App, TerraformStack, Fn } from "cdktf";
import * as path from "path";
import * as dotenv from 'dotenv';
import { CloudflareProvider } from "@cdktf/provider-cloudflare/lib/provider";
import { Worker } from "@cdktf/provider-cloudflare/lib/worker";
import { VercelProvider } from './.gen/providers/vercel/provider';
import { Project as VercelProject } from './.gen/providers/vercel/project';
import { D1Database } from '@cdktf/provider-cloudflare/lib/d1-database';
import { LocalProvider } from '@cdktf/provider-local/lib/provider';
import { File } from '@cdktf/provider-local/lib/file';

dotenv.config();

// --- 환경 변수 또는 .tfvars 파일에서 값을 가져오도록 설정 ---
// 여기서는 간단하게 하드코딩하지만, 실제로는 TerraformVariable을 사용해야 해.
const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID as string;
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN as string;
const VERCEL_API_TOKEN = process.env.VERCEL_API_TOKEN as string;

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

    const d1Db = new D1Database(this, "usad-main-db-resource", {
      accountId: CLOUDFLARE_ACCOUNT_ID,
      name: "usad-main-db",
      readReplication: {
        mode: "disabled"
      }
    });
    new Worker(this, "usad-worker", {
      accountId: CLOUDFLARE_ACCOUNT_ID,
      name: "usad-competition-management-backend",
      subdomain: {
        enabled: true,
      }
    });

    new VercelProject(this, "qr-scanner", {
      name: "qr-scanner",
      framework: "vite",
      rootDirectory: "apps/qr-scanner",
      gitRepository: {
        type: "github",
        repo: "leejh10003/usad-competition-management",
      },
      buildCommand: "pnpm build",
      installCommand: "pnpm install",
      outputDirectory: "dist",
    });
    new File(this, "wrangler-config-file", {
      content: Fn.templatefile(
        path.join(__dirname, '..', 'apps', 'worker', 'wrangler.toml.tftpl'),
        {
          database_id: d1Db.id
        }
      ),
      filename: path.join(__dirname, '..', 'apps', 'worker', 'wrangler.toml'),
    });
  }
}

const app = new App();
new MyUsadPocStack(app, "usad-competition-management-infra");
app.synth();