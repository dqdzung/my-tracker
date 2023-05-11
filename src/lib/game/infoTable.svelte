<script lang="ts">
	import { Group } from '@svelteuidev/core';
	import { IconBrandApple, IconBrandUbuntu, IconBrandWindows } from '@tabler/icons-svelte';
	import TimeAgo from 'javascript-time-ago';

	const timeAgo = new TimeAgo('en-US');

	export let data: any;

	const releaseDate = new Date(data['release_date'].date);
	const comingSoon = data['release_date']['coming_soon'];
	const currentYearTime = new Date().getTime();
	const releaseYearTime = releaseDate.getTime();
	const relativeTimeAgo = timeAgo.format(Date.now() - (currentYearTime - releaseYearTime), 'round');

	$: platforms = Object.entries(data.platforms)
		.map(([key, value]) => value && key)
		.filter(Boolean);
</script>

<table>
	<thead>
		<tr>
			<th style="width: 30%;">App ID</th>
			<th>{data['steam_appid']}</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Developers</td>
			<td>{data.developers.join(', ')}</td>
		</tr>
		<tr>
			<td>Publishers</td>
			<td>{data.publishers.join(', ')}</td>
		</tr>
		<tr>
			<td>Platforms</td>
			<td style="text-transform: capitalize; ">
				<Group spacing={10}>
					{#each platforms as item}
						<Group spacing={2}>
							{#if item === 'windows'}
								<IconBrandWindows />
							{:else if item === 'linux'}
								<IconBrandUbuntu />
							{:else}
								<IconBrandApple />
							{/if}
							{item}
						</Group>
					{/each}
				</Group>
			</td>
		</tr>
		<tr>
			<td>Release Date</td>
			<td
				>{comingSoon ? 'Coming Soon' : data['release_date'].date}
				<span style="font-style: italic; color: rgb(150, 150, 150);">
					{!comingSoon ? `(${relativeTimeAgo})` : ''}
				</span>
			</td>
		</tr>
	</tbody>
</table>

<style lang="scss">
	table {
		border-collapse: collapse;
		border: 1px solid hsl(0, 0%, 45%);
		background-color: rgba(0, 0, 0, 0);
		border-radius: 8px;

		td,
		th {
			text-align: left;
			border: 1px solid hsl(0, 0%, 45%);
			padding: 13px 10px;
			font-weight: normal;
		}

		tr:hover {
			background-color: rgba(0, 0, 0, 0.075);
		}
	}
</style>
