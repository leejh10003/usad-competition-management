import { Hono } from 'hono';
import { Env } from './env';
import { PrismaClient } from 'database';
import { PrismaPg } from '@prisma/adapter-pg';

const app = new Hono<Env>();

declare module 'hono' {
  interface ContextVariableMap {
    logger: (level: 'INFO' | 'ERROR' | 'WARN', message: string, context?: string, data?: object) => void;
  }
}

// --- API 그룹 정의 ---
const api = app.basePath('/api');

app.use(async (c, next) => {
  const requestId = c.req.header('cf-request-id');
  const logBuffer: string[] = [];

  // logger 함수가 세 번째 인자로 'context'를 받도록 수정
  c.set('logger', (level, message, context, data) => {
    logBuffer.push(`${new Date().toISOString()} ${level} ${context} ${message} ${data}`);
  })
  
  try {
    await next();
  } catch (e) {
    console.error(JSON.stringify({
      level: "FATAL",
      message: "Request failed, flushing log buffer.",
      requestId,
      bufferedLogs: logBuffer,
      error: {
        message: e instanceof Error ? e.message : String(e),
        stack: e instanceof Error ? e.stack : undefined,
      }
    }, null, 2));
    c.status(500);
    return c.json({ success: false, error: "Internal Server Error", requestId });
  }
})

// --- 🧑‍🎓 학생 (Students) 관련 엔드포인트 ---
const students = api.basePath('/students');
// [목록] 모든 학생 리스트 조회 (페이지네이션, 필터링 추가 가능)
students.get('/', async (c) => {
  try {
    const adapter = new PrismaPg({connectionString: c.env.HYPERDRIVE.connectionString});
    const prisma = new PrismaClient({
      adapter
    });
    await prisma.$connect();
    await prisma.$disconnect();
    return c.json({ success: true, data: "result" });
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.stack, '\n', e.message);
    } else {
      console.error('no stack trace \n', e);
    }
    return c.json({ success: false, message: 'Failed to fetch students' }, 500);
  } 
});
// [생성] 새로운 학생 한 명 생성
students.post('/', (c) => {
  return c.json({ message: 'Create a new student' }, 201);
});
// [상세] 특정 학생 한 명의 상세 정보 조회
students.get('/:id', (c) => {
  const id = c.req.param('id');
  return c.json({ message: `Details for student ${id}` });
});
// [수정] 특정 학생 정보 업데이트
students.patch('/:id', (c) => {
  const id = c.req.param('id');
  return c.json({ message: `Update student ${id}` });
});
// [삭제] 특정 학생 정보 삭제
students.delete('/:id', (c) => {
  const id = c.req.param('id');
  return c.json({ message: `Delete student ${id}` });
});


// --- 🧑‍🏫 코치 (Coaches) 관련 엔드포인트 ---
const coaches = api.basePath('/coaches');
// [목록] 모든 코치 리스트 조회
coaches.get('/', (c) => {
  return c.json({ message: 'List of all coaches' });
});
// [생성] 새로운 코치 한 명 생성
coaches.post('/', (c) => {
  return c.json({ message: 'Create a new coach' }, 201);
});
// [상세] 특정 코치 한 명의 상세 정보 조회
coaches.get('/:id', (c) => {
  const id = c.req.param('id');
  return c.json({ message: `Details for coach ${id}` });
});
// [수정] 특정 코치 정보 업데이트
coaches.patch('/:id', (c) => {
  const id = c.req.param('id');
  return c.json({ message: `Update coach ${id}` });
});
// [삭제] 특정 코치 정보 삭제
coaches.delete('/:id', (c) => {
  const id = c.req.param('id');
  return c.json({ message: `Delete coach ${id}` });
});


// --- ✅ 체크인 (Check-in) 관련 엔드포인트 ---
// [생성] QR 코드 스캔 후, 체크인 기록 생성
api.post('/check-ins', (c) => {
  // body에는 { "qrData": "...", "eventType": "speech" } 같은 정보가 담길 것
  return c.json({ message: 'Student checked in' });
});


// --- 📁 대량 작업 (Bulk Operations) 관련 엔드포인트 ---
const bulk = api.basePath('/import');
// [생성/수정] 학생 정보 CSV 파일로 대량 업로드
bulk.post('/students', (c) => {
  return c.json({ message: 'Bulk import for students received' });
});
// [생성/수정] 코치 정보 CSV 파일로 대량 업로드
bulk.post('/coaches', (c) => {
  return c.json({ message: 'Bulk import for coaches received' });
});

// 기본 export
export default app;