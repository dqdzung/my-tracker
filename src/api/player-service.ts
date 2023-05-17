import { fetchData, getPlayerGameCheevolUrl, getPlayerStatUrl, getUrl } from './service-helper';

export const PlayerService = {
  getOwnedGames: () =>
    fetchData(
      getUrl({
        apiInterface: 'IPlayerService',
        method: 'GetOwnedGames'
      })
    ),
  getRecentlyPlayedGames: () =>
    fetchData(
      getUrl({
        apiInterface: 'IPlayerService',
        method: 'GetRecentlyPlayedGames'
      })
    ),
  getAchievements: (appid: string | number) =>
    fetchData(
      getPlayerGameCheevolUrl(appid)
    ),
  getGameStat: (appid: string | number) =>
    fetchData(
      getPlayerStatUrl(appid)
    )
};
