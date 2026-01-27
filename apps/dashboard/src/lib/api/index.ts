import { PUBLIC_WORKER_API_HOST } from '$env/static/public';
import { WorkerRequest } from 'usad-api-request'

const workerRequest = new WorkerRequest(PUBLIC_WORKER_API_HOST);
export { workerRequest };
