<script>
	import { Group, Text, Stack, Image, Grid, Badge, Button } from '@svelteuidev/core';
	import { IconArrowBack, IconBrandSteam, IconHome2 } from '@tabler/icons-svelte';
	import InfoTable from '$lib/game/infoTable.svelte';
	import { getStoreUrl } from '$api/service-helper.js';

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
		<h2>{data.name}</h2>
		<Group position="apart" align="flex-start" mt={20}>
			<Grid>
				<Grid.Col xs={12} md={7}>
					<Stack style="flex-grow: 1">
						<InfoTable {data} />

						<Group spacing={7}>
							<Button
								radius={8}
								variant="filled"
								color="indigo"
								href={getStoreUrl(data['steam_appid'])}
							>
								<IconBrandSteam slot="leftIcon" />
								Store
							</Button>

							<Button radius={8} variant="filled" color="indigo" href={data.website}>
								<IconHome2 slot="leftIcon" />
								Home
							</Button>
						</Group>
					</Stack>
				</Grid.Col>

				<Grid.Col xs={12} md={5}>
					<Stack>
						<Image
							src={data['header_image']}
							alt="header-image"
							height="auto"
							style="border-radius: 8px"
						/>

						<Group spacing={5}>
							{#each data.genres as genre}
								<Badge color="gray" variant="filled">{genre.description}</Badge>
							{/each}
						</Group>

						<Text color="white">{data['short_description']}</Text>
					</Stack>
				</Grid.Col>
			</Grid>
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
		background-position: center top;
		background-repeat: no-repeat;

		h2 {
			margin: 0;
		}
	}
</style>
