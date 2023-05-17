<script lang="ts">
	import {
		Group,
		Grid,
		Tabs,
		Center,
		Image,
		Stack,
		Progress,
		Card,
		Text,
		ActionIcon,
		Tooltip,
		Box
	} from '@svelteuidev/core';
	import {
		IconArrowBack,
		IconChevronDown,
		IconInfoCircleFilled,
		IconPhoto,
		IconSettings
	} from '@tabler/icons-svelte';
	import GameInfoLeft from '$lib/game/gameInfoLeft.svelte';
	import GameInfoRight from '$lib/game/gameInfoRight.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { calculateCheevoCompletion } from './utils';

	export let data: { appData: any; achievements: any; playerStats: any };

	const { appData, achievements } = data;

	let activeTab = 0;

	const onTabChange = (e: CustomEvent) => {
		const { index } = e.detail;
		activeTab = index;
	};

	$: cheevoCompletion = calculateCheevoCompletion(achievements);

	console.log(achievements);
</script>

<div style="margin-bottom: 55px;">
	<a href="/" style="margin-top: 15px ; display: block">
		<Group spacing={5}>
			<IconArrowBack />
			<span>Back to Home</span>
		</Group>
	</a>

	<div
		class="background"
		style={`background-image: url(${appData.background}); background-size: cover`}
	>
		<h2>{appData.name}</h2>
		<Group position="apart" align="flex-start" mt={20}>
			<Grid>
				<Grid.Col xs={12} md={7}>
					<GameInfoLeft data={appData} />
				</Grid.Col>

				<Grid.Col xs={12} md={5}>
					<GameInfoRight data={appData} />
				</Grid.Col>
			</Grid>
		</Group>
	</div>

	<Tabs
		bind:active={activeTab}
		on:change={onTabChange}
		override={{
			'& .svelteui-Tab-root': {
				color: 'white'
			},
			'& .active': {
				color: 'rgb(28, 126, 214)'
			}
		}}
	>
		<Tabs.Tab
			label="User stats"
			tabindex={0}
			tabKey="userStat"
			icon={IconInfoCircleFilled}
			override={{ color: 'white' }}
		>
			<Card shadow="sm" padding="lg" radius="md" override={{ background: ' black ' }}>
				<h3 style="margin: 0 0 15px 0;">Achievements</h3>

				<Text color="white" mb={10}>
					You've unlocked {cheevoCompletion.achieved}/{achievements.length} ({cheevoCompletion.percentage}%)
				</Text>

				<Progress value={cheevoCompletion.percentage} size="xl" radius="xl" />

				<Box mt={5} style="text-align: center">
					<Tooltip label="View all achievements">
						<ActionIcon variant="transparent">
							<IconChevronDown color="white" />
						</ActionIcon>
					</Tooltip>
				</Box>
			</Card>
		</Tabs.Tab>

		<Tabs.Tab
			label="About"
			tabindex={1}
			tabKey="about"
			icon={IconInfoCircleFilled}
			override={{ color: 'white' }}
		>
			<p>
				{@html appData['about_the_game']}
			</p>
		</Tabs.Tab>

		<Tabs.Tab label="System Requirements" tabindex={2} tabKey="requirements" icon={IconSettings}>
			<p>
				{@html appData['pc_requirements'].minimum || ''}
			</p>

			<p>
				{@html appData['pc_requirements'].recommended || ''}
			</p>
		</Tabs.Tab>

		<Tabs.Tab label="Gallery" tabindex={3} tabKey="gallery" icon={IconPhoto}>
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
						{#each appData.screenshots as { path_full, id } (id)}
							<SplideSlide>
								<Image src={path_full} />
							</SplideSlide>
						{/each}
					</Splide>
				</div>

				{#if appData.movies?.length}
					<div>
						<h4 style="margin: 10px 0;">Video</h4>
						<Center>
							<!-- svelte-ignore a11y-media-has-caption -->
							<video
								autoplay={activeTab === 2}
								src={appData.movies?.[0]?.webm?.max}
								height="auto"
								width="100%"
								controls
							/>
						</Center>
					</div>
				{/if}
			</Stack>
		</Tabs.Tab>
	</Tabs>
</div>

<style lang="scss">
	* {
		color: white;
	}

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
