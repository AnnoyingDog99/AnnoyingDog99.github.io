<script lang="ts">
	export let width = '20em';
	export let link = '';
	export let type = '';
</script>

{#if link !== ''}
	<a href={link} style:width>
		<slot />
	</a>
{:else}
	<button style:width {type}>
		<slot />
	</button>
{/if}

<style lang="scss">
	button,
	a {
		cursor: pointer;
		background: none;
		color: inherit;
		font: inherit;
		cursor: pointer;
		outline: inherit;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 2em;
		padding: 5px;

		border: 10px solid;
		border-image-slice: 1;
		border-width: 3px;
		border-image-source: $main-gradient;

		&:hover,
		&:focus {
			background: $main-gradient;
		}
	}
</style>
