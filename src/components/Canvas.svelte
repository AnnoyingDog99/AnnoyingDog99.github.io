<script lang="ts">
	import { World } from "$classes/World";
    import {onMount} from 'svelte'

    let canvasCtx: HTMLCanvasElement;

    onMount(() => {
        canvasCtx.width = window.innerWidth;
        canvasCtx.height = window.innerHeight;
        let webGPUSupported = false;
        if("gpu" in navigator){
            webGPUSupported = true;
        }
        const world = new World(canvasCtx, webGPUSupported);
        world.setup();
    })
</script>



<canvas bind:this={canvasCtx}></canvas>

<style lang="scss">
    canvas{
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
</style>