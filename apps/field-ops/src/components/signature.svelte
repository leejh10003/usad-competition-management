<script lang="ts">
	import { Button } from 'konsta/svelte';
	import SignaturePad from 'signature_pad';
	interface SignatureCanvasProps {
		signatureId: string;
		width?: number;
		height?: number;
	}
	const { signatureId, width, height }: SignatureCanvasProps = $props();
	var signaturePad: SignaturePad;
	export function getSignature() {
		return signaturePad?.toDataURL();
	}
	export function clear() {
		signaturePad?.clear();
	}
	function initialized(node: HTMLCanvasElement) {
		signaturePad = new SignaturePad(node);
	}
</script>

<div>
	<canvas
        class="signature-canvas"
		width={`${width ?? 300}px`}
		height={`${height ?? 300}px`}
		id={`signature-canvas-${signatureId}`}
		use:initialized
	></canvas>
</div>

<style>
	.signature-canvas {
		border: 1px solid #000;
        border-radius: 10px;
	}
</style>
