<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import { Container, Group, Stack } from '@svelteuidev/core';
	import { Image } from '@svelteuidev/core';

	export let data;
	export const getImageSrc = (/** @type {string} */ appId, /** @type {string} */ hash) =>
		`http://media.steampowered.com/steamcommunity/public/images/apps/${appId}/${hash}.jpg`;

	const { owned, recentlyPlayed } = data;

	console.log(recentlyPlayed.games);
</script>

<h1>Welcome to Yo list</h1>
<h2>Recently played: {recentlyPlayed['total_count']}</h2>
<Container override={{ bc: 'AliceBlue' }}>
	<Stack p={15}>
		{#each recentlyPlayed['games'] as game}
			<Group spacing={10}>
				<Image
					width={20}
					height={20}
					src={getImageSrc(game.appid, game['img_icon_url'])}
					usePlaceholder
				/>

				{game.name} - {`${(game['playtime_2weeks'] / 60).toFixed()} hours in 2 weeks`} - {`${(
					game['playtime_forever'] / 60
				).toFixed()} hours total`}
			</Group>
		{/each}
	</Stack>
</Container>

<h2>Owned games: {owned['game_count']}</h2>
<Container override={{ bc: 'AliceBlue' }}>
	<Stack p={15}>
		{#each owned['games'] as game}
			<Group spacing={10}>
				<Image
					width={20}
					height={20}
					src={getImageSrc(game.appid, game['img_icon_url'])}
					usePlaceholder
				/>

				{game.name}
			</Group>
		{/each}
	</Stack>
</Container>

<svelte:head>
	<title>{PUBLIC_APP_NAME}</title>
</svelte:head>
