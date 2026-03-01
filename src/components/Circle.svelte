<script lang="ts">
	export let name: string;
	export let title: string;
</script>

<div class="container">
	<div class="inner top">
		<div class="inner text">
			<h1>{name}</h1>
			<h2>{title}</h2>
		</div>
	</div>

	<div class="inner mid">

	</div>
	<div class="inner bottom">
		
	</div>
</div>

<style lang="scss">
	.container {
		color: white;
		margin: 0 auto;
		display: grid;
		place-items: center;
		grid-template-areas: 'inner-div';
	}
	.inner {
		grid-area: inner-div;
	}
	.top {
		background: $main-gradient;
		width: 15em;
		height: 15em;
		border-radius: 50rem;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		text-align: center;
		align-items: center;

		@include lg {
			width: 21em;
			height: 21em;
		}

		@include xl {
			width: 29em;
			height: 29em;
		}

		@include rwd(1600) {
			width: 32em;
			height: 32em;
		}
	}

	.mid {
		background: $main-gradient-opaque;
		width: 17em;
		height: 17em;
		border-radius: 50rem;
		z-index: -1;

		@include lg {
			width: 23em;
			height: 23em;
		}

		@include xl {
			width: 32em;
			height: 32em;
		}

		@include rwd(1600) {
			width: 35em;
			height: 35em;
		}
	}
	.bottom {
		background: $main-gradient-opaque;
		width: 19em;
		height: 19em;
		border-radius: 50rem;
		z-index: -1;

		@include lg {
			width: 25em;
			height: 25em;
		}

		@include xl {
			width: 35em;
			height: 35em;
		}

		@include rwd(1600) {
			width: 38em;
			height: 38em;
		}
	}
	h1,
	h2 {
		padding: 0;
		margin: 0;
		font-family: Quicksand !important;
	}
</style>
