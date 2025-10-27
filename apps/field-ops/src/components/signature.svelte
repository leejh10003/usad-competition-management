<script lang="ts">
	import { Button } from 'konsta/svelte';
    import SignaturePad from 'signature_pad';
    interface SignatureCanvasProps {
        signatureId: string
    }
    const {signatureId}: SignatureCanvasProps = $props();
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
    <canvas width="300px" height="300px" id={`signature-canvas-${signatureId}`} use:initialized></canvas>
</div>