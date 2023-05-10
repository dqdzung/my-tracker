import { fetchData } from '../../../api/service-helper';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const appId = params.appid;
	const url = `http://store.steampowered.com/api/appdetails?appids=${appId}`;
	const res = await fetchData(url);
	return res[appId].data;
}) satisfies PageServerLoad;
