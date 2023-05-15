<script lang="ts">
	import { Group, Grid, Tabs, Center, Image, Stack } from '@svelteuidev/core';
	import { IconArrowBack } from '@tabler/icons-svelte';
	import GameInfoLeft from '$lib/game/gameInfoLeft.svelte';
	import GameInfoRight from '$lib/game/gameInfoRight.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	export let data;

	console.log(data);
</script>

<div>
	<a href="/" style="margin-top: 15px ; display: block">
		<Group spacing={5}>
			<IconArrowBack />
			<span>Back to Home</span>
		</Group>
	</a>

	<div class="background" style={`background-image: url(${data.background});`}>
		<h2>{data.name}</h2>
		<Group position="apart" align="flex-start" mt={20}>
			<Grid>
				<Grid.Col xs={12} md={7}>
					<GameInfoLeft {data} />
				</Grid.Col>

				<Grid.Col xs={12} md={5}>
					<GameInfoRight {data} />
				</Grid.Col>
			</Grid>
		</Group>
	</div>

	<Tabs>
		<Tabs.Tab label="About">
			<p>
				{@html data['about_the_game']}
			</p>
		</Tabs.Tab>

		<Tabs.Tab label="System Requirements">
			<p>
				{@html data['pc_requirements'].minimum || ''}
			</p>

			<p>
				{@html data['pc_requirements'].recommended || ''}
			</p>
		</Tabs.Tab>

		<Tabs.Tab label="Gallery">
			<Stack spacing={20}>
				<div>
					<h4 style="margin: 10px 0;">Screenshots</h4>
					<Splide
						aria-label="screenshots"
						options={{
							gap: '10px',
							height: 'auto',
							perPage: 3,
							perMove: 1,
							drag: 'free',
							snap: true
						}}
					>
						{#each data.screenshots as { path_full, path_thumbnail, id } (id)}
							<SplideSlide>
								<Image src={path_full} />
							</SplideSlide>
						{/each}
					</Splide>
				</div>

				{#if data.movies?.length}
					<div>
						<h4 style="margin: 10px 0;">Video</h4>
						<Center>
							<!-- svelte-ignore a11y-media-has-caption -->
							<video src={data.movies?.[0]?.webm?.max} height="auto" width="100%" controls />
						</Center>
					</div>
				{/if}
			</Stack>
		</Tabs.Tab>
	</Tabs>
</div>

<style lang="scss">
	a {
		text-decoration: none;
	}

	.background {
		margin: 20px 0;
		padding: 20px;
		border-radius: 8px;
		background-position: center top;
		background-repeat: no-repeat;

		h2 {
			margin: 0;
		}
	}
</style>
