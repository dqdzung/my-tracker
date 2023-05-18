import { PlayerService } from '../../../api/player-service';
import { fetchData, getGameInfoUrl } from '../../../api/service-helper';
import type { AchievementItemModel } from '../../../models/achievementItem';
import type { GameDetail } from '../../../models/gameDetail';
import type { PlayerStat } from '../../../models/playerStat';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  const appId = params.appid;

  const infoUrl = getGameInfoUrl(appId);

  const promises = [fetchData(infoUrl), PlayerService.getAchievements(appId), PlayerService.getGameStat(appId)];

  const res = await Promise.allSettled(promises);

  const infoRes = res[0]?.status === 'fulfilled' ? res[0].value : null;
  const cheevoRes = res[1]?.status === 'fulfilled' ? res[1].value : null;
  const gameStatRes = res[2]?.status === 'fulfilled' ? res[2].value : null;

  return {
    appData: infoRes[appId].data as GameDetail,
    achievements: cheevoRes?.playerstats?.achievements as AchievementItemModel[],
    playerStats: gameStatRes?.playerstats as PlayerStat
  };
}) satisfies PageServerLoad;
