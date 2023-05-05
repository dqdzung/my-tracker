<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import { GET } from './api/owned_games/+server';
	import { onMount } from 'svelte';

	onMount(async () => {
		const res = await GET();

		const response = await fetch('https://dummyjson.com/posts');
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<svelte:head>
	<title>{PUBLIC_APP_NAME}</title>
</svelte:head>
