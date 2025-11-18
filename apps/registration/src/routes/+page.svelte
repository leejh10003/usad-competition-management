<script lang="ts">
	import { goto } from "$app/navigation";
</script>
<div class="flex grow flex-col">
    <div class="m-auto flex flex-col items-center">
        <h1 class="h1">Are you coach from school or individualy participating?</h1>
        <br />
        <nav class="btn-group flex-col p-2 md:flex-row w-min">
            <button type="button" class="btn preset-filled-primary-500 btn-lg">I'm coach from school</button>
            <button type="button" class="btn preset-outlined-primary-500 btn-lg" onclick={() => goto('/individual')}>I'm participating individualy</button>
        </nav>
    </div>
</div>