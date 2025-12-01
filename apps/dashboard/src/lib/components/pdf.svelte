<script lang="ts">
	import { onMount } from 'svelte';
	import * as pdfjs from 'pdfjs-dist';
	import { disableNonNumeric } from '$lib/utils/validation';
	import { Pagination } from '@skeletonlabs/skeleton-svelte';
	import { ArrowLeftIcon, ArrowRightIcon } from '@lucide/svelte';
	// Import the worker if you're not using a CDN for it
	// import * as pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs';
	import 'pdfjs-dist/build/pdf.worker.min.mjs';

	const { data } = $props<{ data: Parameters<(typeof pdfjs)['getDocument']>[0] }>();
	type LoadState = 'error' | 'loaded' | 'loading';

	let canvasRef: HTMLCanvasElement;
	let pdfDoc: pdfjs.PDFDocumentProxy | null = null;
	let currentPageNum = $state(1);
	let maxPages = $state(0);
	let loading = $state<LoadState>('loading');

	onMount(async () => {

		try {
			const loadingTask = pdfjs.getDocument(data);
			pdfDoc = await loadingTask.promise;
			loading = 'loaded';
			maxPages = pdfDoc.numPages;
			renderPage(currentPageNum);
		} catch (error) {
			loading = 'error';
			console.error('Error loading PDF:', error);
		}
	});

	async function renderPage(pageNum: number) {
		if (!pdfDoc || !canvasRef) return;

		try {
			const page = await pdfDoc.getPage(pageNum);
			const viewport = page.getViewport({ scale: 1 }); // Adjust scale as needed

			const context = canvasRef.getContext('2d');
			if (!context) {
				throw new Error('Canvas context not available');
			}

			canvasRef.height = viewport.height;
			canvasRef.width = viewport.width;

			const renderContext = {
				canvasContext: context,
				viewport: viewport,
				canvas: canvasRef
			};

			await page.render(renderContext).promise;
		} catch (error) {
			console.error('Error rendering page:', error);
		}
	}

	// Optional: Add functions for navigation (next/previous page)

	function selectPage(pageNumber: number) {
		currentPageNum = pageNumber;
		renderPage(currentPageNum);
	}

	function nextPage() {
		if (pdfDoc && currentPageNum < pdfDoc.numPages) {
			currentPageNum++;
			renderPage(currentPageNum);
		}
	}

	function prevPage() {
		if (currentPageNum > 1) {
			currentPageNum--;
			renderPage(currentPageNum);
		}
	}
</script>

<div>
	{#if loading === 'loading'}
		<div class="space-y-4">
			<div class="placeholder animate-pulse"></div>
			<div class="placeholder animate-pulse"></div>
			<div class="placeholder animate-pulse"></div>
			<div class="placeholder animate-pulse"></div>
		</div>
	{:else if loading === 'error'}
		<div>PDF Load failed</div>
	{/if}
	<div class={loading === 'loaded' ? 'visible' : 'hidden'}>
		<canvas bind:this={canvasRef}></canvas>
		<div class="flex flex-row">
			<Pagination count={maxPages} pageSize={1} page={currentPageNum}>
				<Pagination.PrevTrigger onclick={() => prevPage()}
					><ArrowLeftIcon class="size-4" /></Pagination.PrevTrigger
				>
				<Pagination.Context>
					{#snippet children(pagination)}
						{#each pagination().pages as page, index (page)}
							{#if page.type === 'page'}
								<Pagination.Item onclick={() => selectPage(page.value)} {...page}>
									{page.value}
								</Pagination.Item>
							{:else}
								<Pagination.Ellipsis {index}>&#8230;</Pagination.Ellipsis>
							{/if}
						{/each}
					{/snippet}
				</Pagination.Context>
				<Pagination.NextTrigger onclick={() => nextPage()}
					><ArrowRightIcon class="size-4" /></Pagination.NextTrigger
				>
			</Pagination>
			<input
				type="number"
				class="input"
				onkeypress={disableNonNumeric}
				min="1"
				step="1"
				max={maxPages}
				bind:value={currentPageNum}
				onchange={(e) => {
					if (e.type === 'change') {
						var page = parseInt((e.target as HTMLInputElement).value) as number;
						currentPageNum = page;
						renderPage(currentPageNum);
					}
				}}
			/>
		</div>
	</div>
</div>
