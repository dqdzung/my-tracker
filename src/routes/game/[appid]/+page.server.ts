import { PlayerService } from '../../../api/player-service';
import { fetchData, getGameInfoUrl } from '../../../api/service-helper';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  const appId = params.appid;

  const infoUrl = getGameInfoUrl(appId);

  const promises = [fetchData(infoUrl), PlayerService.getAchievements(appId), PlayerService.getGameStat(appId)];

  const res = await Promise.allSettled(promises);

  const infoRes = res[0]?.status === 'fulfilled' ? res[0].value : null;
  const cheevoRes = res[1]?.status === 'fulfilled' ? res[1].value : null;
  const gameStatRes = res[2]?.status === 'fulfilled' ? res[2].value : null;


  return { appData: infoRes[appId].data, achievements: cheevoRes?.playerstats?.achievements, playerStats: gameStatRes?.playerstats };
}) satisfies PageServerLoad;
