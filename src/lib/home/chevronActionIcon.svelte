<script lang="ts">
	import { ActionIcon } from '@svelteuidev/core';
	import { IconChevronDown, IconChevronUp } from '@tabler/icons-svelte';

	export let open: boolean;
	export let onClick: () => void;
</script>

<ActionIcon on:click={() => onClick()} variant="transparent"
	>{#if !open}
		<IconChevronDown />
	{:else}
		<IconChevronUp />
	{/if}</ActionIcon
>
