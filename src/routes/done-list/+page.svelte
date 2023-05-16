<script>
	export let data;

	const { list } = data;

	console.log(list);
</script>

<h2>Done List</h2>

<div>{list?.[0]?.name}</div>
<div>{list?.[0]?.data}</div>

<style>
	* {
		color: white;
	}
</style>
