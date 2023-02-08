<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { screenHeight, screenWidth } from '$utils/screenDimensions';

	const boxGeometryFullHeight = new THREE.BoxGeometry(1, screenHeight(-50), 1);
	const boxMaterialFullHeight = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

	const boxGeometryFullWidth = new THREE.BoxGeometry(screenWidth(-50), 1, 1);
	const boxMaterialFullWidth = new THREE.MeshBasicMaterial({ color: 0x5f3f10 });

	const boxGeometryCorner = new THREE.BoxGeometry(1, 1, 1);
	const boxMaterialCorner = new THREE.MeshBasicMaterial({ color: 0xf00f00 });
</script>

<!--Full height-->
<SC.Mesh geometry={boxGeometryFullHeight} material={boxMaterialFullHeight} position={[0, 0, -50]} />
<!--Full width-->
<SC.Mesh geometry={boxGeometryFullWidth} material={boxMaterialFullWidth} position={[0, 0, -50]} />
<!--Top Left-->
<SC.Mesh
	geometry={boxGeometryCorner}
	material={boxMaterialCorner}
	position={[-(screenWidth(-50) / 2), screenHeight(-50) / 2, -50]}
/>
<!--Top Right-->
<SC.Mesh
	geometry={boxGeometryCorner}
	material={boxMaterialCorner}
	position={[screenWidth(-50) / 2, screenHeight(-50) / 2, -50]}
/>
<!--Bottom Left-->
<SC.Mesh
	geometry={boxGeometryCorner}
	material={boxMaterialCorner}
	position={[-(screenWidth(-50) / 2), -(screenHeight(-50) / 2), -50]}
/>
<!--Bottom Right-->
<SC.Mesh
	geometry={boxGeometryCorner}
	material={boxMaterialCorner}
	position={[screenWidth(-50) / 2, -(screenHeight(-50) / 2), -50]}
/>
