<script lang="ts" generics="T">
	import { Listbox, useListCollection } from "@skeletonlabs/skeleton-svelte";
	import { debounce } from "lodash";
	import { onMount } from "svelte";
    let { items, itemToString, itemToValue, itemsSubscript, fetchItems, propName, placeHolder, value = $bindable<string>() } = $props<{ items: T[], itemToString: (item: T) => string, itemToValue: (item: T) => string, fetchItems: (query: string) => Promise<void>, propName: string, placeHolder?: string, value: string, itemsSubscript?: (input: T) => string }>();
    var currentSelected: T | null = null;
    const collection = $derived(
		useListCollection({
			items: new Set<T>([...items as T[], ...(currentSelected ? [currentSelected] : [])]),
			itemToString,
			itemToValue,
		}),
	);
    onMount(() => {
        if (value) {
            currentSelected = (items as T[]).find((item) => itemToValue(item) === value) || null;
        }
    });
    const fetchItemsWithDebounce = debounce(fetchItems, 300);
</script>
<Listbox class="w-full max-w-md" collection={collection} selectionMode="single" value={[value]} deselectable onValueChange={({value: changedValue}) => {
        if (changedValue.length > 0) {
            value = changedValue[0];
            currentSelected = (items as T[]).find((item) => itemToValue(item) === value) || null;
        } else {
            value = '';
            currentSelected = null;
        }
    }}>
    <Listbox.Label>{propName}</Listbox.Label>
    <Listbox.Input placeholder={placeHolder || "Type to search..."} oninput={(e) => {
        fetchItemsWithDebounce(e.currentTarget.value);
    }} />
    <Listbox.Content>
        {#each collection.items as item (itemToValue(item))}
            <Listbox.Item {item}>
                <Listbox.ItemText>{itemToString(item)}
                    {#if itemsSubscript}
                        <br/><span class="text-sm text-gray-500"> - {itemsSubscript(item)}</span>
                    {/if}
                </Listbox.ItemText>
                <Listbox.ItemIndicator />
            </Listbox.Item>
        {/each}
    </Listbox.Content>
</Listbox>