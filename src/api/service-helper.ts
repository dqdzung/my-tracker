import { PUBLIC_STEAM_API_HEADER, PUBLIC_STEAM_API_KEY } from '$env/static/public';
import { STEAM_API_METHOD, type SteamApiInterface, type SteamApiMethod } from '$root/constants';
import { error } from '@sveltejs/kit';

const myID = '76561198081886399'; // FOR TESTING ONLY

export const getUrl = ({
  steamId = myID, // FOR TESTING ONLY
  apiInterface,
  method
}: {
  steamId?: string;
  apiInterface: SteamApiInterface;
  method: SteamApiMethod;
}) => {
  let url = `${PUBLIC_STEAM_API_HEADER}${apiInterface}/${STEAM_API_METHOD[apiInterface][method]
    }/v0001/?key=${PUBLIC_STEAM_API_KEY}&steamid=${steamId || myID}&format=json`;

  if (method === 'GetOwnedGames') url += '&include_appinfo=true';

  return url;
};

export const fetchData = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw error(500, 'Something went wrong...');
  }
  return await res.json();
};

export const getImageSrc = (appId: number, hash: string) =>
  `http://media.steampowered.com/steamcommunity/public/images/apps/${appId}/${hash}.jpg`;

export const getStoreUrl = (appId: number | string) =>
  `https://store.steampowered.com/app/${appId}`

export const getGameInfoUrl = (appId: string | number) => `http://store.steampowered.com/api/appdetails?appids=${appId}&l=english`
