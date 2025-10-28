<script lang="ts">
    import { page } from "$app/state";
    import { onMount } from "svelte";
    import SignaturePad from '../../../../components/signature.svelte';
    import { Button } from 'konsta/svelte';
    import _ from 'lodash';
    let path = $derived(page.url.pathname);
    let pathElements = $derived(path.split('/').filter((e) => e.trim().length > 0));
    let id = $derived(pathElements[pathElements.length - 1]);
    var pads: SignaturePad[] = $state(new Array(0));
    onMount(async () =>  {
        pads = new Array(10);
    })
</script>
<div class="flex">
    {#each pads as _, i}
        <div>
            <SignaturePad signatureId={id} bind:this={pads[i]}/>
            <Button onclick={()=> pads[i]?.clear()}>Clear</Button>
        </div>
    {/each}
</div>