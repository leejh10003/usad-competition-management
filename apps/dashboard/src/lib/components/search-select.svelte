<script lang="ts" generics="T">
	import { Listbox, useListCollection } from "@skeletonlabs/skeleton-svelte";
	import { debounce, uniqBy } from "lodash";
    interface SearchSelectProps { 
        items: T[],
        itemToString: (item: T) => string,
        itemToValue: (item: T) => string,
        fetchItems: (query: string) => Promise<void>,
        propName: string,
        placeHolder?: string,
        value: string,
        itemsSubscript?: (input: T) => string,
        valueChanged?: (oldValue: string, newValue: string) => void
    }
    let { items, itemToString, itemToValue, itemsSubscript, fetchItems, propName, placeHolder, value = $bindable<string>(), valueChanged }: SearchSelectProps = $props();
    var currentSelected = $state<T | null>(null);
    $effect(() => {
        currentSelected = (items as T[]).find((item) => itemToValue(item) === value) || null
    });
    const collection = $derived.by(() => {
        return useListCollection({
            items: uniqBy([...items, ...(currentSelected ? [currentSelected] : [])], itemToValue),
            itemToString,
            itemToValue,
        })
    });
    const fetchItemsWithDebounce = debounce(fetchItems, 300);
</script>
<Listbox class="w-full max-w-md" collection={collection} selectionMode="single" value={[value]} deselectable onValueChange={({value: eventValue}) => {
        const currentValue = value;
        if (eventValue.length > 0) {
            value = eventValue[0];
        } else {
            value = '';
        }
        const changedValue = value;
        valueChanged?.(currentValue, changedValue);
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