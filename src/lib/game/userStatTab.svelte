<script lang="ts">
	import { ActionIcon, Box, Card, Group, Progress, Stack, Text, Tooltip } from '@svelteuidev/core';
	import { calculateCheevoCompletion } from '../../routes/game/[appid]/utils';
	import { IconChevronDown, IconChevronUp } from '@tabler/icons-svelte';
	import { slide } from 'svelte/transition';
	import AchievementItem from './achievementItem.svelte';

	export let data: any;
	let openCheevo = false;
	let screenSize: number;

	const onOpenCheevo = () => {
		openCheevo = !openCheevo;
	};
	console.log('dmm', data);

	$: cheevoCompletion = calculateCheevoCompletion(data);
</script>

<svelte:window bind:innerWidth={screenSize} />

<Card shadow="sm" padding="lg" radius="md" override={{ background: 'black' }}>
	<h3 style="margin: 0 0 15px 0;">Achievements</h3>

	<Text color="white" mb={10}>
		You've unlocked {cheevoCompletion.achieved}/{data.length} ({cheevoCompletion.percentage}%)
	</Text>

	<Progress value={cheevoCompletion.percentage} size="xl" radius="xl" />

	{#if openCheevo}
		<div transition:slide style="margin-top: 20px;">
			<Stack spacing={10}>
				{#each data as cheevo}
					{#if screenSize > 900}
						<AchievementItem data={cheevo} />
					{:else}
						<Tooltip label={cheevo.description} withArrow arrowSize={5} withinPortal wrapLines color='blue'>
							<AchievementItem data={cheevo} />
						</Tooltip>
					{/if}
				{/each}
			</Stack>
		</div>
	{/if}

	<Box mt={5} style="text-align: center">
		<Tooltip label={!openCheevo ? 'View all achievements' : 'Close'} withArrow>
			<ActionIcon variant="transparent" on:click={onOpenCheevo}>
				{#if !openCheevo}
					<IconChevronDown color="white" />
				{:else}
					<IconChevronUp color="white" />
				{/if}
			</ActionIcon>
		</Tooltip>
	</Box>
</Card>

<style lang="scss">
	* {
		color: white;
	}
</style>
