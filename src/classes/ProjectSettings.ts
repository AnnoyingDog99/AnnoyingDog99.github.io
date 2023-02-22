import { Vector3 } from '@babylonjs/core';

export interface Corners {
	topLeft: Vector3;
	topRight: Vector3;
	bottomLeft: Vector3;
	bottomRight: Vector3;
}

export class ProjectSettings {
	private static _instance: ProjectSettings;
	private _corners: Corners;
	constructor() {
		this._corners = {
			topLeft: new Vector3(),
			topRight: new Vector3(),
			bottomLeft: new Vector3(),
			bottomRight: new Vector3()
		};
	}

	public static getInstance(): ProjectSettings {
		if (!ProjectSettings._instance) {
			ProjectSettings._instance = new ProjectSettings();
		}
		return ProjectSettings._instance;
	}

	get corners() {
		return this._corners;
	}

	set corners(corners: Corners) {
		this._corners = corners;
	}
}
