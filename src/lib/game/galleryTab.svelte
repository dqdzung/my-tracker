<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { Stack, Center, Image } from '@svelteuidev/core';
	import type { GameDetail } from '$models/gameDetail';

	export let data: GameDetail;
	export let isActive: boolean;
</script>

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
			{#each data.screenshots as { path_full, id } (id)}
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
				<video
					autoplay={isActive}
					src={data.movies?.[0]?.webm?.max}
					height="auto"
					width="100%"
					controls
				/>
			</Center>
		</div>
	{/if}
</Stack>
