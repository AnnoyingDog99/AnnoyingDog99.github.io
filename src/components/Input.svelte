<script lang="ts">
	export let textarea = false;
	export let label: string;
	export let name: string;
	export let value = '';
</script>

<div class="container">
	<label for={label}>{label}</label>
	{#if textarea}
		<textarea rows="10" id={label} {name} bind:value></textarea>
	{:else}
		<input type="text" id={label} {name} bind:value/>
	{/if}
</div>

<style lang="scss">
	.container {
		margin-top: 1rem;
	}

	label {
		display: block;
		color: white;
	}
	input,
	textarea {
		display: block;
		color: white;
		margin-top: 0.5rem;
		background-color: $navbar-color;
		border: 10px solid;
		border-image-slice: 1;
		border-width: 3px;
		border-image-source: $main-gradient;
		transition: transform 0.3s;
		width: 100%;
		box-sizing: border-box;
		// width: 270px;

		&:focus {
			filter: drop-shadow(2px 2px 0.5rem rgba(55, 137, 230, 0.253));
			transform: scale(1.01);
		}
	}
	input {
		height: 2.7em;
	}
</style>
