import { error } from '@sveltejs/kit';
import { getUrl } from '../../../service-helper';

const fetchData = async (url: string) => {
	const res = await fetch(url);
	if (!res.ok) {
		throw error(500, 'Something went wrong...');
	}
	const data = await res.json();
	return data.response;
};

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
