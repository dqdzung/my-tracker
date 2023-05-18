<script lang="ts">
	import { Header, Container, Text } from '@svelteuidev/core';
	import { HEADER_HEIGHT } from '../../constants';

	let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />

<Header
	slot="header"
	height={HEADER_HEIGHT}
	override={{
		backgroundColor: 'black'
	}}
	fixed
>
	<Container
		override={{
			height: '100%',
			display: 'flex',
			alignItems: 'center',
			maxWidth: '1200px',
			justifyContent: screenSize <= 900 ? 'space-between' : 'normal'
		}}
	>
		<Text weight="bold" size={20}>
			<a href="/"> My Game List </a>
		</Text>

		<!-- <NavLinks /> -->
	</Container>
</Header>

<style lang="scss">
	a {
		color: white;
		text-decoration: none;
	}
</style>
