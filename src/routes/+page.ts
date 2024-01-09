import FAQ from '$lib/data/faq';
import SPONSORS from '$lib/data/sponsors';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		faq: FAQ,
		sponsors: SPONSORS
	};
};