<script lang="ts">
	import { ActionIcon, Group, Menu, Text } from '@svelteuidev/core';
	import { IconMenu2 } from '@tabler/icons-svelte';
	import NavLinkItem from './navLinkItem.svelte';

	let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />

<Group spacing={20} ml={50}>
	{#if screenSize <= 900}
		<Menu>
			<ActionIcon slot="control" variant="transparent">
				<IconMenu2 color="white" />
			</ActionIcon>
			<Menu.Item>
				<NavLinkItem href="/done-list" label="Done List" isInMenu />
			</Menu.Item>
		</Menu>
	{:else}
		<NavLinkItem href="/done-list" label="Done List" />
	{/if}
</Group>
