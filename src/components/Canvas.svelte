<script lang="ts">
	import { onMount } from "svelte";


    export let width: number;
    export let height: number;

    let canvas;
    

    onMount(() => {
    	const ctx = canvas.getContext("2d");
    	ctx.fillStyle = "red";
    	ctx.fillRect(0, 0, 10, 10);
    });
</script>

<canvas id="canvas" {width} {height} bind:this={canvas}>

</canvas>

<style lang="scss">
    canvas{
        z-index: -1;
    }
</style>