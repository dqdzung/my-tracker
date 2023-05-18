<script lang="ts">
	import { Card, Group } from '@svelteuidev/core';
	import { IconCheckbox } from '@tabler/icons-svelte';

	export let data: any;

	let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />

<Card
	shadow="sm"
	padding="lg"
	radius="md"
	override={{
		background: data.achieved === 0 ? '#191919' : 'rgb(60, 60, 60)',
		color: 'white'
	}}
>
	<Group position="apart">
		<div>
			{data.name}
		</div>

		{#if screenSize >= 900}
			{data.description}
		{/if}

		<div>
			{#if data.achieved}
				<IconCheckbox />
			{/if}
		</div>
	</Group>
</Card>
