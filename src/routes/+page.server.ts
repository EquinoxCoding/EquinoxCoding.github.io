import FAQ from '$lib/data/faq';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		faq: FAQ,
	};
};