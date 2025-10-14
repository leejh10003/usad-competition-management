import { redirect } from '@sveltejs/kit';
import type { PageData } from './$types';

export const load: PageData = () => {
  throw redirect(307, '/registration');
};