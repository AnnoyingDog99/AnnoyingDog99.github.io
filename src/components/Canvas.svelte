<script lang="ts">
	import { World } from '$classes/World';
	import { onDestroy, onMount } from 'svelte';

	let canvasCtx: HTMLCanvasElement;
	let world: World;

	onMount(() => {
		canvasCtx.width = window.innerWidth;
		canvasCtx.height = window.innerHeight;
		let webGPUSupported = false;
		if ('gpu' in navigator) {
			webGPUSupported = true;
		}
		world = new World(canvasCtx, webGPUSupported);
		world.setup();
	});

	onDestroy(() => {
		world.dispose();
	});
</script>

<canvas bind:this={canvasCtx} />
<div />

<style lang="scss">
	canvas {
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
	}

	div {
		backdrop-filter: blur(2px);
		position: fixed;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		z-index: -1;
	}
</style>
