<script lang="ts">
    import { page } from "$app/state";
    let path = $derived(page.url.pathname);
    let pathElements = $derived(path.split('/').filter((e) => e.trim().length > 0));
    let id = $derived(pathElements[pathElements.length - 1]);
</script>
<div>
    {id}
</div>