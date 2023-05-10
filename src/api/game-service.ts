import { fetchData, getUrl } from './service-helper';

export const GameService = {
	getGame: () =>
		fetchData(
			getUrl({
				apiInterface: 'IPlayerService',
				method: 'GetOwnedGames'
			})
		)
};
