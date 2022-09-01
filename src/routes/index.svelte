<script lang="ts">
	import Button from '$components/Button.svelte';
	import Circle from '$components/Circle.svelte';
	import MediaQuery from '$components/utilComponents/MediaQuery.svelte';

	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

{#if visible}
	<div class="center" in:fade={{ delay: 100 }}>
		<MediaQuery query="(min-width: 768px)" let:matches>
			{#if matches}
				<div class="container">
					<Circle name="" title="" />
					<div class="text-container">
						<h1>Jan Vlasman</h1>
						<h2>Software Engineer</h2>
						<div>
							<a href="https://github.com/AnnoyingDog99"
								><img src="/images/GithubWhite.png" alt="Github" /></a
							>
							<Button width="50%" link="/contact">Contact me!</Button>
						</div>
					</div>
				</div>
			{:else}
				<Circle name="Jan Vlasman" title="Software Engineer" />
			{/if}
		</MediaQuery>
	</div>
{/if}

<style lang="scss">
	h1,
	h2 {
		padding: 0;
		margin: 0;
		font-family: Quicksand;
	}
	h1 {
		font-size: 4em;

		@include rwd(1600) {
			font-size: 5em;
		}
	}
	h2 {
		font-size: 2em;

		@include rwd(1600) {
			font-size: 3em;
		}
	}
	.text-container {
		text-align: center;
		flex: 1;
		overflow: hidden;
		white-space: nowrap;
		margin-left: 3em;
		div {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 1rem;
		}

		@include rwd(1600) {
			margin-left: 15em;
		}
	}
	img {
		width: 3.5rem;
		height: auto;
		display: inline;
		margin: 1rem;
	}
	.container {
		display: flex;
		align-items: center;
	}
	.center {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
