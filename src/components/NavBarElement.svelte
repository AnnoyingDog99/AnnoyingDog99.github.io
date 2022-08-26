<script lang="ts">
	import { page } from '$app/stores';

	export let path: string;

	import { toggleVisible } from '$utils/toggleVisible';
</script>

<a href={path} on:click={toggleVisible}>
	<div class="link-text">
		<li>
			<slot />
		</li>
	</div>
	{#if $page.url.pathname === path}
		<div class="current" />
	{/if}
</a>

<style lang="scss">
	a {
		color: white;
		text-decoration: none;
		width: 100%;
		background: $navbar-color;
		&:hover,
		&:focus {
			background: $main-gradient-opaque;
			outline: none;
		}
	}

	.link-text {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 2.5em;
		text-decoration: none;
		color: inherit;
		font-size: 1.2em;
	}

	.current {
		width: 100%;
		height: 3px;
		background: $main-gradient;
	}
</style>
