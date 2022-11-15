<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import Circle from '$components/K-nearest/Circle.svelte';
	import { Controller } from '$classes/Controller';
	import { cameraConfig } from '$utils/cameraConfig';
	import { onMount } from 'svelte';
	import { screenHeight, screenWidth } from '$utils/screenDimensions';

	// camera setup
	onMount(() => {
		cameraConfig.aspect = window.innerWidth / window.innerHeight;
	});

	const sWidth = screenWidth(0);
	const sHeight = screenHeight(0);

	const topRight = new THREE.Vector3(sWidth, sHeight / 2, 0);
	const bottomLeft = new THREE.Vector3(-sWidth, -sHeight / 2, 0);

	const controller = Controller.getInstance();
	controller.init(bottomLeft, topRight, 3);
	controller.generatePoints(150);
	const nodes = controller.nodes;

	SC.onFrame(() => {
		controller.update();
	});
</script>

<div class="canvas-container">
	<SC.Canvas alpha antialias>
		<SC.PerspectiveCamera
			position={cameraConfig.position}
			fov={cameraConfig.fov}
			near={cameraConfig.near}
			far={cameraConfig.far}
		/>
		{#each nodes as node}
			<Circle color="#ffffff" {node} position={[node.position.x, node.position.y, 0]} />
		{/each}
	</SC.Canvas>
</div>
