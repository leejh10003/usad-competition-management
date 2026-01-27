<script lang="ts">
	import { DatePicker, Portal, parseDate } from '@skeletonlabs/skeleton-svelte';
	import { ZonedDateTime } from '@internationalized/date';
	import { parseISO, format } from 'date-fns';
	import { imask, IMask } from '@imask/svelte';
	import { TZDate } from '@date-fns/tz';

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
			return format(result, 'HH:mm');
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
		<input
			onaccept={({detail: maskRef}) => {
				const timeParts = maskRef.value.split(':');
				if (timeParts.length === 2) {
					const hours = parseInt(timeParts[0], 10);
					const minutes = parseInt(timeParts[1], 10);
					const current = new TZDate(parseISO((value ?? new Date()).toISOString()), zone);
					current.setHours(hours);
					current.setMinutes(minutes);
					value = new Date(current.toISOString());
				}
			}}
			class="input flex-3"
			value={timePart}
			placeholder="Time..." use:imask={{
			overwrite: true,
			autofix: true,
			mask: 'HH:MM',
			blocks: {
				HH: {
					mask: IMask.MaskedRange,
					placeholderChar: 'HH',
					from: 0,
					to: 23,
					maxLength: 2
				},
				MM: {
					mask: IMask.MaskedRange,
					placeholderChar: 'MM',
					from: 0,
					to: 59,
					maxLength: 2
				}
			}
		}}/>
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