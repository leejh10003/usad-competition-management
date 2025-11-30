<script lang="ts">
	import { onMount } from "svelte";
    import Quill from "quill";
    let editor: HTMLDivElement;
    export let toolbarOptions = [
		[{ header: 1 }, { header: 2 }, "blockquote", "link", "image", "video"],
		["bold", "italic", "underline", "strike"],
		[{ list: "ordered" }, { list: "ordered" }],
		[{ align: [] }],
		["clean"]
	];
    let quill: Quill;
    onMount(async () => {
        try {
            const {default: Quill} = await import("quill");
            console.log(Quill);
            quill = new Quill(editor, {
                modules: {
                    toolbar: toolbarOptions
                },
                theme: "snow",
                placeholder: "Write your story..."
            });
            console.log("Quill editor initialized", quill);
        } catch (error) {
            console.error("Error loading Quill editor:", error);
        }
    });
</script>
<style>
    @import 'https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css';
    .ql-editor {
        min-height: 30vh;
        max-height: 30vh;
        height: 30vh;
        overflow: auto;
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        color: black;
    }
</style>
<div class="editor-wrapper bg-white">
	<div class="ql-editor" bind:this={editor}></div>
</div>
