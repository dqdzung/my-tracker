<script>
	import { Container, SvelteUIProvider, Text } from '@svelteuidev/core';
	import { AppShell, Header } from '@svelteuidev/core';
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import TimeAgo from 'javascript-time-ago';
	import en from 'javascript-time-ago/locale/en';
	import { HEADER_HEIGHT } from '../constants';
	import '../app.css';

	TimeAgo.addLocale(en);
	TimeAgo.setDefaultLocale(en.locale);
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
					display: 'flex',
					alignItems: 'center',
					maxWidth: '1200px'
				}}
			>
				<Text weight="bold" size={20}>
					<a
						href="
          /"
						style="text-decoration: none"
					>
						My Game List
					</a>
				</Text>
			</Container>
		</Header>

		<div class="main-content">
			<Container
				override={{
					maxWidth: '1200px'
				}}
			>
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
		height: calc(100vh - 45px);
		overflow-y: overlay;
	}

	/* width */
	::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #888;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
</style>
