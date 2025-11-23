<script lang="ts">
	import { goto } from "$app/navigation";
</script>
<div class="flex grow flex-col">
    <div class="m-auto flex flex-col items-center text-center">
        <h1 class="h1">Are you a coach with a school or a parent/guardian registering an individual?</h1>
        <br />
        <nav class="btn-group flex-col p-2 md:flex-row w-min">
            <button type="button" class="btn preset-filled-primary-500 btn-lg" onclick={() => goto('/school')}>Coach from school</button>
            <button type="button" class="btn preset-outlined-primary-500 btn-lg" onclick={() => goto('/individual')}>Parent/guardian registering an individual</button>
        </nav>
    </div>
</div>