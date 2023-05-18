<script lang="ts">
	import { ActionIcon, Box, Card, Progress, Stack, Text, Tooltip } from '@svelteuidev/core';
	import { calculateCheevoCompletion } from '../../routes/game/[appid]/utils';
	import { IconChevronDown, IconChevronUp } from '@tabler/icons-svelte';
	import { slide } from 'svelte/transition';
	import AchievementItem from './achievementItem.svelte';

	export let data: any;
	let openCheevo = false;
	let screenSize: number;
	let showCardBack: number[] = [];

	const toggleShowBack = (index: number) => {
		if (showCardBack.includes(index)) {
			showCardBack = showCardBack.filter((item) => item !== index);
		} else {
			showCardBack = [...showCardBack, index];
		}

		console.log(showCardBack);
	};

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
			<Stack spacing={20}>
				{#each data as cheevo, i}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="flip-card" on:click={() => toggleShowBack(i)}>
						<div class="flip-card-inner" class:flip-it={showCardBack.includes(i)}>
							<AchievementItem showCardBack={showCardBack.some((e) => e === i)} data={cheevo} />
						</div>
					</div>
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

	/* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
	.flip-card {
		background-color: transparent;
		width: 100%;
		height: 100%;
		perspective: 2000px;
		cursor: pointer;
	}

	/* This container is needed to position the front and back side */
	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.4s;
		transform-style: preserve-3d;
	}

	/* Do an horizontal flip on button click */
	.flip-it {
		transform: rotateY(180deg);
	}
</style>
