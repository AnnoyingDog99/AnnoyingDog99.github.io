import type { FreeCamera } from '@babylonjs/core';

export function screenHeight(camera: FreeCamera, depth = 0) {
	const cameraOffset = camera.position.z;
	if (depth > cameraOffset) {
		depth -= cameraOffset;
	} else {
		depth += cameraOffset;
	}

	const vFOV = camera.fov;

	return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
}

export function screenWidth(camera, aspectRatio, depth = 0) {
	const height = screenHeight(camera, depth);
	return height * aspectRatio;
}
