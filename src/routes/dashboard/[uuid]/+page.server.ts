import type { PageServerLoad } from './$types';

export const load = (({ params }) => {
	return {
		uuid: params.uuid
	};
}) satisfies PageServerLoad;
