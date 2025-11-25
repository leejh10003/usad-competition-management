<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Html5QrcodeScanner,
		type Html5QrcodeResult,
		Html5QrcodeScanType,
		Html5QrcodeSupportedFormats,
		Html5QrcodeScannerState
	} from 'html5-qrcode';

	interface QrCodeScannerProps {
		detect: (e: Html5QrcodeResult, scanner: Html5QrcodeScanner) => void;
		error: (message: string, scanner: Html5QrcodeScanner) => void;
		class: string;
		width: number;
		height: number;
		paused: boolean;
	}
	const {
		detect,
		error,
		class: className = '',
		width,
		height,
		paused = false
	}: QrCodeScannerProps = $props();

	function onScanSuccess(
		_: string,
		decodedResult: Html5QrcodeResult,
		scanner: Html5QrcodeScanner
	): void {
		detect(decodedResult, scanner);
	}

	// usually better to ignore and keep scanning
	function onScanFailure(message: string, scanner: Html5QrcodeScanner) {
		error(message, scanner);
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
				formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE]
			},
			false // non-verbose
		);
		scanner.render(
			(_, decodedResult) => onScanSuccess(_, decodedResult, scanner),
			(message) => onScanFailure(message, scanner)
		);
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
