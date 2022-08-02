<script>
</script>

<div class="loader" />

<style lang="scss">
	.loader {
		position: relative;
		width: 200px;
		height: 200px;
		border-radius: 10rem;
		background: $main-gradient;
		animation: animate 1s linear infinite;
	}

	.loader::before {
		position: absolute;
		content: '';
		background: $background-color;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 80%;
		height: 80%;
		border-radius: 10rem;
	}

	@keyframes animate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
