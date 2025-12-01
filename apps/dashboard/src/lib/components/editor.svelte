<script lang="ts">
	import { onMount } from "svelte";
    import Quill from "quill";
    import type { QuillOptions } from "quill";
    import 'quill/dist/quill.snow.css';
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
    onMount(() => {
        quill = new Quill(editor, options);
    });
</script>
<style>
    .ql-editor {
        min-height: 30vh;
        max-height: 30vh;
        height: 30vh;
        overflow: scroll;
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        color: black;
    }
</style>
<div class="editor-wrapper bg-white">
	<div class="ql-editor" bind:this={editor}></div>
</div>
