export const STEAM_API_INTERFACE = {
	IPlayerService: 'IPlayerService',
	INews: 'ISteamNews',
	ISteamUser: 'ISteamUser'
} as const;
export type SteamApiInterface = keyof typeof STEAM_API_INTERFACE;

export const PLAYER_SERVICE_METHOD = {
	GetOwnedGames: 'GetOwnedGames',
	GetRecentlyPlayedGames: 'GetRecentlyPlayedGames'
} as const;
export type PlayerServiceMethod = keyof typeof PLAYER_SERVICE_METHOD;

export const STEAM_API_METHOD: {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
} = {
	[STEAM_API_INTERFACE.IPlayerService]: PLAYER_SERVICE_METHOD
};

export type SteamApiMethod = PlayerServiceMethod;
