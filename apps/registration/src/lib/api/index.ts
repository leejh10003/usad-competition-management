import axios from 'axios';
import { PUBLIC_WORKER_API_HOST } from '$env/static/public';
import { fileUploadingFormSchema, fileUploadingResponseSchema } from 'usad-scheme';
import z from 'zod';

class WorkerRequest {
	readonly API_DOMAIN = PUBLIC_WORKER_API_HOST;
	readonly axiosClient;
	constructor() {
		this.axiosClient = axios.create({
			baseURL: `${PUBLIC_WORKER_API_HOST}/api`
		});
	}
	async uploadFile(
		input: z.infer<typeof fileUploadingFormSchema>
	): Promise<z.infer<typeof fileUploadingResponseSchema>> {
		const form = new FormData();
		form.append('file', input.file);
		form.append('fileKey', input.fileKey);
		form.append('index', input.index.toString());
		form.append('kind', input.kind);
		const result = await this.axiosClient.post<
			z.infer<typeof fileUploadingFormSchema>,
			z.infer<typeof fileUploadingResponseSchema>
		>(`/files`, form, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
		return result;
	}
}

const workerRequest = new WorkerRequest();
export { workerRequest };
