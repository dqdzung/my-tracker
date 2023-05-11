<script lang="ts">
	import { Group, Image } from '@svelteuidev/core';
	import { getImageSrc } from '../../api/service-helper';
	import type { Game } from '../../models/game';

	export let data: Game;
</script>

<Group spacing={15} my={10}>
	<Image
		width={20}
		height={20}
		src={getImageSrc(data?.appid, data?.['img_icon_url'])}
		usePlaceholder
	/>

	<a href={`/game/${data.appid}`}>
		<slot />
	</a>
</Group>

<style>
	a {
		box-shadow: inset 0 0 0 0 #54b3d6;
		color: #54b3d6;
		margin: 0 -0.25rem;
		padding: 10px;
		transition: color 0.3s ease-in-out, box-shadow 0.35s ease-in-out;
		text-decoration: none;
	}
	a:hover {
		box-shadow: inset 1000px 0 0 0 #54b3d6;
		color: white;
	}
</style>
