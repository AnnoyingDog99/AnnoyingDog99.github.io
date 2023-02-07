<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import Circle from '$components/K-nearest/Circle.svelte';
	import { Controller } from '$classes/Controller';
	import { cameraConfig } from '$utils/cameraConfig';
	import { onMount } from 'svelte';
	import { screenHeight, screenWidth } from '$utils/screenDimensions';
	import { Node } from '$classes/Node';
	import { Mesh, PlaneGeometry, Vector2, Vector3 } from 'three';

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
	controller.generatePoints(10);
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
		<!-- {#each nodes as node}
			<Circle color="#ffffff" {node} position={[node.position.x, node.position.y, 0]} />
		{/each} -->
		{#each controller.grid.cells as row, i}
			{#each row as cell, j}
				{#if i === 1 && j === 1}
					<SC.Mesh geometry={new THREE.PlaneGeometry(cell.topRight.x - cell.bottomLeft.x, cell.topRight.y - cell.bottomLeft.y)} material={new THREE.MeshBasicMaterial({color: new THREE.Color(`rgb(${i}, ${j*2}, ${50})`)})} position={[(cell.topRight.x + cell.bottomLeft.x) / 2, (cell.topRight.y + cell.bottomLeft.y) / 2, 0]}/>
				{/if}
			{/each}
		{/each}
	</SC.Canvas>
	
</div>
