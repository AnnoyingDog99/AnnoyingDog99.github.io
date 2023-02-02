<script lang="ts">
</script>

<div class="bar">
	<button class="hamburger-container" on:click>
		<div class="hamburger-line" />
		<div class="hamburger-line" />
		<div class="hamburger-line" />
	</button>
</div>

<style lang="scss">
	.bar {
		background-color: $navbar-color-opaque;
		padding: 15px 10px 15px 10px;
	}

	.hamburger-container {
		cursor: pointer;
		display: inline-block;
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
	}

	.hamburger-line {
		background: $main-gradient;
		width: 2.2rem;
		height: 0.3rem;
		min-height: 0.3rem;
		max-height: 0.3rem;
		border-radius: 50px;
		margin: 5px;
	}
</style>
