<script>
	import { Group, Text } from '@svelteuidev/core';
	import { IconArrowBack } from '@tabler/icons-svelte';

	export let data;

	console.log(data);
</script>

<div style="margin-top: 20px;">
	<a href="">
		<Group spacing={5}>
			<IconArrowBack />
			<Text>Back</Text>
		</Group>
	</a>
</div>

<h2>Game is {data.name}</h2>

<p>{@html data['about_the_game']}</p>

<style>
	a {
		text-decoration: none;
	}
</style>
