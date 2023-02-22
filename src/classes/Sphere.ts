import {
	Color3,
	Vector3,
	MeshBuilder,
	StandardMaterial,
	Scene,
	Mesh,
	LinesMesh,
	Color4
} from '@babylonjs/core';
import type { GameObject } from './GameObject';
import { ProjectSettings } from './ProjectSettings';

export class Sphere implements GameObject {
	private _name: string;
	private _sphere: Mesh;
	private _direction: Vector3 = new Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, 0);
	private _diameter: number;
	private _velocity = 0.01;
	private _neighbours: Sphere[];
	private _scene: Scene;
	private _lines: LinesMesh[];

	constructor(name: string, position: Vector3, diameter: number, scene: Scene) {
		this._name = name;
		this._diameter = diameter;
		this._neighbours = [];
		this._scene = scene;
		this._lines = [];
		this._sphere = MeshBuilder.CreateSphere(
			this._name,
			{ segments: 16, diameter: this._diameter },
			this._scene
		);
		this._sphere.position = position;
	}

	setup(): void {
		const material = new StandardMaterial('', this._scene);
		material.disableLighting = true;
		material.emissiveColor = new Color3(1, 1, 1);
		this._sphere.material = material;
	}

	update(): void {
		if (!ProjectSettings.getInstance().corners) {
			return;
		}

		const topLeft = ProjectSettings.getInstance().corners.topLeft;
		const topRight = ProjectSettings.getInstance().corners.topRight;
		const bottomLeft = ProjectSettings.getInstance().corners.bottomLeft;

		//make the spheres bounce on the edges of the screen
		if (
			this._sphere.position.x - this._diameter / 2 < topLeft.x ||
			this._sphere.position.x + this._diameter / 2 > topRight.x
		) {
			this._direction.x *= -1;
		}
		if (
			this._sphere.position.y + this._diameter / 2 > topLeft.y ||
			this._sphere.position.y - this._diameter / 2 < bottomLeft.y
		) {
			this._direction.y *= -1;
		}
		this._sphere.position.x += this._velocity * this._direction.x;
		this._sphere.position.y += this._velocity * this._direction.y;

		this.drawLines();
	}

	drawLines() {
		this._lines.forEach((line) => {
			line.dispose();
		});
		this._lines = [];
		const currentLines = [];
		this._neighbours.forEach((neighbour) => {
			const line = [neighbour.position, this._sphere.position];
			//check if line already exists
			currentLines.forEach((line) => {
				if (
					(line[0] === neighbour.position && line[1] === this._sphere.position) ||
					(line[0] === this._sphere.position && line[1] === neighbour.position)
				) {
					return;
				}
			});
			currentLines.push(line);
		});

		currentLines.forEach((line) => {
			const colors = [
				new Color4(106 / 255, 104 / 255, 191 / 255, 0.7),
				new Color4(55 / 255, 137 / 255, 230 / 255, 0.7)
			];
			const newLine = MeshBuilder.CreateLines(
				'line',
				{ points: [line[0], line[1]], colors: colors },
				this._scene
			);
			newLine.color = new Color3(106 / 255, 104 / 255, 191 / 255);
			this._lines.push(newLine);
		});
	}

	get name() {
		return this._name;
	}

	get position() {
		return this._sphere.position;
	}

	get neighbours() {
		return this._neighbours;
	}

	set neighbours(spheres: Sphere[]) {
		this._neighbours = spheres;
	}
}
