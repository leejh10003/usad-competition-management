import Enumerable from 'linq';
import _, { assign, find, isArray } from 'lodash';
import moment from 'moment';
import {
	schoolResponse,
	competitionResponseItemSchema,
	teamResponseItemSchema,
	studentResponseSchema,
	eventResponseItemSchema,
	coachResponseSchema,
	coachTeamMappings,
	studentQuerySchema,
	schoolQuerySchema,
	coachQuerySchema,
	teamQuerySchema,
	competitionQuerySchema,
	stateEnums,
	eventQuerySchema,
	eventCheckedInResponseSchema,
	eventCheckInQuerySchema
} from 'usad-scheme';
import z from 'zod';

type SchoolItemType = z.infer<typeof schoolResponse>['school'];
type CompetitionResponseItem = z.infer<typeof competitionResponseItemSchema>;
type TeamResponseItem = z.infer<typeof teamResponseItemSchema>;
type StudentResponseItem = z.infer<typeof studentResponseSchema>['student'];
type EventResponseItem = z.infer<typeof eventResponseItemSchema>;
type CoachResponseItem = z.infer<typeof coachResponseSchema>['coach'];
type CoachTeamMappintItem = z.infer<typeof coachTeamMappings>;
type EventCheckInItem = z.infer<typeof eventCheckedInResponseSchema>['eventCheckIn'];
class WorkerRequest {
	coachTeamMappings = Enumerable.from<CoachTeamMappintItem>([
		{
			coachId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			teamId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de'
		},
		{
			coachId: 'aacee28b-6040-4ba7-b2a1-cee3f2068c2a',
			teamId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de'
		},
		{
			coachId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			teamId: '20bd6771-a683-4b0e-b37d-eed53ff799d4'
		},
		{
			coachId: '2e577ebb-3ed4-4a5d-b96f-38aba22472e1',
			teamId: '20bd6771-a683-4b0e-b37d-eed53ff799d4'
		},
		{
			coachId: 'f67bcd35-f6c9-4278-8949-18814ab1ee31',
			teamId: 'f67bcd35-f6c9-4278-8949-18814ab1ee31'
		},
		{
			coachId: '3e70e81f-f5e1-4212-ba37-1c38e50bb866',
			teamId: 'f67bcd35-f6c9-4278-8949-18814ab1ee31'
		},
		{
			coachId: 'c3611b9f-b416-48af-9347-95c48ed060a8',
			teamId: 'c3611b9f-b416-48af-9347-95c48ed060a8'
		},
		{
			coachId: '1cf17dd3-77c8-493b-93d7-1d26d289a416',
			teamId: 'c3611b9f-b416-48af-9347-95c48ed060a8'
		},
		{
			coachId: '21c95b7f-47d0-487b-99c1-bf93ee719081',
			teamId: '21c95b7f-47d0-487b-99c1-bf93ee719081'
		},
		{
			coachId: '1e0c58f4-12bf-48a2-959d-f806f5d07104',
			teamId: '21c95b7f-47d0-487b-99c1-bf93ee719081'
		},
		{
			coachId: '01651989-32f4-49a9-962d-742f47b3b0cb',
			teamId: '01651989-32f4-49a9-962d-742f47b3b0cb'
		},
		{
			coachId: 'bf2e8b11-c9c7-4eab-9923-7245e47565fd',
			teamId: '01651989-32f4-49a9-962d-742f47b3b0cb'
		}
	]);
	schools = Enumerable.from<SchoolItemType>([
		{
			id: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			primaryCoachId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			name: 'Midwest US Science High School',
			externalSchoolId: '10',
			state: 'IL',
			isVirtual: false,
			competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			streetAddress: '4821 Oak Meadow Ln',
			city: 'Austin',
			zipCode: '78745',
			phone: '5125550182',
			principalName: 'Liam Carter',
			principalEmail: 'carter.liam@gmail.com',
			division: 1,
			mutationIndex: 0
		},
		{
			id: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			primaryCoachId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			name: 'Eastside Preparatory Academy',
			externalSchoolId: '11',
			state: 'NY',
			isVirtual: false,
			competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			streetAddress: '1092 Sunnyvale Dr',
			city: 'San Jose',
			zipCode: '95129',
			phone: '4085550147',
			principalName: 'Emma Brooks',
			principalEmail: 'brooks.emma@gmail.com',
			division: 2,
			mutationIndex: 1
		},
		{
			id: 'f67bcd35-f6c9-4278-8949-18814ab1ee31',
			primaryCoachId: 'f67bcd35-f6c9-4278-8949-18814ab1ee31',
			name: 'Westview Charter School',
			externalSchoolId: '12',
			state: 'CA',
			isVirtual: false,
			competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			streetAddress: '8822 Lakeview Blvd',
			city: 'Seattle',
			zipCode: '98109',
			phone: '2065550193',
			principalName: 'Noah Foster',
			principalEmail: 'foster.noah@gmail.com',
			division: 3,
			mutationIndex: 2
		},
		{
			id: 'c3611b9f-b416-48af-9347-95c48ed060a8',
			primaryCoachId: 'c3611b9f-b416-48af-9347-95c48ed060a8',
			name: 'Northern Technical Institute',
			externalSchoolId: '13',
			state: 'TX',
			isVirtual: false,
			competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			streetAddress: '3012 Broadway Ext',
			city: 'Nashville',
			zipCode: '37203',
			phone: '6155550125',
			principalName: 'Olivia Price',
			principalEmail: 'price.olivia@gmail.com',
			division: 4,
			mutationIndex: 3
		},
		{
			id: '21c95b7f-47d0-487b-99c1-bf93ee719081',
			primaryCoachId: '21c95b7f-47d0-487b-99c1-bf93ee719081',
			name: 'Southern Academy of Sciences',
			externalSchoolId: '14',
			state: 'FL',
			isVirtual: false,
			competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			streetAddress: '5501 River Road',
			city: 'Chicago',
			zipCode: '60611',
			phone: '3125550166',
			principalName: 'Mason Butler',
			principalEmail: 'butler.mason@gmail.com',
			division: 5,
			mutationIndex: 4
		},
		{
			id: '01651989-32f4-49a9-962d-742f47b3b0cb',
			primaryCoachId: '01651989-32f4-49a9-962d-742f47b3b0cb',
			name: 'Virtual Science Academy',
			externalSchoolId: '15',
			state: 'VA',
			isVirtual: true,
			competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			streetAddress: '7702 Pine Street',
			city: 'Atlanta',
			zipCode: '30308',
			phone: '4045550109',
			principalName: 'Sophia Simmons',
			principalEmail: 'simmons.sophia@gmail.com',
			division: 1,
			mutationIndex: 5
		}
	]);
	competitions = Enumerable.from<CompetitionResponseItem>([
		{
			id: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			name: 'Regional Science Competition',
			startsAt: new Date(),
			endsAt: new Date(),
			mutationIndex: 1,
			round: 2,
			nonRelativeEvents: ["Art", "Essay", "Economics", "Essay"],
			competitionAvailableStates: [
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'AL' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'AK' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'AZ' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'AR' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'CA' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'CO' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'CT' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'DE' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'FL' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'GA' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'HI' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'ID' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'IL' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'IN' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'IA' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'KS' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'KY' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'LA' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'ME' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'MD' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'MA' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'MI' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'MN' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'MS' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'MO' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'MT' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'NE' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'NV' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'NH' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'NJ' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'NM' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'NY' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'NC' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'ND' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'OH' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'OK' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'OR' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'PA' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'RI' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'SC' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'SD' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'TN' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'TX' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'UT' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'VT' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'VA' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'WA' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'WV' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'WI' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'WY' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'AA' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'AE' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'AP' },
				{ competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de', state: 'DC' }
			]
		}
	]);
	teams = Enumerable.from<TeamResponseItem>([
		{
			id: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			schoolId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			externalTeamId: '101',
			division: 1,
			objectiveScore: 85,
			subjectiveScore: 90
		},
		{
			id: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			schoolId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			externalTeamId: '111',
			division: 2,
			objectiveScore: 88,
			subjectiveScore: 92
		},
		{
			id: 'f67bcd35-f6c9-4278-8949-18814ab1ee31',
			schoolId: 'f67bcd35-f6c9-4278-8949-18814ab1ee31',
			externalTeamId: '121',
			division: 1,
			objectiveScore: 90,
			subjectiveScore: 85
		},
		{
			id: 'c3611b9f-b416-48af-9347-95c48ed060a8',
			schoolId: 'c3611b9f-b416-48af-9347-95c48ed060a8',
			externalTeamId: '131',
			division: 2,
			objectiveScore: 87,
			subjectiveScore: 89
		},
		{
			id: '21c95b7f-47d0-487b-99c1-bf93ee719081',
			schoolId: '21c95b7f-47d0-487b-99c1-bf93ee719081',
			externalTeamId: '141',
			division: 1,
			objectiveScore: 92,
			subjectiveScore: 91
		},
		{
			id: '01651989-32f4-49a9-962d-742f47b3b0cb',
			schoolId: '01651989-32f4-49a9-962d-742f47b3b0cb',
			externalTeamId: '151',
			division: 2,
			objectiveScore: 80,
			subjectiveScore: 82
		}
	]);
	students = Enumerable.from<StudentResponseItem>([
		{
			id: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			teamId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			schoolId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'H',
			gpa: 3.9,
			externalStudentId: '1011',
			firstName: 'James',
			lastName: 'Miller',
			mutationIndex: 0
		},
		{
			id: 'aacee28b-6040-4ba7-b2a1-cee3f2068c2a',
			teamId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			schoolId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'H',
			gpa: 3.9,
			externalStudentId: '1012',
			firstName: 'Olivia',
			lastName: 'Smith',
			mutationIndex: 1
		},
		{
			id: '49476cc2-048f-4d16-bf98-b9b87aa50077',
			teamId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			schoolId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'H',
			gpa: 3.9,
			externalStudentId: '1013',
			firstName: 'Liam',
			lastName: 'Johnson',
			mutationIndex: 2
		},
		{
			id: '080bce17-748b-402e-b44b-e1629a3782af',
			teamId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			schoolId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'S',
			gpa: 3.4,
			externalStudentId: '1014',
			firstName: 'Emma',
			lastName: 'Williams',
			mutationIndex: 3
		},
		{
			id: '2cd17e6f-a3d4-4a2a-9bb5-e8da24d733c3',
			teamId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			schoolId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'S',
			gpa: 3.4,
			externalStudentId: '1015',
			firstName: 'Noah',
			lastName: 'Brown',
			mutationIndex: 4
		},
		{
			id: 'ff465620-e097-4f80-8da6-ab846ee0938e',
			teamId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			schoolId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'S',
			gpa: 3.4,
			externalStudentId: '1016',
			firstName: 'Ava',
			lastName: 'Jones',
			mutationIndex: 5
		},
		{
			id: '825d4d26-405a-48b7-87a3-1093323d9b24',
			teamId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			schoolId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'V',
			gpa: 2.8,
			externalStudentId: '1017',
			firstName: 'Oliver',
			lastName: 'Garcia',
			mutationIndex: 6
		},
		{
			id: '6b1ceadc-d7a1-457d-8e89-6cf99dd320ff',
			teamId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			schoolId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'V',
			gpa: 2.8,
			externalStudentId: '1018',
			firstName: 'Sophia',
			lastName: 'Miller',
			mutationIndex: 7
		},
		{
			id: 'de63cd76-05e1-4633-a81b-dcb635fbab4f',
			teamId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			schoolId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'V',
			gpa: 2.8,
			externalStudentId: '1019',
			firstName: 'Lucas',
			lastName: 'Davis',
			mutationIndex: 8
		},
		{
			id: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			teamId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			schoolId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'H',
			gpa: 3.9,
			externalStudentId: '1111',
			firstName: 'Mia',
			lastName: 'Rodriguez',
			mutationIndex: 9
		},
		{
			id: '2e577ebb-3ed4-4a5d-b96f-38aba22472e1',
			teamId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			schoolId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'H',
			gpa: 3.9,
			externalStudentId: '1112',
			firstName: 'Benjamin',
			lastName: 'Martinez',
			mutationIndex: 10
		},
		{
			id: '292b4a8f-b675-4459-9761-1c729b6e364a',
			teamId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			schoolId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'H',
			gpa: 3.9,
			externalStudentId: '1113',
			firstName: 'Charlotte',
			lastName: 'Hernandez',
			mutationIndex: 11
		},
		{
			id: '51998bc9-c126-4ead-90c4-4551a0abf76b',
			teamId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			schoolId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'S',
			gpa: 3.4,
			externalStudentId: '1114',
			firstName: 'Ethan',
			lastName: 'Lopez',
			mutationIndex: 12
		},
		{
			id: '16b4468a-5f27-4b17-98cf-9b94524b425d',
			teamId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			schoolId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'S',
			gpa: 3.4,
			externalStudentId: '1115',
			firstName: 'Amelia',
			lastName: 'Gonzalez',
			mutationIndex: 13
		},
		{
			id: '9d18ea73-5e14-453c-9f5a-02489cd8299e',
			teamId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			schoolId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'S',
			gpa: 3.4,
			externalStudentId: '1116',
			firstName: 'Alex',
			lastName: 'Wilson',
			mutationIndex: 14
		},
		{
			id: '76264e0b-e6d9-4d92-ab3d-9bdf67aa3e54',
			teamId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			schoolId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'V',
			gpa: 2.8,
			externalStudentId: '1117',
			firstName: 'Isabella',
			lastName: 'Anderson',
			mutationIndex: 15
		},
		{
			id: '7c5591ff-2b19-4e05-98d8-22f88524dd88',
			teamId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			schoolId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'V',
			gpa: 2.8,
			externalStudentId: '1118',
			firstName: 'Henry',
			lastName: 'Thomas',
			mutationIndex: 16
		},
		{
			id: 'f67bcd35-f6c9-4278-8949-18814ab1ee31',
			teamId: 'f67bcd35-f6c9-4278-8949-18814ab1ee31',
			schoolId: 'f67bcd35-f6c9-4278-8949-18814ab1ee31',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'H',
			gpa: 3.9,
			externalStudentId: '1211',
			firstName: 'Harper',
			lastName: 'Taylor',
			mutationIndex: 17
		},
		{
			id: '3e70e81f-f5e1-4212-ba37-1c38e50bb866',
			teamId: 'f67bcd35-f6c9-4278-8949-18814ab1ee31',
			schoolId: 'f67bcd35-f6c9-4278-8949-18814ab1ee31',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'H',
			gpa: 3.9,
			externalStudentId: '1212',
			firstName: 'Sebastian',
			lastName: 'Moore',
			mutationIndex: 18
		},
		{
			id: '11a4fa9b-3820-4c1e-8196-053f60b72d68',
			teamId: 'f67bcd35-f6c9-4278-8949-18814ab1ee31',
			schoolId: 'f67bcd35-f6c9-4278-8949-18814ab1ee31',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'H',
			gpa: 3.9,
			externalStudentId: '1213',
			firstName: 'Evelyn',
			lastName: 'Jackson',
			mutationIndex: 19
		},
		{
			id: '72739130-5a04-47c3-b0bd-76147de59a5d',
			teamId: 'f67bcd35-f6c9-4278-8949-18814ab1ee31',
			schoolId: 'f67bcd35-f6c9-4278-8949-18814ab1ee31',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'S',
			gpa: 3.4,
			externalStudentId: '1214',
			firstName: 'Jack',
			lastName: 'Martin',
			mutationIndex: 20
		},
		{
			id: '75e36127-d814-4340-a3bd-91f8ae890f6e',
			teamId: 'f67bcd35-f6c9-4278-8949-18814ab1ee31',
			schoolId: 'f67bcd35-f6c9-4278-8949-18814ab1ee31',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'S',
			gpa: 3.4,
			externalStudentId: '1215',
			firstName: 'Abigail',
			lastName: 'Lee',
			mutationIndex: 21
		},
		{
			id: 'c3611b9f-b416-48af-9347-95c48ed060a8',
			teamId: 'c3611b9f-b416-48af-9347-95c48ed060a8',
			schoolId: 'c3611b9f-b416-48af-9347-95c48ed060a8',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'H',
			gpa: 3.9,
			externalStudentId: '1311',
			firstName: 'Daniel',
			lastName: 'Perez',
			mutationIndex: 22
		},
		{
			id: '1cf17dd3-77c8-493b-93d7-1d26d289a416',
			teamId: 'c3611b9f-b416-48af-9347-95c48ed060a8',
			schoolId: 'c3611b9f-b416-48af-9347-95c48ed060a8',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'H',
			gpa: 3.9,
			externalStudentId: '1312',
			firstName: 'Emily',
			lastName: 'Thompson',
			mutationIndex: 23
		},
		{
			id: '9a75d5b3-2df2-4939-9626-23bbdeb117d9',
			teamId: 'c3611b9f-b416-48af-9347-95c48ed060a8',
			schoolId: 'c3611b9f-b416-48af-9347-95c48ed060a8',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'H',
			gpa: 3.9,
			externalStudentId: '1313',
			firstName: 'William',
			lastName: 'White',
			mutationIndex: 24
		},
		{
			id: '5bc3db05-28e8-4516-82af-09f2fcb1b29b',
			teamId: 'c3611b9f-b416-48af-9347-95c48ed060a8',
			schoolId: 'c3611b9f-b416-48af-9347-95c48ed060a8',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'S',
			gpa: 3.4,
			externalStudentId: '1314',
			firstName: 'Elizabeth',
			lastName: 'Harris',
			mutationIndex: 25
		},
		{
			id: '8588bd34-d0cc-420b-b599-92c7edbbcb95',
			teamId: 'c3611b9f-b416-48af-9347-95c48ed060a8',
			schoolId: 'c3611b9f-b416-48af-9347-95c48ed060a8',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'S',
			gpa: 3.4,
			externalStudentId: '1315',
			firstName: 'Michael',
			lastName: 'Sanchez',
			mutationIndex: 26
		},
		{
			id: '21c95b7f-47d0-487b-99c1-bf93ee719081',
			teamId: '21c95b7f-47d0-487b-99c1-bf93ee719081',
			schoolId: '21c95b7f-47d0-487b-99c1-bf93ee719081',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'H',
			gpa: 3.9,
			externalStudentId: '1411',
			firstName: 'Sofia',
			lastName: 'Clark',
			mutationIndex: 27
		},
		{
			id: 'bf2e8b11-c9c7-4eab-9923-7245e47565fd',
			teamId: '21c95b7f-47d0-487b-99c1-bf93ee719081',
			schoolId: '21c95b7f-47d0-487b-99c1-bf93ee719081',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'H',
			gpa: 3.9,
			externalStudentId: '1412',
			firstName: 'Owen',
			lastName: 'Ramirez',
			mutationIndex: 28
		},
		{
			id: '8cfde76f-be5d-4262-806b-a0d5ef7c55cc',
			teamId: '21c95b7f-47d0-487b-99c1-bf93ee719081',
			schoolId: '21c95b7f-47d0-487b-99c1-bf93ee719081',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'H',
			gpa: 3.9,
			externalStudentId: '1413',
			firstName: 'Avery',
			lastName: 'Lewis',
			mutationIndex: 29
		},
		{
			id: '01651989-32f4-49a9-962d-742f47b3b0cb',
			teamId: '01651989-32f4-49a9-962d-742f47b3b0cb',
			schoolId: '01651989-32f4-49a9-962d-742f47b3b0cb',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'H',
			gpa: 3.9,
			externalStudentId: '1511',
			firstName: 'Samuel',
			lastName: 'Robinson',
			mutationIndex: 30
		},
		{
			id: '1e0c58f4-12bf-48a2-959d-f806f5d07104',
			teamId: '01651989-32f4-49a9-962d-742f47b3b0cb',
			schoolId: '01651989-32f4-49a9-962d-742f47b3b0cb',
			streetAddress: null,
			city: null,
			state: null,
			zipCode: null,
			guardianLastName: null,
			guardianFirstName: null,
			guardianPhone: null,
			guardianEmail: null,
			attachmentOnRegistering: 'https://api.printnode.com/static/test/pdf/a4_500_pages.pdf',
			division: 'H',
			gpa: 3.9,
			externalStudentId: '1512',
			firstName: 'Luna',
			lastName: 'Walker',
			mutationIndex: 31
		}
	]);
	events = Enumerable.from<EventResponseItem>([
		{
			endsAt: new Date(),
			id: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			name: 'Speech',
			type: 'Speech',
			startsAt: new Date(),
			competitionId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			mutationIndex: 32
		}
	]);
	eventCheckIns = Enumerable.from<EventCheckInItem>([
		{
			studentId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			eventId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			checkedInAt: new Date(),
			mutationIndex: 10
		}
	]);
	coaches = Enumerable.from<CoachResponseItem>([
		{
			externalCoachId: '1011',
			email: 'john.doe@gmail.com',
			firstName: 'John',
			id: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			lastName: 'Doe',
			phone: '5551234567',
			schoolId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			mutationIndex: 33
		},
		{
			externalCoachId: '1012',
			email: 'jane.doe@gmail.com',
			firstName: 'Jane',
			id: 'aacee28b-6040-4ba7-b2a1-cee3f2068c2a',
			lastName: 'Doe',
			phone: '5554974267',
			schoolId: 'aea66d9b-cc3e-42e2-87c6-2f527bf789de',
			mutationIndex: 34
		},
		{
			externalCoachId: '1111',
			email: 'tores.que@gmail.com',
			firstName: 'Tores',
			id: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			lastName: 'Que',
			phone: '5559876543',
			schoolId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			mutationIndex: 35
		},
		{
			externalCoachId: '1112',
			email: 'mike.rionel@gmail.com',
			firstName: 'Mike',
			id: '2e577ebb-3ed4-4a5d-b96f-38aba22472e1',
			lastName: 'Rionel',
			phone: '5555647382',
			schoolId: '20bd6771-a683-4b0e-b37d-eed53ff799d4',
			mutationIndex: 36
		},
		{
			externalCoachId: '1211',
			email: 'turos.qubic@gmail.com',
			firstName: 'Turos',
			id: 'f67bcd35-f6c9-4278-8949-18814ab1ee31',
			lastName: 'Qubic',
			phone: '5550192837',
			schoolId: 'f67bcd35-f6c9-4278-8949-18814ab1ee31',
			mutationIndex: 37
		},
		{
			externalCoachId: '1212',
			email: 'male.tonal@gmail.com',
			firstName: 'Male',
			id: '3e70e81f-f5e1-4212-ba37-1c38e50bb866',
			lastName: 'Tonal',
			phone: '5555647382',
			schoolId: 'f67bcd35-f6c9-4278-8949-18814ab1ee31',
			mutationIndex: 38
		},
		{
			externalCoachId: '1311',
			email: 'female.tonal@gmail.com',
			firstName: 'Female',
			id: 'c3611b9f-b416-48af-9347-95c48ed060a8',
			lastName: 'Tonal',
			phone: '5550192837',
			schoolId: 'c3611b9f-b416-48af-9347-95c48ed060a8',
			mutationIndex: 39
		},
		{
			externalCoachId: '1312',
			email: 'ace.tracy@gmail.com',
			firstName: 'Ace',
			id: '1cf17dd3-77c8-493b-93d7-1d26d289a416',
			lastName: 'Tracy',
			phone: '5555647382',
			schoolId: 'c3611b9f-b416-48af-9347-95c48ed060a8',
			mutationIndex: 40
		},
		{
			externalCoachId: '1411',
			email: 'tomas.trudy@gmail.com',
			firstName: 'Tomas',
			id: '21c95b7f-47d0-487b-99c1-bf93ee719081',
			lastName: 'Trudy',
			phone: '5550192837',
			schoolId: '21c95b7f-47d0-487b-99c1-bf93ee719081',
			mutationIndex: 41
		},
		{
			externalCoachId: '1412',
			email: 'dick.grason@gmail.com',
			firstName: 'Dick',
			id: '1e0c58f4-12bf-48a2-959d-f806f5d07104',
			lastName: 'Grason',
			phone: '5552472670',
			schoolId: '21c95b7f-47d0-487b-99c1-bf93ee719081',
			mutationIndex: 42
		},
		{
			externalCoachId: '1511',
			email: 'mark.guman@gmail.com',
			firstName: 'Mark',
			id: '01651989-32f4-49a9-962d-742f47b3b0cb',
			lastName: 'Guman',
			phone: '5553519422',
			schoolId: '01651989-32f4-49a9-962d-742f47b3b0cb',
			mutationIndex: 43
		},
		{
			externalCoachId: '1512',
			email: 'tim.cook@gmail.com',
			firstName: 'Tim',
			id: 'bf2e8b11-c9c7-4eab-9923-7245e47565fd',
			lastName: 'Cook',
			phone: '3627252128',
			schoolId: '01651989-32f4-49a9-962d-742f47b3b0cb',
			mutationIndex: 44
		}
	]);
	async _mockDelay() {
		return new Promise((resolve) => setTimeout(() => resolve(undefined), 500));
	}
	testTeam({id}: TeamResponseItem, input: z.infer<typeof teamQuerySchema>) {
		let result = true;
		if (
			input.where?.id &&
			typeof input.where.id !== undefined
		) {
			if (typeof input.where.id === 'string'){
				result = result && id === input.where.id;
			} else if (typeof input.where.id !== 'string' && typeof input.where.id.equals === 'string'){
				result = result && id === input.where.id.equals;
			} else if (typeof input.where.id !== 'string' && typeof input.where.id.in === 'object' && isArray(input.where.id.in)){
				result = result && (isArray(input.where.id.in) ? input.where.id.in.includes(id) : true);
			}
		}
		return result;
	}
	async getTeam(input: z.infer<typeof teamQuerySchema>) {
		const { data, success } = z.safeParse(studentQuerySchema, input);
		const result = this.teams
			.select((e) => e)
			.skip(data?.skip ?? 0)
			.where((e) => this.testTeam(e, input))
			.take(data?.take ?? 10)
			.toArray();
		const count = this.teams.where((e) => this.testTeam(e, input)).count();
		await this._mockDelay();
		return {
			result,
			count
		};
	}
	async getStudent(input: z.infer<typeof studentQuerySchema>) {
		const test = ({ firstName, lastName, externalStudentId, id }: StudentResponseItem) => {
			let result = true;
			if (
				input.where?.firstName &&
				typeof input.where.firstName !== undefined &&
				typeof input.where.firstName !== 'string' &&
				typeof input.where.firstName.contains === 'string'
			) {
				result =
					result && firstName?.toLowerCase().includes(input.where.firstName.contains.toLowerCase());
			}
			if (
				input.where?.lastName &&
				typeof input.where.lastName !== undefined &&
				typeof input.where.lastName !== 'string' &&
				typeof input.where.lastName.contains === 'string'
			) {
				result =
					result && lastName?.toLowerCase().includes(input.where.lastName.contains.toLowerCase());
			}
			if (
				input.where?.externalStudentId &&
				typeof input.where.externalStudentId !== undefined &&
				typeof input.where.externalStudentId !== 'string' &&
				typeof input.where.externalStudentId.equals === 'string'
			) {
				result =
					result &&
					(externalStudentId
						?.toLowerCase()
						.includes(input.where.externalStudentId.equals.toLowerCase()) ??
						true);
			}
			if (
				input.where?.id &&
				typeof input.where.id !== undefined &&
				typeof input.where.id !== 'string' &&
				typeof input.where.id.in === 'object' &&
				isArray(input.where.id.in)
			) {
				result = result && (isArray(input.where.id.in) ? input.where.id.in.includes(id) : true);
			}
			return result;
		};
		const result = this.students
			.select((e) => e)
			.where(test)
			.skip(input.skip ?? 0)
			.take(input.take ?? 10)
			.toArray();
		const count = this.students.count();
		await this._mockDelay();
		return {
			result,
			count
		};
	}
	async getCoach(input: z.infer<typeof coachQuerySchema>) {
		const result = this.coaches
			.select((e) => e)
			.skip(input?.skip ?? 0)
			.where((e) => this.testCoach(e, input))
			.take(input?.take ?? 10)
			.toArray();
		const count = this.coaches.where((e) => this.testCoach(e, input)).count();
		await this._mockDelay();
		return {
			result,
			count
		};
	}
	async getSchool(input: z.infer<typeof schoolQuerySchema>) {
		const result = this.schools
			.select((e) => e)
			.skip(input?.skip ?? 0)
			.where((e) => this.testSchool(e, input))
			.take(input?.take ?? 10)
			.toArray();
		const count = this.schools.where((e) => this.testSchool(e, input)).count();
		await this._mockDelay();
		return {
			result,
			count
		};
	}
	async updateTeam(
		inputs: {
			where: z.infer<typeof teamQuerySchema>['where'];
			data: Partial<TeamResponseItem>;
		}[]
	) {
		await this._mockDelay();
		this.teams.forEach((t, i) => {
			inputs.forEach((input) => {
				if (this.testTeam(t, { where: input.where })) {
					for (const key in input.data) {
						// @ts-ignore
						t[key as keyof TeamResponseItem] = input.data[key as keyof TeamResponseItem];
					}
				}
			});
		});
	}
	async updateCompetition(
		inputs: {
			where: z.infer<typeof competitionQuerySchema>['where'];
			data: Partial<CompetitionResponseItem>;
		}[]
	) {
		await this._mockDelay();
		this.competitions.forEach((c, i) => {
			inputs.forEach((input) => {
				if (this.testCompetition(c, { where: input.where })) {
					for (const key in input.data) {
						// @ts-ignore
						c[key as keyof CompetitionResponseItem] =
							input.data[key as keyof CompetitionResponseItem];
					}
				}
			});
		});
	}
	async updateCoach(
		inputs: {
			where: z.infer<typeof coachQuerySchema>['where'];
			data: Partial<CoachResponseItem>;
		}[]
	) {
		await this._mockDelay();
		this.coaches.forEach((c, i) => {
			inputs.forEach((input) => {
				if (this.testCoach(c, { where: input.where })) {
					for (const key in input.data) {
						// @ts-ignore
						c[key as keyof CoachResponseItem] = input.data[key as keyof CoachResponseItem];
					}
				}
			});
		});
	}
	async updateEvent(
		inputs: {
			where: z.infer<typeof eventQuerySchema>['where'];
			data: Partial<EventResponseItem>;
		}[]
	) {
		await this._mockDelay();
		this.events.forEach((e, i) => {
			inputs.forEach((input) => {
				if (this.testEvent(e, { where: input.where })) {
					for (const key in input.data) {
						// @ts-ignore
						e[key as keyof EventResponseItem] = input.data[key as keyof EventResponseItem];
					}
				}
			});
		});
	}
	async updateSchool(
		inputs: {
			where: z.infer<typeof schoolQuerySchema>['where'];
			data: Partial<SchoolItemType>;
		}[]
	) {
		await this._mockDelay();
		this.schools.forEach((s, i) => {
			inputs.forEach((input) => {
				if (this.testSchool(s, { where: input.where })) {
					for (const key in input.data) {
						// @ts-ignore
						s[key as keyof SchoolItemType] = input.data[key as keyof SchoolItemType];
					}
				}
			});
		});
	}
	async insertNewCompetition(competition: Omit<CompetitionResponseItem, 'id'>) {
		this.competitions = Enumerable.from<CompetitionResponseItem>([
			...this.competitions.toArray(),
			{
				...competition,
				id: this.generateNewCompetitionId()
			}
		]);
		await this._mockDelay();
	}
	async insertNewTeam(team: Omit<TeamResponseItem, 'id'>) {
		this.teams = Enumerable.from<TeamResponseItem>([
			...this.teams.toArray(),
			{
				...team,
				id: this.generateNewTeamId()
			}
		]);
		await this._mockDelay();
	}
	async insertNewCoach(coach: Omit<CoachResponseItem, 'id'>) {
		this.coaches = Enumerable.from<CoachResponseItem>([
			...this.coaches.toArray(),
			{
				...coach,
				id: this.generateNewCoachId()
			}
		]);
		await this._mockDelay();
	}
	async insertNewEvent(event: Omit<EventResponseItem, 'id'>) {
		this.events = Enumerable.from<EventResponseItem>([
			...this.events.toArray(),
			{
				...event,
				id: this.generateNewEventId()
			}
		]);
		await this._mockDelay();
	}
	async insertNewSchool(school: Omit<SchoolItemType, 'id'>) {
		this.schools = Enumerable.from<SchoolItemType>([
			...this.schools.toArray(),
			{
				...school,
				id: this.generateNewSchoolId()
			}
		]);
		await this._mockDelay();
	}
	async deleteEvent(input: z.infer<typeof eventQuerySchema>) {
		await this._mockDelay();
		this.events = this.events.where((e) => !this.testEvent(e, input));
	}
	async deleteTeam(input: z.infer<typeof teamQuerySchema>) {
		await this._mockDelay();
		this.teams = this.teams.where((t) => !this.testTeam(t, input));
	}
	async deleteCompetitions(input: z.infer<typeof competitionQuerySchema>) {
		await this._mockDelay();
		this.competitions = this.competitions.where((c) => !this.testCompetition(c, input));
		//TODO: Also delete related entities
	}
	async deleteCoaches(input: z.infer<typeof coachQuerySchema>) {
		await this._mockDelay();
		this.coaches = this.coaches.where((c) => !this.testCoach(c, input));
	}
	async deleteSchools(input: z.infer<typeof schoolQuerySchema>) {
		await this._mockDelay();
		this.schools = this.schools.where((s) => !this.testSchool(s, input));
	}
	generateNewCompetitionId() {
		const ids = this.competitions.select((c) => c.id).toArray();
		let newId: string;
		do {
			newId = crypto.randomUUID();
		} while (ids.includes(newId));
		return newId;
	}
	generateNewTeamId() {
		const ids = this.teams.select((t) => t.id).toArray();
		let newId: string;
		do {
			newId = crypto.randomUUID();
		} while (ids.includes(newId));
		return newId;
	}
	generateNewSchoolId() {
		const ids = this.schools.select((s) => s.id).toArray();
		let newId: string;
		do {
			newId = crypto.randomUUID();
		} while (ids.includes(newId));
		return newId;
	}
	generateNewCoachId() {
		const ids = this.coaches.select((c) => c.id).toArray();
		let newId: string;
		do {
			newId = crypto.randomUUID();
		} while (ids.includes(newId));
		return newId;
	}
	generateNewEventId() {
		const ids = this.events.select((e) => e.id).toArray();
		let newId: string;
		do {
			newId = crypto.randomUUID();
		} while (ids.includes(newId));
		return newId;
	}
	testSchool({ name, externalSchoolId, id }: SchoolItemType, input: z.infer<typeof schoolQuerySchema>) {
		let result = true;
		if (
			input.where?.name &&
			typeof input.where.name !== undefined &&
			typeof input.where.name !== 'string' &&
			typeof input.where.name.contains === 'string'
		) {
			result = result && name?.toLowerCase().includes(input.where.name.contains.toLowerCase());
		}
		if (
			input.where?.externalSchoolId &&
			typeof input.where.externalSchoolId !== undefined &&
			typeof input.where.externalSchoolId !== 'string' &&
			typeof input.where.externalSchoolId.contains === 'string'
		) {
			result =
				result &&
				(externalSchoolId
					?.toLowerCase()
					?.includes(input.where.externalSchoolId.contains.toLowerCase()) ??
					false);
		}
		if (
			input.where?.id &&
			typeof input.where.id !== undefined
		) {
			if (typeof input.where.id === 'string') {
				result = result && input.where.id === id;
			} else if (typeof input.where.id === 'object') {
				if (isArray(input.where.id.in)) {
					result = result && input.where.id.in.includes(id);
				} else if (input.where.id.equals) {
					result = result && input.where.id.equals === id;
				}
			}
		}
		return result;
	}
	testCoach({ firstName, lastName, externalCoachId, id }: CoachResponseItem, input: z.infer<typeof coachQuerySchema>) {
		let result = true;
		if (
			input.where?.firstName &&
			typeof input.where.firstName !== undefined &&
			typeof input.where.firstName !== 'string' &&
			typeof input.where.firstName.contains === 'string'
		) {
			result =
				result && firstName?.toLowerCase().includes(input.where.firstName.contains.toLowerCase());
		}
		if (
			input.where?.lastName &&
			typeof input.where.lastName !== undefined &&
			typeof input.where.lastName !== 'string' &&
			typeof input.where.lastName.contains === 'string'
		) {
			result =
				result && lastName?.toLowerCase().includes(input.where.lastName.contains.toLowerCase());
		}
		if (
			input.where?.externalCoachId &&
			typeof input.where.externalCoachId !== undefined &&
			typeof input.where.externalCoachId !== 'string' &&
			typeof input.where.externalCoachId.contains === 'string'
		) {
			result =
				result &&
				(externalCoachId
					?.toLowerCase()
					?.includes(input.where.externalCoachId.contains.toLowerCase()) ??
					false);
		}
		if (input.where?.id) {
			if (typeof input.where.id === 'string') {
				result = result && input.where.id === id;
			} else if (typeof input.where.id === 'object') {
				if (input.where.id.equals) {
					result = result && input.where.id.equals === id;
				} else if (isArray(input.where.id.in)) {
					result = result && input.where.id.in.includes(id);
				}
			}
		}
		return result;
	}
	testCompetition(
		{ name, startsAt, endsAt, competitionAvailableStates, id }: CompetitionResponseItem,
		input: z.infer<typeof competitionQuerySchema>
	) {
		let result = true;
		if (input.where) {
			const { where } = input;
			if (
				typeof where.name !== undefined &&
				typeof where.name !== 'string' &&
				typeof where.name?.contains === 'string'
			) {
				result = result && name.includes(where.name.contains);
			}
			if (
				typeof where.startsAt === 'object' &&
				'lte' in where.startsAt &&
				moment.isDate(where.startsAt.lte)
			) {
				result = result && moment(startsAt).isSameOrBefore(moment(where.startsAt.lte!));
			}
			if (
				typeof where.startsAt === 'object' &&
				'gte' in where.startsAt &&
				moment.isDate(where.startsAt.gte)
			) {
				result = result && moment(startsAt).isSameOrBefore(moment(where.startsAt.gte!));
			}
			if (
				typeof where.endsAt === 'object' &&
				'lte' in where.endsAt &&
				moment.isDate(where.endsAt.lte)
			) {
				result = result && moment(endsAt).isSameOrBefore(moment(where.endsAt.lte!));
			}
			if (
				typeof where.endsAt === 'object' &&
				'gte' in where.endsAt &&
				moment.isDate(where.endsAt.gte)
			) {
				result = result && moment(endsAt).isSameOrBefore(moment(where.endsAt.gte!));
			}
			if (
				typeof where.competitionAvailableStates === 'object' &&
				typeof where.competitionAvailableStates.some?.state === 'object' &&
				typeof where.competitionAvailableStates.some!.state?.in === 'object' &&
				isArray(where.competitionAvailableStates.some?.state?.in)
			) {
				result =
					result &&
					competitionAvailableStates.some(({ state }) =>
						(
							where.competitionAvailableStates!.some!.state! as {
								in: Array<z.infer<typeof stateEnums>>;
							}
						).in.includes(state)
					);
			}
			if (typeof where.id === 'object' && typeof where.id.in === 'object' && isArray(where.id.in)) {
				result = result && where.id.in.includes(id);
			}
		}
		return result;
	}
	async getCompetition(input: z.infer<typeof competitionQuerySchema>) {
		const result = this.competitions
			.select((e) => e)
			.skip(input?.skip ?? 0)
			.where((c) => this.testCompetition(c, input))
			.take(input?.take ?? 10)
			.toArray();
		const count = this.competitions.where((c) => this.testCompetition(c, input)).count();
		await this._mockDelay();
		return {
			result,
			count
		};
	}
	testEvent({ name, type, startsAt, endsAt, competitionId, id }: EventResponseItem, input: z.infer<typeof eventQuerySchema>) {
		let result = true;
		if (input.where) {
			const { where } = input;
			if (
				typeof where.name !== undefined &&
				typeof where.name !== 'string' &&
				typeof where.name?.contains === 'string'
			) {
				result = result && name.includes(where.name.contains);
			}
			if (
				typeof where.startsAt === 'object' &&
				'lte' in where.startsAt &&
				moment.isDate(where.startsAt.lte)
			) {
				result = result && moment(startsAt).isSameOrBefore(moment(where.startsAt.lte!));
			}
			if (
				typeof where.startsAt === 'object' &&
				'gte' in where.startsAt &&
				moment.isDate(where.startsAt.gte)
			) {
				result = result && moment(startsAt).isSameOrBefore(moment(where.startsAt.gte!));
			}
			if (
				typeof where.endsAt === 'object' &&
				'lte' in where.endsAt &&
				moment.isDate(where.endsAt.lte)
			) {
				result = result && moment(endsAt).isSameOrBefore(moment(where.endsAt.lte!));
			}
			if (
				typeof where.endsAt === 'object' &&
				'gte' in where.endsAt &&
				moment.isDate(where.endsAt.gte)
			) {
				result = result && moment(endsAt).isSameOrBefore(moment(where.endsAt.gte!));
			}
			if (typeof where.competitionId === 'object') {
				if (typeof where.competitionId.equals === 'string') {
					result = result && competitionId === where.competitionId.equals;
				}
				if (typeof where.competitionId.in === 'object' && isArray(where.competitionId.in)) {
					result = result && where.competitionId.in.includes(competitionId);
				}
			}
		}
		return result;
	}
	async getEvents(input: z.infer<typeof eventQuerySchema>) {
		const result = this.events
			.select((e) => e)
			.skip(input?.skip ?? 0)
			.where((e) => this.testEvent(e, input))
			.take(input?.take ?? 10)
			.toArray();
		const count = this.events.where((e) => this.testEvent(e, input)).count();
		await this._mockDelay();
		return {
			result,
			count
		};
	}
	async getEventCheckIn(input: z.infer<typeof eventCheckInQuerySchema>) {
		const test = ({ studentId, eventId, checkedInAt }: EventCheckInItem) => {
			let result = true;
			if (input.where) {
			}
			return result;
		};
		const result = this.eventCheckIns
			.select((e) => e)
			.skip(input?.skip ?? 0)
			.where(test)
			.take(input?.take ?? 10)
			.toArray();
		const count = this.eventCheckIns.where(test).count();
		await this._mockDelay();
		return {
			result,
			count
		};
	}
}

const workerRequest = new WorkerRequest();
export { workerRequest };
