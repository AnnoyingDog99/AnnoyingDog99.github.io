<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import type { Position } from 'svelte-cubed/types/common';
	import { screenHeight, screenWidth } from '$utils/screenDimensions';
	import type { Node } from '$classes/Node';

	export let color: string;
	export let node: Node;

	export let position: Position;
	export let velocity: number = 0.1;

	let lines: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>[] = [];

	//generate random direction
	let direction: THREE.Vector3 = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, 0);

	const sWidth = screenWidth(position[2]);
	const sHeight = screenHeight(position[2]);

	const topLeft = new THREE.Vector3(-sWidth / 2, sHeight / 2, position[2]);
	const topRight = new THREE.Vector3(sWidth / 2, sHeight / 2, position[2]);
	const bottomLeft = new THREE.Vector3(-sWidth / 2, -sHeight / 2, position[2]);

	//CIRCLE
	const circleGeometry = new THREE.CircleGeometry(node.radius, 32);
	const circleMaterial = new THREE.MeshBasicMaterial({ color });

	SC.onFrame(() => {
		node.position = new THREE.Vector3(position[0], position[1], position[2]);
		bounce();
		drawLines();
	});

	function bounce() {
		if (position[0] - node.radius < topLeft.x || position[0] + node.radius > topRight.x) {
			direction.x *= -1;
		}
		if (position[1] + node.radius > topLeft.y || position[1] - node.radius < bottomLeft.y) {
			direction.y *= -1;
		}

		position[0] += velocity * direction.x;
		position[1] += velocity * direction.y;
	}

	function drawLines() {
		lines.forEach((line) => {
			line.geometry.dispose();
			line.material.dispose();
			//get points used in the line
		});
		lines = [];

		//draw lines to nearest neighbours
		for (let i = 0; i < node.neighbours.length; i++) {
			const line = new THREE.Line(
				new THREE.BufferGeometry().setFromPoints([node.position, node.neighbours[i].position]),
				new THREE.LineBasicMaterial({
					color: '#5f6fc8'
				})
			);
			line.renderOrder = -1;
			lines.push(line);
		}
		for (let i = 0; i < lines.length; i++) {
			for (let j = 0; j < lines.length; j++) {
				const lineA = lines[i].geometry.attributes.position.array;
				const lineB = lines[j].geometry.attributes.position.array;
				if (
					(lineA[0] === lineB[0] && lineA[1] === lineB[1]) ||
					(lineA[0] === lineB[1] && lineA[1] === lineB[0])
				) {
					lines.splice(j, 1);
				}
			}
		}
		lines = lines;
	}
</script>

<SC.Mesh geometry={circleGeometry} material={circleMaterial} {position} />
{#each lines as line}
	<SC.Primitive object={line} />
{/each}
