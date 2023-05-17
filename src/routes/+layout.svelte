<script lang="ts">
	import {
		ActionIcon,
		Button,
		Container,
		Group,
		Menu,
		SvelteUIProvider,
		Text
	} from '@svelteuidev/core';
	import { AppShell } from '@svelteuidev/core';
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import TimeAgo from 'javascript-time-ago';
	import en from 'javascript-time-ago/locale/en';
	import { IconBrandGithubFilled, IconMenu2 } from '@tabler/icons-svelte';
	import NavLinks from '$lib/navbar/navLinks.svelte';
	import Navbar from '$lib/navbar/navBar.svelte';
	import '../app.css';

	TimeAgo.addLocale(en);
	TimeAgo.setDefaultLocale(en.locale);

	let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />

<SvelteUIProvider withNormalizeCSS withGlobalStyles>
	<AppShell padding={0}>
		<Navbar />

		<div class="main-content">
			<Container
				override={{
					maxWidth: '1200px',
					mb: '20px'
				}}
			>
				<slot />
			</Container>

			<div class="footer">
				<a href="https://github.com/dqdzung" target="_blank" referrerpolicy="no-referrer">
					<Group spacing={5}>
						<IconBrandGithubFilled size={20} />
						@hihi_
					</Group>
				</a>
			</div>
		</div>
	</AppShell>
</SvelteUIProvider>

<svelte:head>
	<title>{PUBLIC_APP_NAME}</title>
</svelte:head>

<style lang="scss">
	a {
		color: white;
		text-decoration: none;
	}
	.main-content {
		margin-top: 45px;
		background-color: #000000e6;
		height: calc(100vh - 45px);
		overflow-y: overlay;

		.footer {
			position: fixed;
			bottom: 0;
			background: black;
			width: 100%;
			padding: 5px;
			font-size: 12px;
		}
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
