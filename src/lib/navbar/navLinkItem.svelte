<script lang="ts">
	import { Text } from '@svelteuidev/core';

	export let label: string;
	export let href: string;
	export let isInMenu: boolean = false;
</script>

<Text>
	<a {href} style={isInMenu ? 'color: black' : ''}>{label}</a>
</Text>

<style lang="scss">
	a {
		color: white;
		text-decoration: none;
	}
</style>
