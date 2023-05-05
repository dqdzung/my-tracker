import { error } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';
// import { env } from '$env/dynamic/private';
import { PUBLIC_STEAM_API_HEADER, PUBLIC_STEAM_API_KEY } from '$env/static/public';

const myID = '76561198081886399'; // TEST

export const GET = (async () => {
	const url = getOwnedGames();

	const res = await fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		},
		mode: 'no-cors'
	});

	// if (!res.ok) {
	// 	throw error(500, "Steam's not responding...");
	// 	return;
	// }

	console.log('dmm',res);

	return new Response(String(res));
}) satisfies RequestHandler;

const getOwnedGames = (steamId?: string) =>
	`${PUBLIC_STEAM_API_HEADER}IPlayerService/GetRecentlyPlayedGames/v0001/?key=${PUBLIC_STEAM_API_KEY}&steamid=${
		steamId || myID
	}&format=json`;
