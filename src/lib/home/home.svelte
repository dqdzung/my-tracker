<script lang="ts">
	import { Container, Stack, Group, Image, ActionIcon } from '@svelteuidev/core';
	import { slide } from 'svelte/transition';
	import { IconChevronDown, IconChevronUp } from '@tabler/icons-svelte';
	import ListItem from '$lib/home/listItem.svelte';
	import type { ListOwned, ListRecentlyPlayed } from '../../models/game';

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
				<ListItem data={game}>
					{game.name}
				</ListItem>
			{/each}
		</div>
	{/if}
</Stack>

<style>
	h2 {
		margin: 15px 0 0 0;
	}
</style>
