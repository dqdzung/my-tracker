<script lang="ts">
	import { Stack, Group } from '@svelteuidev/core';
	import { slide } from 'svelte/transition';
	import ListItem from './listItem.svelte';
	import type { ListOwned, ListRecentlyPlayed } from '$models/game';
	import ChevronActionIcon from './chevronActionIcon.svelte';

	export let data: {
		recentlyPlayed: ListRecentlyPlayed;
		owned: ListOwned;
	};

	const { recentlyPlayed, owned } = data;

	let openRecent: boolean = true;
	let openOwned: boolean = true;
</script>

<Stack spacing={0}>
	<Group style="align-items: end">
		<h2>Recently played: {recentlyPlayed?.['total_count'] || 0}</h2>
		<ChevronActionIcon open={openRecent} onClick={() => (openRecent = !openRecent)} />
	</Group>
	{#if openRecent}
		<div transition:slide>
			{#each recentlyPlayed?.games as game}
				<ListItem data={game}>
					{game.name} - {`${(game['playtime_2weeks'] / 60).toFixed()} hours in 2 weeks`} - {`${(
						game['playtime_forever'] / 60
					).toFixed()} hours total`}
				</ListItem>
			{/each}
		</div>
	{/if}
</Stack>

<Stack spacing={0}>
	<Group style="align-items: end">
		<h2>Owned games: {owned?.['game_count'] || 0}</h2>
		<ChevronActionIcon open={openOwned} onClick={() => (openOwned = !openOwned)} />
	</Group>

	{#if openOwned}
		<div transition:slide>
			{#each owned.games as game}
				<ListItem data={game}>
					{game.name}
				</ListItem>
			{/each}
		</div>
	{/if}
</Stack>

<style>
	h2 {
		color: white;
		margin: 15px 0 0 0;
	}
</style>
