import axios from 'axios';
import { competitionQuerySchema, competitionsInsertSchema, competitionsResponse, competitionsUpdateSchema, eventQuerySchema, eventsResponseSchema, fileUploadingFormSchema, fileUploadingResponseSchema } from 'usad-scheme';
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
                z.infer<typeof eventsResponseSchema>
            >(`/events`, {
                params: input
            });
            return result;
        }
    }
	readonly competition = {
		get: async (input: z.infer<typeof competitionQuerySchema>): Promise<z.infer<typeof competitionsResponse>> => {
			const result = await this.axiosClient.get<
				never,
				{ data: z.infer<typeof competitionsResponse>}
			>(`/competitions`, {
				params: input
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
