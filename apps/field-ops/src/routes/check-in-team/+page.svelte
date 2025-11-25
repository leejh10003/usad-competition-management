<script lang="ts">
	/*eslint-disable-next-line @typescript-eslint/no-unused-vars*/
	import { ActionsButton, Block, BlockTitle, Button } from 'konsta/svelte';
	import QrCodeScanner from '$lib/components/qrcode-scanner.svelte';
	import { goto } from '$app/navigation';
	import BottomPadding from '$lib/components/bottom-padding.svelte';
	/*eslint-disable-next-line @typescript-eslint/no-unused-vars*/
	import _ from 'lodash';
	import { getValidIdStringFromQrCode } from '$lib/utils/qrcode';
	import { resolve } from '$app/paths';
</script>

<div class="flex grow flex-col">
	<QrCodeScanner
		detect={(e, scanner) => {
			const id = getValidIdStringFromQrCode(e.decodedText, 'check-in-team/scanned', 'id');
			if (id) {
				scanner.pause();
				goto(resolve(`/check-in-team/scanned?id=${id}` as Parameters<typeof resolve>[0]));
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
