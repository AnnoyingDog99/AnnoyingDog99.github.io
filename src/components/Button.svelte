<script lang="ts">
	export let width: string = '20em';
	export let link = '';
	export let type = '';
</script>

{#if link !== ''}
	<a href={link} style:width>
		<slot />
	</a>
{:else}
	<button style:width type="{type}">
		<slot />
	</button>
{/if}

<style lang="scss">
	button,
	a {
		all: unset;
		cursor: pointer;

		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px;
		margin: 1em;

		border: 10px solid;
		border-image-slice: 1;
		border-width: 3px;
		border-image-source: $main-gradient;

		&:hover {
			background: $main-gradient;
		}
	}
</style>
