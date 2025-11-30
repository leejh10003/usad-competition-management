<script lang="ts">
	import { onMount } from "svelte";
    import type Quill from "quill";
    import type { QuillOptions } from "quill";
    const props = $props<{ }>();
    let editor: HTMLDivElement;
    let options: QuillOptions = {
        modules: {
            toolbar: [
                [{ header: 1 }, { header: 2 }, "blockquote", "link", "image", "video"],
                ["bold", "italic", "underline", "strike"],
                [{ list: "ordered" }, { list: "ordered" }],
                [{ align: [] }],
                ["clean"]
            ]
        },
        theme: "snow",
        placeholder: "Write your story..."
    };
    let quill: Quill;
    export {quill} ;
    onMount(async () => {
        const {default: Quill} = await import("quill");
        quill = new Quill(editor, options);
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
