<script lang="ts">
	import Hamburger from '$components/Hamburger.svelte';
	import NavBar from '$components/NavBar.svelte';
	import SideNav from '$components/SideNav.svelte';
	import MediaQuery from '$components/utilComponents/MediaQuery.svelte';
	import Spinner from '$components/Spinner.svelte';
	import { toggleVisible } from '$utils/toggleVisible';
	import Canvas from '$components/Canvas.svelte';

	import { onMount } from 'svelte';

	let loading = true;

	onMount(() => {
		loading = false;
	});
</script>

{#if loading}
	<div class="spinner">
		<Spinner />
	</div>
{:else}
	<Canvas />
	<MediaQuery query="(min-width: 576px)" let:matches>
		{#if matches}
			<NavBar />
		{:else}
			<SideNav />
			<Hamburger on:click={toggleVisible} />
		{/if}
	</MediaQuery>

	<div class="content">
		<slot />
	</div>
{/if}

<style lang="scss">
	:global(body) {
		overflow-y: scroll;
		margin: 0;
		padding: 0;
		background-color: $background-color;
		font-family: Glacial;
		color: white;
	}

	:global(.canvas-container > .container) {
		z-index: -1;
	}

	.spinner {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
