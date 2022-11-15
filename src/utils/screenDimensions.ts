import { cameraConfig } from '$utils/cameraConfig';

export function screenHeight(depth = 0) {
	const cameraOffset = cameraConfig.position[2];
	if (depth < cameraOffset) {
		depth -= cameraOffset;
	} else {
		depth += cameraOffset;
	}

	const vFOV = (cameraConfig.fov * Math.PI) / 180;

	return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
}

export function screenWidth(depth = 0) {
	const height = screenHeight(depth);
	return height * cameraConfig.aspect;
}
