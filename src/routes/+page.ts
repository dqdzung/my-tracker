/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlayerService } from './api/player-service';

export const load = async () => {
	const res = await Promise.allSettled([
		PlayerService.getOwnedGames(),
		PlayerService.getRecentlyPlayedGames()
	]);

	return {
		owned: (res[0] as any)?.value,
		recentlyPlayed: (res[1] as any)?.value
	};
};
