import axios from 'axios';
import { coachesInsertSchema, coachesResponseSchema, coachesUpdateSchema, coachQuerySchema, competitionQuerySchema, competitionsInsertSchema, competitionsResponse, competitionsUpdateSchema, eventQuerySchema, eventsResponseSchema, eventsUpdateSchema, fileUploadingFormSchema, fileUploadingResponseSchema, schoolQuerySchema, schoolsInsertSchema, schoolsResponse, schoolsUpdateSchema } from 'usad-scheme';
import z from 'zod';

class WorkerRequest {
	readonly API_DOMAIN;
	readonly axiosClient;
	constructor(apiHost: string) {
        this.API_DOMAIN = apiHost;
		this.axiosClient = axios.create({
			baseURL: `${this.API_DOMAIN}/api`
		});
	}
	//eslint-disable-next-line @typescript-eslint/no-explicit-any
	encodeSearchParams({ where, skip, take, orderBy }: { skip?: any; take?: any; where?: any; orderBy?: any; }): Record<string, string>{
		return {
			...(where ? { where: JSON.stringify(where)} : {}),
			...(skip ? { skip: JSON.stringify(skip)} : {}),
			...(take ? { take: JSON.stringify(take)} : {}),
			...(orderBy ? { orderBy: JSON.stringify(orderBy)} : {})
		}
	}
	readonly file = {
		upload: async (input: z.infer<typeof fileUploadingFormSchema>): Promise<z.infer<typeof fileUploadingResponseSchema>> => {
			const form = new FormData();
			form.append('file', input.file);
			form.append('fileKey', input.fileKey);
			form.append('index', input.index.toString());
			form.append('kind', input.kind);
			const { data } = await this.axiosClient.post<
				z.infer<typeof fileUploadingFormSchema>,
				{ data: z.infer<typeof fileUploadingResponseSchema> }
			>(`/files`, form, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			});
			return data;
		}
	}
    readonly event = {
        get: async (input: z.infer<typeof eventQuerySchema>): Promise<z.infer<typeof eventsResponseSchema>> => {
            const result = await this.axiosClient.get<
                never,
                {data: z.infer<typeof eventsResponseSchema>}
            >(`/events`, {
                params: this.encodeSearchParams(input)
            });
            return result.data;
        },
		update: async (input: z.infer<typeof eventsUpdateSchema>): Promise<z.infer<typeof eventsResponseSchema>> => {
			console.log(input);
			const result = await this.axiosClient.put<
				z.infer<typeof eventsUpdateSchema>,
				{ data: z.infer<typeof eventsResponseSchema>}
			>(`/events`, input);
			console.log(result);
			return result.data;
		}
    }
	readonly school = {
		get: async (input: z.infer<typeof schoolQuerySchema>): Promise<z.infer<typeof schoolsResponse>> => {
			const result = await this.axiosClient.get<
				never,
				{ data: z.infer<typeof schoolsResponse>}
			>(`/schools`, {
				params: this.encodeSearchParams(input)
			});
			return result.data;
		},
		update: async (input: z.infer<typeof schoolsUpdateSchema>): Promise<z.infer<typeof schoolsResponse>> => {
			const result = await this.axiosClient.put<
				z.infer<typeof schoolsUpdateSchema>,
				{ data: z.infer<typeof schoolsResponse>}
			>(`/schools`, input);
			return result.data;
		},
		create: async (input: z.infer<typeof schoolsInsertSchema>): Promise<z.infer<typeof schoolsResponse>> => {
			const result = await this.axiosClient.post<
				z.infer<typeof schoolsInsertSchema>,
				{ data: z.infer<typeof schoolsResponse>}
			>(`/schools`, input);
			return result.data;
		}
	}
	readonly coach = {
		get: async (input: z.infer<typeof coachQuerySchema>): Promise<z.infer<typeof coachesResponseSchema>> => {
			const result = await this.axiosClient.get<
				never,
				{ data: z.infer<typeof coachesResponseSchema>}
			>(`/coaches`, {
				params: this.encodeSearchParams(input)
			});
			return result.data;
		},
		create: async (input: z.infer<typeof coachesInsertSchema>): Promise<z.infer<typeof coachesResponseSchema>> => {
			const result = await this.axiosClient.post<
				z.infer<typeof coachesInsertSchema>,
				{ data: z.infer<typeof coachesResponseSchema>}
			>(`/coaches`, input);
			return result.data;
		},
		update: async (input: z.infer<typeof coachesUpdateSchema>): Promise<z.infer<typeof coachesResponseSchema>> => {
			const result = await this.axiosClient.put<
				z.infer<typeof coachesUpdateSchema>,
				{ data: z.infer<typeof coachesResponseSchema>}
			>(`/coaches`, input);
			return result.data;
		}
	}
	readonly competition = {
		get: async (input: z.infer<typeof competitionQuerySchema>): Promise<z.infer<typeof competitionsResponse>> => {
			const result = await this.axiosClient.get<
				never,
				{ data: z.infer<typeof competitionsResponse>}
			>(`/competitions`, {
				params: this.encodeSearchParams(input)
			});
			return result.data;
		},
        update: async (input: z.infer<typeof competitionsUpdateSchema>): Promise<z.infer<typeof competitionsResponse>> => {
            const result = await this.axiosClient.put<
                z.infer<typeof competitionsUpdateSchema>,
                { data: z.infer<typeof competitionsResponse>}
            >(`/competitions`, input);
            return result.data;
        },
        create: async (input: z.infer<typeof competitionsInsertSchema>): Promise<z.infer<typeof competitionsResponse>> => {
            const result = await this.axiosClient.post<
                z.infer<typeof competitionsInsertSchema>,
                { data: z.infer<typeof competitionsResponse>}
            >(`/competitions`, input);
            return result.data;
        }
	}
}
export { WorkerRequest };
