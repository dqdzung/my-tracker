<script lang="ts">
	import { Button, Group, Stack } from '@svelteuidev/core';
	import { IconBrandSteam, IconHome2 } from '@tabler/icons-svelte';
	import { getStoreUrl } from '../../api/service-helper';
	import GameInfoTable from './gameInfoTable.svelte';

	export let data: any; // GameDetail model
</script>

<Stack style="flex-grow: 1">
	<GameInfoTable {data} />

	<Group position="apart">
		<Group spacing={7}>
			<Button radius={8} variant="filled" color="indigo" href={getStoreUrl(data['steam_appid'])}>
				<IconBrandSteam slot="leftIcon" />
				Store
			</Button>

			<Button radius={8} variant="filled" color="indigo" href={data.website}>
				<IconHome2 slot="leftIcon" />
				Home
			</Button>
		</Group>
	</Group>
</Stack>
