<script lang="ts">
	import { page } from '$app/stores';

	export let path: string;
</script>

{#if $page.url.pathname === path}
	<div class="container">
			<a href={path}>
				<li>
					<slot/>
				</li>
			</a>
		<div class="current"/>
	</div>
{:else}
		<a href={path}>
			<li>
				<slot/>
			</li>
		</a>
{/if}

<style lang="scss">
	li {
		color: white;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 2.5em;
		background: $navbar-color;
		text-decoration: none;
		color: inherit;
		font-size: 1.2em;
		&:hover {
			background: $main-gradient-opaque;
		}
	}

	.current {
		width: 100%;
		height: 3px;
		background: $main-gradient;
	}

	.container {
		width: 100%;
	}
</style>
