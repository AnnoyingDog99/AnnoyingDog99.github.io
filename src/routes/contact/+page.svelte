<script lang="ts">
	import ContactForm from '$components/ContactForm.svelte';

	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

{#if visible}
	<div class="container" in:fade={{ delay: 100 }}>
		<ContactForm />
	</div>
{/if}

<style lang="scss">
	.container {
		margin-top: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;

		@include sm {
			margin-top: 8rem;
		}
	}
</style>
