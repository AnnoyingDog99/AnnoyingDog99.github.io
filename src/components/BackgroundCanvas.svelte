<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { onMount } from 'svelte';
	import {vertex, fragment} from '../shaders/gradient'
	import Sphere from "./Sphere.svelte"

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
		<Sphere startColor={0x42475a} endColor={0x784b6d} rotation={[0, spin, spin]} scale={[0.4, 0.4, 0.4]} position={[0.8, 0.8, 2]}/>
		<Sphere startColor={0x42475a} endColor={0x784b6d} rotation={[0, spin, spin]} scale={[0.6, 0.6, 0.6]} position={[-2, 0.3, -3]}/>
		<Sphere startColor={0x4e6bb8} endColor={0x3a8acb} rotation={[spin, 0, 0]}/>
		<Sphere startColor={0x42275a} endColor={0x734b6d} rotation={[0, spin, spin]} scale={[0.2, 0.2, 0.2]} position={[0.1, 0.1, 2]}/>
		<SC.PerspectiveCamera position={[cameraPositionX, cameraPositionY, cameraPositionZ]} />
		<SC.AmbientLight intensity={0.3} />
		<SC.DirectionalLight intensity={0.6} position={[0, 0, 1]} shadow={{ mapSize: [2048, 2048] }} />
	</SC.Canvas>
</div>
