<script lang="ts" generics="T, S">
    let {
        options = $bindable<T[]>(),
        value = $bindable<S | null | undefined>(),
        propName,
        key,
        display,
        mapValue
    } = $props<{
        options: T[],
        propName: string,
        key: (input: T) => string | number,
        display: (input: T) => string | undefined,
        value?: S,
        mapValue: (input: T) => S
    }>();
</script>
<label class="label">
    <span class="label-text">{propName}</span>
    <select required class="select" value={value} onchange={(v) => {
        value = mapValue(v.currentTarget.value) as S;
    }}>
        <option disabled selected value={null}>Select {propName}...</option>
        {#each options as option (key(option))}
            <option value={mapValue(option)}>{display ? display(option) : option}</option>
        {/each}
    </select>
</label>