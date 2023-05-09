<script lang="ts">
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import { Container, SvelteUIProvider, Text } from '@svelteuidev/core';
	import { AppShell, Header } from '@svelteuidev/core';
	import Main from '../components/main.svelte';
	import { HEADER_HEIGHT } from '../constants';
	import type { ListOwned, ListRecentlyPlayed } from '../models/game';

	export let data: {
		owned: ListOwned;
		recentlyPlayed: ListRecentlyPlayed;
	};
</script>

<SvelteUIProvider withNormalizeCSS withGlobalStyles>
	<AppShell padding={0}>
		<Header
			slot="header"
			height={HEADER_HEIGHT}
			override={{
				backgroundColor: 'black'
			}}
			fixed
		>
			<Container
				override={{
					height: '100%',
					width: '100%',
					color: 'white',
					display: 'flex',
					alignItems: 'center'
				}}
			>
				<Text color="white" weight="bold" size={20}>My Game List</Text>
			</Container>
		</Header>

		<slot><Main {data} /></slot>
	</AppShell>
</SvelteUIProvider>

<svelte:head>
	<title>{PUBLIC_APP_NAME}</title>
</svelte:head>
