<script lang="ts">
	import Button from '$components/Button.svelte';
	import Pill from './Pill.svelte';
	import type { CardProps } from '$types/Card';

	export let cardInfo: CardProps;
	let fileExt = cardInfo.imageRoute.split('.').pop();
</script>

<div class="container">
	{#if fileExt === 'mp4'}
		<!-- svelte-ignore a11y-media-has-caption -->
		<video width="100%" height="100%" controls>
			<source src={cardInfo.imageRoute} type="video/mp4" />
		</video>
	{:else}
		<img src={cardInfo.imageRoute} alt={cardInfo.imageAlt} />
	{/if}
	<div class="content-container">
		<div class="pill-container">
			{#each cardInfo.languages as language}
				<Pill>{language}</Pill>
			{/each}
		</div>
		<div>
			<h1>
				{cardInfo.projectTitle}
			</h1>
			<p>
				{cardInfo.projectDescription}
			</p>
		</div>
		<div class="button-container">
			<Button width="40%" link={cardInfo.githubLink} target="_blank">Github</Button>
			{#if cardInfo.liveLink}
				<Button width="40%" link={cardInfo.liveLink} target="_blank">Live</Button>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	img {
		width: 100%;
		height: 100%;
	}
	.container {
		border: 10px solid;
		border-image-slice: 1;
		border-width: 5px;
		border-image-source: $main-gradient;
		background-color: $navbar-color;
		margin: 1rem;
		max-width: 550px;
		max-height: 770px;

		@include rwd(1750) {
			margin: 2.5rem;
		}
	}
	.content-container {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		flex-wrap: wrap;
		color: white;
		padding: 0.7em;
	}

	.button-container {
		width: 100%;
		display: flex;
		text-align: center;
		align-items: center;
		justify-content: space-around;
	}

	p {
		margin-bottom: 2em;
	}
</style>
