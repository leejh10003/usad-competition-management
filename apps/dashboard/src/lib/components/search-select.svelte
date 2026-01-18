<script lang="ts" generics="T">
	import { Listbox, useListCollection } from "@skeletonlabs/skeleton-svelte";
	import { debounce } from "lodash";
    let { items, itemToString, itemToValue, fetchItems, propName, placeHolder, value = $bindable<string>() } = $props<{ items: T[], itemToString: (item: T) => string, itemToValue: (item: T) => string, fetchItems: (query: string) => Promise<void>, propName: string, placeHolder?: string, value: string }>();
    const collection = $derived(
		useListCollection({
			items,
			itemToString,
			itemToValue,
		}),
	);
    const fetchItemsWithDebounce = debounce(fetchItems, 300);
</script>
<Listbox class="w-full max-w-md" collection={collection} selectionMode="single" value={[value]} deselectable onValueChange={({value: changedValue}) => {
        if (changedValue.length > 0) {
            value = changedValue[0];
        } else {
            value = '';
        }
    }}>
    <Listbox.Label>{propName}</Listbox.Label>
    <Listbox.Input placeholder={placeHolder || "Type to search..."} oninput={(e) => {
        fetchItemsWithDebounce(e.currentTarget.value);
    }} />
    <Listbox.Content>
        {#each collection.items as item (item.id)}
            <Listbox.Item {item}>
                <Listbox.ItemText>{item.name}</Listbox.ItemText>
                <Listbox.ItemIndicator />
            </Listbox.Item>
        {/each}
    </Listbox.Content>
</Listbox>