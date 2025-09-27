import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import * as path from "path";
import * as fs from "fs";

// 1. Cloudflare Provider와 WorkerScript 클래스를 가져옴
//import { CloudflareProvider } from "./.gen/providers/cloudflare/provider";
//import { WorkerScript } from "./.gen/providers/cloudflare/worker-script";
import { CloudflareProvider } from "@cdktf/provider-cloudflare/lib/provider";
import { WorkersScript } from "@cdktf/provider-cloudflare/lib/workers-script";

// --- 환경 변수 또는 .tfvars 파일에서 값을 가져오도록 설정 ---
// 여기서는 간단하게 하드코딩하지만, 실제로는 TerraformVariable을 사용해야 해.
const CLOUDFLARE_ACCOUNT_ID = "YOUR_CLOUDFLARE_ACCOUNT_ID";
const CLOUDFLARE_API_TOKEN = "YOUR_CLOUDFLARE_API_TOKEN";

class MyUsadPocStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // 2. Cloudflare Provider를 스택에 등록
    new CloudflareProvider(this, "cloudflare", {
      apiToken: CLOUDFLARE_API_TOKEN,
    });

    // 3. 빌드된 워커 스크립트 파일의 경로를 계산
    const workerScriptPath = path.join(__dirname, '..', 'worker', 'dist', 'index.js');
    
    // 4. 파일 내용을 읽어옴
    const workerScriptContent = fs.readFileSync(workerScriptPath, "utf-8");

    // 5. WorkerScript 리소스를 TypeScript 코드로 정의
    new WorkersScript(this, "logger-worker-script", {
      accountId: CLOUDFLARE_ACCOUNT_ID,
      scriptName: "usad-competition-management-backend", // wrangler.toml의 name과 일치
      content: workerScriptContent,
    });
  }
}

const app = new App();
new MyUsadPocStack(app, "usad-poc-infra");
app.synth();