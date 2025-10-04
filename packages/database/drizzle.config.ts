import type { Config } from 'drizzle-kit';

export default {
  // 스키마 파일의 위치
  schema: './src/schema.ts',
  // 생성될 마이그레이션 SQL 파일들을 저장할 폴더
  out: './migrations',
  // Cloudflare D1을 위한 드라이버 지정
  dialect: 'sqlite',
  driver: 'd1-http'
} satisfies Config;