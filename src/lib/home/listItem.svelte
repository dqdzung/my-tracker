<script lang="ts">
	import { getImageSrc } from '$lib/utils';
	import { Group, Image } from '@svelteuidev/core';

	export let data: any;
</script>

<Group spacing={10} my={10}>
	<Image
		width={20}
		height={20}
		src={getImageSrc(data?.appid, data?.['img_icon_url'])}
		usePlaceholder
	/>

	<a href="/">
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
		box-sizing: border-box;
	}
	a:hover {
		box-shadow: inset 1000px 0 0 0 #54b3d6;
		color: white;
	}
</style>
