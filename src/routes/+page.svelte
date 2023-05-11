<script lang="ts">
	import Home from '$lib/home/Home.svelte';
	import type { ListOwned, ListRecentlyPlayed } from '$models/game';

	export let data: {
		owned: ListOwned;
		recentlyPlayed: ListRecentlyPlayed;
	};
</script>

<Home {data} />
