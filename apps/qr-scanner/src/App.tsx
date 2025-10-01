import { useState } from 'react';
import QRCodeScanner from './components/QRCodeScanner';
import './App.css'; // 기본 스타일링을 위해 App.css를 가져옴

function App() {
  // 스캔된 QR 코드 데이터를 저장할 state
  const [scanResult, setScanResult] = useState<string | null>(null);
  
  // 스캔 성공 시 실행될 함수
  const handleScanSuccess = (decodedText: string) => {
    console.log(`스캔 성공: ${decodedText}`);
    setScanResult(decodedText);
    // 여기서 스캔된 데이터를 서버로 보내는 등의 추가 작업을 할 수 있어.
  };

  // 스캔 실패 시 실행될 함수 (선택적)
  const handleScanFailure = (_: string) => {
    // console.error(`스캔 실패: ${error}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>QR Code Scanner</h1>
        <div style={{ width: '100%', padding: '20px', boxSizing: 'border-box' }}>
          {/* QRCodeScanner 컴포넌트를 렌더링하고, props로 핸들러 함수를 전달 */}
          <QRCodeScanner 
            onScanSuccess={handleScanSuccess}
            onScanFailure={handleScanFailure}
          />
        </div>
        {/* 스캔 결과가 있으면 화면에 보여줌 */}
        {scanResult && (
          <div style={{ marginTop: '20px', padding: '10px', background: '#4CAF50', borderRadius: '5px' }}>
            <p style={{ margin: 0, color: 'white' }}>마지막 스캔 결과:</p>
            <p style={{ margin: '5px 0 0', color: 'white', wordBreak: 'break-all' }}>{scanResult}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;