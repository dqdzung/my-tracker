<script>
	import { page } from '$app/stores';

	const appId = $page.params.appid;

	export let data;

	console.log(data);
</script>

<h2>Game is {data.name}</h2>

<p>{@html data['about_the_game']}</p>
