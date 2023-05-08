export interface Game {
	appid: number;
	name: string;
	img_icon_url: string;
}

export interface OwnedGame extends Game {
	has_community_visible_stats: boolean;
	playtime_forever: number;
	playtime_linux_forever: number;
	playtime_mac_forever: number;
	playtime_windows_forever: number;
	rtime_last_played: number;
}

export interface ListOwned {
	game_count: number;
	games: OwnedGame[];
}

export interface RecentlyPlayedGame extends Game {
	playtime_2weeks: number;
	playtime_forever: number;
	playtime_linux_forever: number;
	playtime_mac_forever: number;
	playtime_windows_forever: number;
}

export interface ListRecentlyPlayed {
	total_count: number;
	games: RecentlyPlayedGame[];
}
