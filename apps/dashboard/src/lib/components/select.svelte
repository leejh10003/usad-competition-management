<script lang="ts" generics="T, S">
    let {
        options = $bindable<T[]>(),
        value = $bindable<S | null | undefined>(),
        propName,
        key,
        display,
        mapValue,
        valueChanged,
        convertValue
    }: {
        options: T[],
        propName: string,
        key: (input: T) => string | number,
        display: (input: T) => string | undefined,
        value?: S | null,
        mapValue: (input: T) => S
        valueChanged?: (oldValue: S | null | undefined, newValue: S | null | undefined) => void
        convertValue?: (input: string) => S
    } = $props();
</script>
<label class="label">
    <span class="label-text">{propName}</span>
    <select required class="select" value={value} onchange={(v) => {
        const currentValue = value;
        value = convertValue?.(v.currentTarget.value) ?? mapValue(v.currentTarget.value as T) ?? v.currentTarget.value as S;
        const changedValue = value;
        valueChanged?.(currentValue, changedValue);
    }}>
        <option disabled selected value={null}>Select {propName}...</option>
        {#each options as option (key(option))}
            <option value={mapValue(option)}>{display ? display(option) : option}</option>
        {/each}
    </select>
</label>