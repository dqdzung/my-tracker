<script lang="ts">
	import { Group, Grid, Tabs } from '@svelteuidev/core';
	import {
		IconArrowBack,
		IconInfoCircleFilled,
		IconPhoto,
		IconSettings,
		IconUser
	} from '@tabler/icons-svelte';
	import GameInfoLeft from '$lib/game/gameInfoLeft.svelte';
	import GameInfoRight from '$lib/game/gameInfoRight.svelte';
	import GalleryTab from '$lib/game/galleryTab.svelte';
	import UserStatTab from '$lib/game/userStatTab.svelte';
	import '@splidejs/svelte-splide/css';
	import type { AchievementItemModel } from '$models/achievementItem';
	import type { GameDetail } from '$models/gameDetail';
	import type { PlayerStat } from '$models/playerStat';

	export let data: {
		appData: GameDetail;
		achievements: AchievementItemModel[];
		playerStats: PlayerStat;
	};

	const { appData, achievements } = data;

	let activeTab = 0;

	const onTabChange = (e: CustomEvent) => {
		const { index } = e.detail;
		activeTab = index;
	};
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
		{#if achievements}
			<Tabs.Tab
				label="User stats"
				tabindex={0}
				tabKey="userStat"
				icon={IconUser}
				override={{ color: 'white' }}
			>
				<UserStatTab data={achievements} />
			</Tabs.Tab>
		{/if}

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
			<GalleryTab data={appData} isActive={activeTab === 2} />
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
