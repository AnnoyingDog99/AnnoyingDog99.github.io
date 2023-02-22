import { FreeCamera, Vector3, type Scene } from '@babylonjs/core';
import type { GameObject } from './GameObject';

export class Camera implements GameObject {
	private _camera: FreeCamera;
	private _name: string;
	private _position: Vector3;
	constructor(name: string, position: Vector3, scene: Scene) {
		this._camera = new FreeCamera(name, position, scene);
	}

	setup(): void {
		this._camera.setTarget(Vector3.Zero());
	}

	// eslint-disable-next-line
	update(): void {}

	get camera() {
		return this._camera;
	}

	get name() {
		return this._name;
	}

	get position() {
		return this._position;
	}
}
