<script>
	import { Block } from 'konsta/svelte';
	import QrCodeScanner from '$lib/components/qrcode-scanner.svelte';
</script>
<div class="flex grow flex-col">
	<QrCodeScanner
		detect={(e, scanner) => {
            scanner.pause();
			//TODO1: call server API
			//TODO2: Show modal
        }}
		error={(e) => console.log({ type: 'ERROR', message: e })}
		paused={false}
		width={320}
		height={320}
		class="max-w-sm m-auto"
	/>
</div>