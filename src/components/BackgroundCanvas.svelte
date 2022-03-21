<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { onMount } from 'svelte';
	import {vertex, fragment} from '../shaders/gradient'

	let width = 1;
	let height = 1;
	let depth = 1;

	$: innerWidth = 0;
	$: innerHeight = 0;

	
	let cameraPositionX = 1;
	let cameraPositionY = 1;
	let cameraPositionZ = 4;

	let spin = 0;

	SC.onFrame(() => {
		spin += 0.01;
	});

	onMount(() => {
		document.onmousemove = (e) => {
		let centerX = innerWidth * 0.5;
		let centerY = innerHeight * 0.5;

		cameraPositionX = (e.clientX + centerX) * 0.0005;
		cameraPositionY = (e.clientY + centerY) * 0.0005;
	}
	})
	

</script>

<svelte:window bind:innerWidth bind:innerHeight/>

<div class="-z-10 absolute inset-0">
	<SC.Canvas antialias background={new THREE.Color(0x243244)} shadows>
		<SC.Mesh
			geometry={new THREE.SphereGeometry(1, 64, 64)}
			material={new THREE.ShaderMaterial({
				uniforms: {
					color1: {
						value: new THREE.Color(0x4e6bb8)
					},
					color2: {
						value: new THREE.Color(0x3a8acb)
					}
				},
				vertexShader: vertex(),
				fragmentShader: fragment()
			})}
			castShadow
			receiveShadow
			rotation={[spin, 0, 0]}
		/>
		<SC.Mesh
			geometry={new THREE.SphereGeometry(1, 64, 64)}
			material={new THREE.ShaderMaterial({
				uniforms: {
					color1: {
						value: new THREE.Color(0x42275a)
					},
					color2: {
						value: new THREE.Color(0x734b6d)
					}
				},
				vertexShader: vertex(),
				fragmentShader: fragment()
			})}
			castShadow
			rotation={[0, spin, spin]}
			scale={[0.2, 0.2, 0.2]}
			position={[0.1, 0.1, 2]}
		/>
		<SC.PerspectiveCamera position={[cameraPositionX, cameraPositionY, cameraPositionZ]} />
		<SC.OrbitControls enableZoom={false} maxPolarAngle={Math.PI * 0.51} />
		<SC.AmbientLight intensity={0.3} />
		<SC.DirectionalLight intensity={0.6} position={[0, 0, 1]} shadow={{ mapSize: [2048, 2048] }} />
		<SC.Group position={[0, 0, -2]}>
			<SC.Mesh
				geometry={new THREE.PlaneGeometry(50, 50)}
				material={new THREE.MeshStandardMaterial({ color: 0x243244 })}
				rotation={[0, 0, 0]}
				receiveShadow
			/>
		</SC.Group>
	</SC.Canvas>
</div>
