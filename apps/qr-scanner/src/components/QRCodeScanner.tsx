import React, { useEffect } from 'react';
import { Html5Qrcode, Html5QrcodeScannerState } from 'html5-qrcode';

interface QRCodeScannerProps {
  onScanSuccess: (decodedText: string) => void;
  onScanFailure?: (error: string) => void;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ onScanSuccess, onScanFailure }) => {
  const qrcodeRegionId = "html5qr-code-full-region";

  useEffect(() => {
    let html5QrcodeScanner: Html5Qrcode | null = null;

    const startScanner = async () => {
      html5QrcodeScanner = new Html5Qrcode(qrcodeRegionId);
      
      try {
        await html5QrcodeScanner.start(
          { facingMode: "environment" },
          {
            fps: 10,
            qrbox: { width: 250, height: 250 },
          },
          (decodedText, _) => {
            onScanSuccess(decodedText);
          },
          (errorMessage) => {
            if (onScanFailure) {
              onScanFailure(errorMessage);
            }
          }
        );
      } catch (err) {
        console.error("카메라를 시작할 수 없습니다.", err);
      }
    };

    startScanner();

    return () => {
      if (html5QrcodeScanner && html5QrcodeScanner.getState() === Html5QrcodeScannerState.SCANNING) {
        html5QrcodeScanner.stop().catch(err => {
          console.error("스캐너를 중지하는 데 실패했습니다.", err);
        });
      }
    };
  }, [onScanSuccess, onScanFailure]);

  return <div id={qrcodeRegionId} style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }} />;
};

export default QRCodeScanner;