<script lang="ts">
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { goto } from '$app/navigation';
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { page } from '$app/state';
	import { Collapsible, Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
	import { eventCheckedInItem, eventCheckInQuerySchema, eventResponseItemSchema, studentResponseSchema } from 'usad-scheme';
	import { ArrowLeftIcon, ArrowRightIcon, ArrowUpDownIcon, CalendarPlus2, XIcon } from '@lucide/svelte';
	import z, { check } from 'zod';
	import { parseInt } from 'es-toolkit/compat';
	import moment from 'moment-timezone';
	import { resolve } from '$app/paths';
	import { workerRequest } from '$lib/api/test';
	import PaginateTable from '$lib/components/paginate-table.svelte';
	import DisplayTable from '$lib/components/display-table.svelte';
	import { timezoneFormatted } from '$lib/utils/time';
	import type { EventCheckedInItem, StudentResponseItem, EventResponseItem, EventCheckedInAggregatedItem, CompetitionResponseItem } from '$lib/data/types';
	import { dialogAppearAnimation } from '$lib/utils/animation';
	var isLoading = $state<boolean>(true);
	var isFirstLoaded = $state<boolean>(true);
	var limit = $state<number>(10);
	var pagination = $state<number>(0);//TODO: Remove variables related to pagination
	var offset = $derived.by(() => pagination * limit);
	var total = $state<number>(0);
	var currentCount = $state<number>(0);
	var checkIns = $state<EventCheckedInAggregatedItem[]>([])
	var timezone = moment.tz.guess();
	const query = $derived.by(() => page.url.searchParams);
	function _currentParam() {
		const limit = query.get('limit');
		const currentPage = query.get('currentPage');
		const params = new URLSearchParams();
		try {
			params.set('limit', parseInt(decodeURI(limit!)).toString());
		} catch (e) {}
		if (currentPage && decodeURI(currentPage as string).trim().length > 0) {
			params.set('currentPage', decodeURI(currentPage as string));
		}
		return params;
	}
	const getLimit = $derived.by(() => {
		const limit = query.get('limit');
		const parsed = parseInt(limit ?? 'NaN');
		return isNaN(parsed) ? 10 : parseInt(limit ?? 'NaN');
	});
	function setLimit(input: number) {
		const route = page.url.pathname;
		const params = _currentParam();
		params.set('limit', input.toString());
		const going = `/${route.replace(/^\//g, '')}${params.size > 0 ? `?${params.toString()}` : ''}` as Parameters<typeof resolve>[0];
		goto(resolve(going))
	}
	const getCurrentPage = $derived.by(() => {
		const currentPage = query.get('currentPage');
		return currentPage ? parseInt(currentPage) : 1;
	})
	function setCurrentPage(input: number) {
		const route = page.url.pathname;
		const params = _currentParam();
		params.set('currentPage', input.toString());
		const going = `/${route.replace(/^\//g, '')}${params.size > 0 ? `?${params.toString()}` : ''}` as Parameters<typeof resolve>[0];
		goto(resolve(going))
	}
	async function fetch(/*searchParams: z.infer<typeof schoolQuerySchema>*/) {
		isLoading = true;
		//TODO: server fetch
		const { result, count } = await workerRequest.getEventCheckIn({
			take: getLimit,
			skip: offset,
		});
		 const [eventResult, studentResult] = await Promise.all([(workerRequest.getEvents({
			where: {
				id: {
					in: result.map((e) => e.eventId)
				}
			},
			take: getLimit
		})).then((res) => res.result), workerRequest.getStudent({
			where: {
				id: {
					in: result.map((e) => e.studentId)
				}
			},
			take: getLimit
		}).then((res) => res.result)]);
		const team = await workerRequest.getTeam({
			where: {
				id: {
					in: studentResult.map((s) => s.teamId!)
				}
			},
		});
		const school = await workerRequest.getSchool({
			where: {
				id: {
					in: Array.from(new Set([...studentResult.map((s) => s.schoolId!), ...team.result.map((t) => t.schoolId)].filter((id): id is string => !!id)))
				}
			},
		});
		const competition = await workerRequest.getCompetition({
			where: {
				id: {
					in: Array.from(new Set([
						...school.result.map((s) => s.competitionId),
						...eventResult.map((e) => e.competitionId),
						...studentResult.map((s) => s.competitionId),
					].filter((id): id is string => !!id)))
				}
			},
		});
		checkIns = result.map((eventCheckedIn) => {
			const event = eventResult.find((e) => e.id === eventCheckedIn.eventId)!;
			const student = studentResult.find((s) => s.id === eventCheckedIn.studentId)!;
			const eventCompetition = competition.result.find((c) => c.id === event.competitionId)!;
			const studentSchool = school.result.find((s) => s.id === student.schoolId);
			const studentCompetition = competition.result.find((c) => c.id === student.competitionId);
			const studentTeam = team.result.find((t) => t.id === student.teamId);
			const teamSchool = studentTeam ? school.result.find((s) => s.id === studentTeam.schoolId) : null;
			const schoolCompetition = studentSchool ? competition.result.find((c) => c.id === studentSchool.competitionId) : null;
			return {
				eventCheckedIn,
				event: {
					event,
					competition: eventCompetition
				},
				student: {
					student,
					school: {
						school: studentSchool,
						competition: studentCompetition,
					},
					team: {
						school: {
							school: teamSchool,
							competition: schoolCompetition,
						},
						team: studentTeam,
					},
				},
			} as EventCheckedInAggregatedItem;
		});
		total = count;
		currentCount = result.length;
		isLoading = false;
	}
	$effect(() => {
		let searchParams = eventCheckInQuerySchema.safeParse(
			Object.fromEntries(page.url.searchParams.entries())
		);
		if (searchParams.success) {
			fetch();
		}
	});
	var competitions = $state<CompetitionResponseItem[]>([]);
	async function fetchCompetitions(query: string) {
		const { result } = await workerRequest.getCompetition({
			where: {
				name: {
					contains: query,
					mode: 'insensitive'
				}
			},
			take: 50,
		});
		competitions = result;
	}
</script>

<div class="flex h-full w-full flex-col gap-y-3.5 p-8">
	<h1 class="h1 font-bold">Check In</h1>
	<Collapsible class="rounded-xs border border-primary-100 p-4">
		<div class="flex w-full items-center justify-between">
			<p class="font-bold">Actions</p>
			<Collapsible.Trigger class="btn-icon hover:preset-tonal">
				<ArrowUpDownIcon class="size-4" />
			</Collapsible.Trigger>
		</div>
		<Collapsible.Content class="grid w-full grid-cols-3 gap-1">
		</Collapsible.Content>
	</Collapsible>
	<DisplayTable
		{isFirstLoaded}
		{isLoading}
		getId={(item) => `${item.eventCheckedIn.studentId}-${item.eventCheckedIn.eventId}`}
		{getLimit}
		{offset}
		{total}
		{currentCount}
		data={checkIns}
		columns={[
			{
				header: 'Event',
				accessor: 'event.event.name',
			},
			{
				header: 'Student',
				accessor: 'student.student.firstName',
				cell: (row) => {
					const studentName = `${row.student.student.firstName} ${row.student.student.lastName}`;
					return studentName ? `${studentName} (${row.student.student.externalStudentId})` : studentName;
				}
			},
			{
				header: 'Checked In At',
				accessor: 'checkedInAt' as keyof EventCheckedInItem,
				cell: (value) => {
					return !value
						? 'Not yet'
						: `${moment(value.eventCheckedIn.checkedInAt).format('MM-DD-YYYY hh:mm:ss')} at timezone ${timezoneFormatted}`;
				}
			}
		]}
	/>
	<PaginateTable
		getLimit={getLimit}
		total={total}
		getCurrentPage={getCurrentPage}
		{setCurrentPage}
	/>
</div>
