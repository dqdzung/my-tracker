<script>
	import { Group, Text, Stack, Image } from '@svelteuidev/core';
	import { IconArrowBack } from '@tabler/icons-svelte';

	export let data;

	console.log(data);
</script>

<div>
	<a href="/" style="margin-top: 15px ; display: block">
		<Group spacing={5}>
			<IconArrowBack />
			<Text color="white">Back to Home</Text>
		</Group>
	</a>

	<div class="background" style={`background-image: url(${data.background});`}>
		<Group position="apart" align="flex-start">
			<Stack style="flex-grow: 1">
				<h2>{data.name}</h2>
				<Text color="white">App ID: {data['steam_appid']}</Text>
				<Text color="white">Developers: {data.developers.join(', ')}</Text>
				<Text color="white">Publishers: {data.publishers.join(', ')}</Text>

				<Text color="white"
					>Platforms: {Object.entries(data.platforms)
						.map(([key, value]) => value && key.toUpperCase())
						.filter(Boolean)
						.join(', ')}</Text
				>

				<Text color="white"
					>Release Date: {data['release_date']['coming_soon']
						? 'Coming Soon'
						: data['release_date'].date}</Text
				>
			</Stack>
			<Stack style="max-width: 400px">
				<Image
					src={data['header_image']}
					alt="header-image"
					height="auto"
					style="border-radius: 8px"
				/>

				<Text color="white">{data['short_description']}</Text>
			</Stack>
		</Group>
	</div>

	<h2>About the game</h2>
	<p>
		{@html data['about_the_game']}
	</p>
</div>

<style lang="scss">
	a {
		text-decoration: none;
	}

	.background {
		margin-top: 20px;
		margin-bottom: 30px;
		padding: 20px;
		border-radius: 8px;
		background-position: center;
		background-repeat: no-repeat;

		h2 {
			margin: 0;
		}
	}
</style>
