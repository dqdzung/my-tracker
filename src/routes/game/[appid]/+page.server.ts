import { fetchData, getGameInfoUrl } from '$api/service-helper.ts';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  const appId = params.appid;
  const url = getGameInfoUrl(appId);
  const res = await fetchData(url);
  return res[appId].data;
}) satisfies PageServerLoad;
