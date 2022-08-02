<script lang="ts">
	import Hamburger from '$components/Hamburger.svelte';
	import NavBar from '$components/NavBar.svelte';
	import SideNav from '$components/SideNav.svelte';
	import MediaQuery from '$components/utilComponents/MediaQuery.svelte';
	import Spinner from '$components/Spinner.svelte';

	import { onMount } from 'svelte';

	let visible: boolean;
	let loading = true;

	function toggleVisible() {
		visible = !visible;
	}

	async function sleep(time:number) {
		new Promise(resolve => setTimeout(resolve, time));
	}

	// onMount(() => {
	// 	await sleep(5000);
	// 	loading = false;
	// });


</script>

{#if loading}
	<MediaQuery query="(min-width: 576px)" let:matches>
		{#if matches}
			<NavBar />
		{:else}
			<SideNav bind:visible />
			<Hamburger on:click={toggleVisible} />
		{/if}
	</MediaQuery>

	<div class="content">
		<slot />
	</div>

{:else}
<div class="spinner">
	<Spinner/>
</div>
{/if}

<style lang="scss">
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: $background-color;
		font-family: Glacial;
		color: white;
		overflow: hidden;
	}

	.content {
		overflow-y: auto;
		max-height: 95vh;
	}

	.spinner{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
	}
</style>
