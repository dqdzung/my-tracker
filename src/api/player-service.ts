import { fetchData, getUrl } from './service-helper';

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
		)
};
