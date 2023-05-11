/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlayerService } from '$api/player-service.ts';
import type { ListOwned, ListRecentlyPlayed } from '$models/game';

export const load = async () => {
  const res = await Promise.allSettled([
    PlayerService.getOwnedGames(),
    PlayerService.getRecentlyPlayedGames()
  ]);

  return {
    owned: (res[0] as any)?.value?.response as ListOwned,
    recentlyPlayed: (res[1] as any)?.value?.response as ListRecentlyPlayed
  };
};
