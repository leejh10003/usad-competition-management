import { ExecutionContext } from '@cloudflare/workers-types';
// 클라이언트로부터 받을 데이터의 타입을 정의
interface ScannedInput {
  scanned?: string; // scanned 속성은 string 타입이며, 없을 수도 있음
}

export default {
  async fetch(request: Request, _: Env, __: ExecutionContext): Promise<Response> {
    // 1. POST 요청만 허용
    if (request.method !== 'POST') {
      return new Response('Invalid method. Only POST is accepted.', { status: 405 });
    }

    // 2. Content-Type이 application/json인지 확인
    if (request.headers.get('Content-Type') !== 'application/json') {
      return new Response('Invalid Content-Type. Only application/json is accepted.', { status: 415 });
    }

    try {
      // 3. 요청 본문을 JSON으로 파싱
      const body: ScannedInput = await request.json();

      // 4. body에 'scanned' 필드가 있고, string 타입인지 검증
      if (!body.scanned || typeof body.scanned !== 'string') {
        return new Response('Invalid body. "scanned" field is required and must be a string.', { status: 400 });
      }

      // 5. [핵심] 구조화된 로그를 console.log로 출력
      console.log(JSON.stringify({
        level: 'INFO',
        message: 'Scan data received successfully.',
        scannedData: body.scanned,
        requestInfo: {
          ip: request.headers.get('CF-Connecting-IP'),
          country: request.cf?.country,
          colo: request.cf?.colo,
        }
      }));

      // 6. 성공 응답 반환
      return new Response(JSON.stringify({ success: true, message: 'Log received.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });

    } catch (error) {
      console.error(JSON.stringify({
        level: 'ERROR',
        message: 'Failed to process request.',
        error: error instanceof Error ? error.message : String(error),
      }));
      return new Response('An internal error occurred.', { status: 500 });
    }
  },
};