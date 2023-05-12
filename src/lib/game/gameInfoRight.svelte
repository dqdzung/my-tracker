<script lang="ts">
	import { Stack, Group, Badge, SimpleGrid, Button, Center, Image } from '@svelteuidev/core';
	import { IconThumbUp } from '@tabler/icons-svelte';

	export let data: any; // GameDetail model
</script>

<Stack>
	<Image src={data['header_image']} alt="header-image" height="auto" style="border-radius: 8px" />

	<Group spacing={5}>
		{#each data.genres as genre}
			<Badge color="gray" variant="filled">{genre.description}</Badge>
		{/each}
	</Group>

	<SimpleGrid cols={2}>
		<Button color="green" href={data['metacritic'].url} radius={8}>
			<span>Metacritic {data['metacritic'].score}</span>
		</Button>

		<Button radius={8} color="blue">
			<div>
				<Center>
					<IconThumbUp />

					<div style="padding: 0 5px">
						{data.recommendations.total}
					</div>
				</Center>
			</div>
		</Button>
	</SimpleGrid>

	<span>{data['short_description']}</span>
</Stack>
