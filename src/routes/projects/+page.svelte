<script lang="ts">
	import Card from '$components/Card.svelte';
	import { projects } from '$utils/projectsConfig';

	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

{#if visible}
	<div class="card-container" in:fade={{ delay: 100 }}>
		{#each projects as project}
			<Card cardInfo={project} />
		{/each}
	</div>
{/if}

<style lang="scss">
	.card-container {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 2rem;
	}
</style>
