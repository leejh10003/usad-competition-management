<script>
	import { ActionsButton, Block, BlockTitle, Button } from 'konsta/svelte';
	import QrCodeScanner from '$lib/components/qrcode-scanner.svelte';
	import { goto } from '$app/navigation';
	import BottomPadding from '$lib/components/bottom-padding.svelte';
	import _ from 'lodash';
	import { getValidIdStringFromQrCode } from '$lib/utils/qrcode';
</script>

<div class="flex grow flex-col">
	<QrCodeScanner
		detect={(e, scanner) => {
			const id = getValidIdStringFromQrCode(e.decodedText, 'check-in-team/scanned', 'id');
			if (id) {
				scanner.pause();
				goto(`/check-in-team/scanned?id=${id}`)
			}
		}}
		error={(e) => console.log({ type: 'ERROR', message: e })}
		paused={false}
		width={320}
		height={320}
		class="max-w-sm m-auto"
	/>
	<BottomPadding />
</div>
