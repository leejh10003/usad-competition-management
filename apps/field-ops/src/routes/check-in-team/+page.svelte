<script>
	import { ActionsButton, Block, BlockTitle, Button } from 'konsta/svelte';
	import QrCodeScanner from '../../components/qrcode-scanner.svelte';
	import { goto } from '$app/navigation';
</script>

<div class="flex grow flex-col">
	<QrCodeScanner
		detect={(e, scanner) => {
            scanner.pause();
            goto(`scanned?id=${e.decodedText}`)
        }}
		error={(e) => console.log({ type: 'ERROR', message: e })}
		paused={false}
		width={320}
		height={320}
		class="max-w-sm m-auto"
	/>
</div>
