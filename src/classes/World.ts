import { Color4, Engine, Scene, Vector3, WebGPUEngine } from '@babylonjs/core';
import { Sphere } from './Sphere';
import { Camera } from './Camera';
import { screenHeight, screenWidth } from '$utils/screenDimensions';
import type { GameObject } from './GameObject';
import { ProjectSettings } from './ProjectSettings';

export class World {
	private _canvas: HTMLCanvasElement;
	private _engine: Engine | WebGPUEngine;
	private _scene: Scene;
	private _projectSettings: ProjectSettings;
	private _gameObjects: GameObject[];
	private _camera: Camera;

	constructor(canvas: HTMLCanvasElement, webGPUSupported: boolean) {
		this._canvas = canvas;
		if (webGPUSupported) {
			this._engine = new WebGPUEngine(canvas);
		} else {
			this._engine = new Engine(canvas, true);
		}
		this._scene = new Scene(this._engine);
		this._gameObjects = [];
		this._projectSettings = ProjectSettings.getInstance();
	}

	public setup() {
		this._scene.clearColor = new Color4(0, 0, 0, 0);
		//camera setup
		this._camera = new Camera('Camera', new Vector3(0, 0, -10), this._scene);
		this._projectSettings.corners = this.calculateCorners();
		this._gameObjects.push(this._camera);
		const spheres = this.generatePoints(75);
		this._gameObjects.push(...spheres);

		this._gameObjects.forEach((object) => {
			object.setup();
		});
		this._engine.runRenderLoop(() => {
			this.findNeighbours(spheres);
			this._scene.render();
			this._gameObjects.forEach((object) => {
				object.update();
			});
		});

		window.addEventListener('resize', () => {
			this._engine.resize();
			this._canvas.width = window.innerWidth;
			this._canvas.height = window.innerHeight;
			this._projectSettings.corners = this.calculateCorners();
		});
	}

	dispose() {
		this._scene.dispose();
		this._engine.dispose();
	}

	generatePoints(amount: number): Sphere[] {
		const DIAMETER = 0.05;
		const spheres: Sphere[] = [];
		for (let i = 0; i < amount; i++) {
			const sphere = new Sphere(
				`sphere${i}`,
				this.randomPosition(DIAMETER / 2),
				DIAMETER,
				this._scene
			);
			spheres.push(sphere);
		}
		return spheres;
	}

	randomPosition(radius: number): Vector3 {
		const topRight = this._projectSettings.corners.topRight;
		const bottomLeft = this._projectSettings.corners.bottomLeft;
		return new Vector3(
			Math.random() * (topRight.x - radius - (bottomLeft.x + radius)) + (bottomLeft.x + radius),
			Math.random() * (topRight.y - radius - (bottomLeft.y + radius)) + (bottomLeft.y + radius),
			0
		);
	}

	calculateCorners() {
		const corners = this._projectSettings.corners;
		//topLeft
		corners.topLeft.x =
			0 - screenWidth(this._camera.camera, this._engine.getAspectRatio(this._camera.camera)) / 2;
		corners.topLeft.y = screenHeight(this._camera.camera) / 2;
		//topRight
		corners.topRight.x =
			screenWidth(this._camera.camera, this._engine.getAspectRatio(this._camera.camera)) / 2;
		corners.topRight.y = screenHeight(this._camera.camera) / 2;
		//bottomLeft
		corners.bottomLeft.x =
			0 - screenWidth(this._camera.camera, this._engine.getAspectRatio(this._camera.camera)) / 2;
		corners.bottomLeft.y = 0 - screenHeight(this._camera.camera) / 2;
		//bottomRight
		corners.bottomRight.x =
			screenWidth(this._camera.camera, this._engine.getAspectRatio(this._camera.camera)) / 2;
		corners.bottomRight.y = 0 - screenHeight(this._camera.camera) / 2;

		return corners;
	}

	findNeighbours(spheres: Sphere[]) {
		spheres.forEach((sphere) => {
			const neighbours = spheres
				.filter((n) => n !== sphere)
				.sort((a, b) => {
					return (
						Vector3.Distance(a.position, sphere.position) -
						Vector3.Distance(b.position, sphere.position)
					);
				})
				.slice(0, 3);
			sphere.neighbours = neighbours;
		});
	}
}
