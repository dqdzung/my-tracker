<script lang="ts">
	import { Container, Stack, Group, Image, ActionIcon } from '@svelteuidev/core';
	import type { ListOwned, ListRecentlyPlayed } from '../models/game';
	import { slide } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	import { IconChevronDown, IconChevronUp } from '@tabler/icons-svelte';

	export let data: {
		recentlyPlayed: ListRecentlyPlayed;
		owned: ListOwned;
	};

	const { recentlyPlayed, owned } = data;

	const getImageSrc = (appId: number, hash: string) =>
		`http://media.steampowered.com/steamcommunity/public/images/apps/${appId}/${hash}.jpg`;

	let openRecent: boolean = false;
	let openOwned: boolean = false;
</script>

<div class="main-content">
	<Container>
		<Stack>
			<Group style="align-items: end">
				<h2>Recently played: {recentlyPlayed['total_count']}</h2>
				<ActionIcon on:click={() => (openRecent = !openRecent)}
					>{#if !openRecent}
						<IconChevronDown />
					{:else}
						<IconChevronUp />
					{/if}</ActionIcon
				>
			</Group>
			{#if openRecent}
				<div transition:slide>
					{#each recentlyPlayed.games as game}
						<Group spacing={10} my={15}>
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
				</div>
			{/if}
		</Stack>

		<Stack>
			<Group style="align-items: end">
				<h2>Owned games: {owned['game_count']}</h2>
				<ActionIcon on:click={() => (openOwned = !openOwned)}
					>{#if !openOwned}
						<IconChevronDown />
					{:else}
						<IconChevronUp />
					{/if}</ActionIcon
				>
			</Group>

			{#if openOwned}
				<div transition:slide>
					{#each owned.games as game}
						<Group spacing={10} my={15}>
							<Image
								width={20}
								height={20}
								src={getImageSrc(game.appid, game['img_icon_url'])}
								usePlaceholder
							/>

							{game.name}
						</Group>
					{/each}
				</div>
			{/if}
		</Stack>
	</Container>
</div>

<style>
	h2 {
		margin: 15px 0 0 0;
	}

	.main-content {
		background-color: #000000e6;
		color: white;
		margin-top: 45px;
		height: calc(100vh - 45px);
		overflow-y: scroll;
	}

	/* width */
	::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #888;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
</style>
