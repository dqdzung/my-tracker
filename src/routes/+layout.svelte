<script>
	import { Container, SvelteUIProvider, Text } from '@svelteuidev/core';
	import { AppShell, Header } from '@svelteuidev/core';
	import { HEADER_HEIGHT } from '../constants';
	import { PUBLIC_APP_NAME } from '$env/static/public';
</script>

<SvelteUIProvider withNormalizeCSS withGlobalStyles>
	<AppShell padding={0} style="{{ height: '100vh' }}}">
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
					alignItems: 'center',
					marginBottom: HEADER_HEIGHT
				}}
			>
				<Text color="white" weight="bold" size={20}>My Game List</Text>
			</Container>
		</Header>

		<div class="main-content">
			<Container>
				<slot />
			</Container>
		</div>
	</AppShell>
</SvelteUIProvider>

<svelte:head>
	<title>{PUBLIC_APP_NAME}</title>
</svelte:head>

<style>
	.main-content {
		margin-top: 45px;
		background-color: #000000e6;
		color: white;
		height: calc(100vh - 45px);
		overflow-y: scroll;
	}
</style>
