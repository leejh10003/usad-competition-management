<script lang="ts">
	import { DatePicker, Portal, parseDate } from '@skeletonlabs/skeleton-svelte';
	import { Time } from '@internationalized/date';
	import { parseISO, format } from 'date-fns';
	import { imask, IMask } from '@imask/svelte';
	import { TZDate } from '@date-fns/tz';
	import { TimeField } from "bits-ui";

	let { value = $bindable(), zone }: {value: Date, zone: string} = $props();
	const datePart = $derived.by(() => {
		if (value) {
			const result = new TZDate(parseISO(value.toISOString()), zone)
			return [parseDate(new Date(result.toISOString()))];
		}
	});
	const timePart = $derived.by(() => {
		if (value) {
			const result = new TZDate(parseISO(value.toISOString()), zone)
			return new Time(result.getHours(), result.getMinutes(), result.getSeconds());
		}
	});
</script>

<DatePicker timeZone={zone} inline value={datePart} onValueChange={(e) => {
  const current = new TZDate(parseISO((value ?? new Date()).toISOString()), zone);
  current.setFullYear(e.value[0]!.year);
  current.setMonth(e.value[0]!.month - 1);
  current.setDate(e.value[0]!.day);
  value = new Date(current.toISOString());
}}>
	<DatePicker.Label>Choose Date</DatePicker.Label>
	<DatePicker.Control>
		<TimeField.Root value={timePart} onValueChange={(e) => {
			const current = new TZDate(parseISO((value ?? new Date()).toISOString()), zone);
			if (e) {
				current.setHours(e.hour);
				current.setMinutes(e.minute);
				current.setSeconds(e.second);
				value = new Date(current.toISOString());
			}
		}}>
		<TimeField.Input
			name="TODO: Fixit"
			class="h-input w-full input border-border-input bg-background text-foreground focus-within:border-border-input-hover focus-within:shadow-date-field-focus hover:border-border-input-hover data-invalid:border-destructive flex select-none items-center px-2 py-3 text-sm tracking-[0.01em]"
			>
			{#snippet children({ segments })}
				{#each segments as { part, value }, i (part + i)}
				<div class="inline-block select-none">
					{#if part === "literal"}
					<TimeField.Segment {part} class="text-muted-foreground p-1">
						{value}
					</TimeField.Segment>
					{:else}
					<TimeField.Segment
						{part}
						class="rounded-5px hover:bg-muted focus:bg-muted focus:text-foreground aria-[valuetext=Empty]:text-muted-foreground data-invalid:text-destructive focus-visible:ring-0! focus-visible:ring-offset-0! px-1 py-1"
					>
						{value}
					</TimeField.Segment>
					{/if}
				</div>
				{/each}
			{/snippet}
			</TimeField.Input>
		</TimeField.Root>
		<DatePicker.Input placeholder="mm/dd/yyyy" />
	</DatePicker.Control>
	<DatePicker.Content>
		<DatePicker.View view="day">
			<DatePicker.Context>
				{#snippet children(datePicker)}
					<DatePicker.ViewControl>
						<DatePicker.PrevTrigger />
						<DatePicker.ViewTrigger>
							<DatePicker.RangeText />
						</DatePicker.ViewTrigger>
						<DatePicker.NextTrigger />
					</DatePicker.ViewControl>
					<DatePicker.Table>
						<DatePicker.TableHead>
							<DatePicker.TableRow>
								{#each datePicker().weekDays as weekDay, id (id)}
									<DatePicker.TableHeader>{weekDay.short}</DatePicker.TableHeader>
								{/each}
							</DatePicker.TableRow>
						</DatePicker.TableHead>
						<DatePicker.TableBody>
							{#each datePicker().weeks as week, id (id)}
								<DatePicker.TableRow>
									{#each week as day, id (id)}
										<DatePicker.TableCell value={day}>
											<DatePicker.TableCellTrigger>{day.day}</DatePicker.TableCellTrigger>
										</DatePicker.TableCell>
									{/each}
								</DatePicker.TableRow>
							{/each}
						</DatePicker.TableBody>
					</DatePicker.Table>
				{/snippet}
			</DatePicker.Context>
		</DatePicker.View>
		<DatePicker.View view="month">
			<DatePicker.Context>
				{#snippet children(datePicker)}
					<DatePicker.ViewControl>
						<DatePicker.PrevTrigger />
						<DatePicker.ViewTrigger>
							<DatePicker.RangeText />
						</DatePicker.ViewTrigger>
						<DatePicker.NextTrigger />
					</DatePicker.ViewControl>
					<DatePicker.Table>
						<DatePicker.TableBody>
							{#each datePicker().getMonthsGrid({ columns: 4, format: 'short' }) as months, id (id)}
								<DatePicker.TableRow>
									{#each months as month, id (id)}
										<DatePicker.TableCell value={month.value}>
											<DatePicker.TableCellTrigger>{month.label}</DatePicker.TableCellTrigger>
										</DatePicker.TableCell>
									{/each}
								</DatePicker.TableRow>
							{/each}
						</DatePicker.TableBody>
					</DatePicker.Table>
				{/snippet}
			</DatePicker.Context>
		</DatePicker.View>
		<DatePicker.View view="year">
			<DatePicker.Context>
				{#snippet children(datePicker)}
					<DatePicker.ViewControl>
						<DatePicker.PrevTrigger />
						<DatePicker.ViewTrigger>
							<DatePicker.RangeText />
						</DatePicker.ViewTrigger>
						<DatePicker.NextTrigger />
					</DatePicker.ViewControl>
					<DatePicker.Table>
						<DatePicker.TableBody>
							{#each datePicker().getYearsGrid({ columns: 4 }) as years, id (id)}
								<DatePicker.TableRow>
									{#each years as year, id (id)}
										<DatePicker.TableCell value={year.value}>
											<DatePicker.TableCellTrigger>{year.label}</DatePicker.TableCellTrigger>
										</DatePicker.TableCell>
									{/each}
								</DatePicker.TableRow>
							{/each}
						</DatePicker.TableBody>
					</DatePicker.Table>
				{/snippet}
			</DatePicker.Context>
		</DatePicker.View>
	</DatePicker.Content>
</DatePicker>