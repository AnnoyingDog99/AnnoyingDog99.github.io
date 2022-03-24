<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { vertex, fragment } from '../shaders/gradient';
    import type { Position, Rotation, Scale } from 'svelte-cubed/types/common';

    export let startColor;
    export let endColor;
    export let scale: Scale = [1.0, 1.0, 1.0];
    export let position: Position = [0.0, 0.0, 0.0];
    export let rotation: Rotation = [0.0, 0.0, 0.0];
</script>

<SC.Mesh
    bind:position
    bind:scale
    bind:rotation
	geometry={new THREE.SphereGeometry(1, 64, 64)}
	material={new THREE.ShaderMaterial({
		uniforms: {
			color1: {
				value: new THREE.Color(startColor)
			},
			color2: {
				value: new THREE.Color(endColor)
			}
		},
		vertexShader: vertex(),
		fragmentShader: fragment()
	})}
	castShadow
	receiveShadow
/>
