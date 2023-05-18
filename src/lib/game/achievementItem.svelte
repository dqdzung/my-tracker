<script lang="ts">
	import { Card, Group } from '@svelteuidev/core';
	import { IconCheckbox } from '@tabler/icons-svelte';

	export let data: any;
	export let showCardBack: boolean;

	let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />

{#if !showCardBack}
	<Card
		shadow="sm"
		padding="lg"
		radius="md"
		override={{
			display: 'flex',
			alignItems: 'center',
			minHeight: '65px',
			background: data.achieved === 0 ? '#191919' : 'rgb(60, 60, 60)',
			color: 'white',
			'&:hover': {
				background: 'rgb(90, 90, 90)'
			}
		}}
	>
		<Group position="apart" override={{ width: '100%' }}>
			{data.name}

			{#if data.achieved}
				<IconCheckbox />
			{/if}
		</Group>
	</Card>
{:else}
	<Card
		shadow="sm"
		padding="lg"
		radius="md"
		override={{
			justifyContent: 'center',
			display: 'flex',
			alignItems: 'center',
			minHeight: '65px',
			transform: 'rotateY(180deg)',
			color: 'black',
			'&:hover': {
				background: 'rgb(220, 220, 220)'
			}
		}}
	>
		<div style="opacity: 0" class:conceal-answer={showCardBack}>
			{data.description}
		</div>
	</Card>
{/if}

<style>
	@keyframes revealTextSlowly {
		to {
			opacity: 1;
		}
	}
	.conceal-answer {
		animation: revealTextSlowly 0.5s forwards;
	}
</style>
