// --- ✅ 체크인 (Check-in) 관련 엔드포인트 ---

import { api } from "../..";

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