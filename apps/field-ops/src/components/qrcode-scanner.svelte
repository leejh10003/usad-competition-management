<script lang="ts">
  import { onMount } from 'svelte';
  import {
    Html5QrcodeScanner,
    type Html5QrcodeResult,
    Html5QrcodeScanType,
    Html5QrcodeSupportedFormats,
    Html5QrcodeScannerState,
	Html5Qrcode,
  } from 'html5-qrcode';

  interface QrCodeScannerProps {
    detect: (e: Html5QrcodeResult) => void;
    error: (message: string) => void;
    class: string;
    width: number;
    height: number;
    paused: boolean;
  }
  const { detect, error, class: className = '', width, height, paused = false }: QrCodeScannerProps = $props();

  function onScanSuccess(_: string, decodedResult: Html5QrcodeResult): void {
    detect(decodedResult);
  }

  // usually better to ignore and keep scanning
  function onScanFailure(message: string) {
    error(message);
  }

  let scanner: Html5QrcodeScanner;
  onMount(async () => {
    scanner = new Html5QrcodeScanner(
      'qr-scanner',
      {
        fps: 10,
        qrbox: { width, height },
        aspectRatio: 1,
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
        formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
      },
      false // non-verbose
    );
    scanner.render(onScanSuccess, onScanFailure);
  });

  // pause/resume scanner to avoid unintended scans
  $effect(() => togglePause(paused));
  function togglePause(paused: boolean): void {
    if (paused && scanner?.getState() === Html5QrcodeScannerState.SCANNING) {
      scanner?.pause();
    } else if (scanner?.getState() === Html5QrcodeScannerState.PAUSED) {
      scanner?.resume();
    }
  }
</script>

<div id="qr-scanner" class={className}></div>