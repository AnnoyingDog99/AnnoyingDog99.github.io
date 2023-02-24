import type { LineObject } from '$types/LineObject';
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
	private _lines: Set<LineObject>;
	private _colors = [
		new Color4(106 / 255, 104 / 255, 191 / 255, 1),
		new Color4(55 / 255, 137 / 255, 230 / 255, 1)
	];

	constructor(name: string, position: Vector3, diameter: number, scene: Scene) {
		this._name = name;
		this._diameter = diameter;
		this._neighbours = [];
		this._scene = scene;
		this._lines = new Set();
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
	//FIXME: No lines exist yet
	drawLines() {
		// //check if there are lines
		// this._lines.forEach(line => {
		// 	line.mesh.dispose();
		// })
		// this._lines = new Set();
		// console.log(this._lines.size);



		if (this._lines.size === 0) {
			//generate lines for all neighbours
			this._neighbours.forEach(neighbour => {
				const options = {
					points: [neighbour.position, this._sphere.position],
					updatable: true,
					colors: this._colors
				}
				const line = MeshBuilder.CreateLines(
					'line',
					options,
					this._scene
				);
				const newLine = {
					mesh: line,
					neighbour: neighbour,
					options: options
				}
				this._lines.add(newLine);
			});
			return;
		}

		//check if line is still needed
		this._lines.forEach(line => {
			for (let j = 0; j < this._neighbours.length; j++) {
				if (!line.neighbour.position.equals(this._neighbours[j].position)) {
					//remove line
					line.mesh.dispose();
					this._lines.delete(line);
				}
			}
		});

		//check for duplicate lines
		this._lines.forEach(line => {
			this._neighbours.forEach(neighbour => {
				neighbour.neighbours.forEach(nesterNeighbour => {
					if(line.mesh.position.equals(nesterNeighbour.position)){
						line.mesh.dispose();
						this._lines.delete(line);
					}
				})
			})
		});

		for (let i = 0; i < this._neighbours.length; i++) {
			//check if line to neighbour already exists
			this._lines.forEach(line => {
				if (this._neighbours[i].position.equals(line.neighbour.position)) {

					// line exists, so update it
					const options = {
						points: [this._neighbours[i].position, this._sphere.position],
						updatable: true,
						instance: line.mesh,
					}
					line.options.points = [this._neighbours[i].position, this._sphere.position];
					line.options.instance = line.mesh;

					line.mesh = MeshBuilder.CreateLines(
						'line',
						options,
						this._scene
					);
				} else {
					//line does not exist, create new line
					const options = {
						points: [this._neighbours[i].position, this._sphere.position],
						updatable: true,
						colors: this._colors
					}
					const line = MeshBuilder.CreateLines(
						'line',
						options,
						this._scene
					);
					const newLine = {
						mesh: line,
						neighbour: this._neighbours[i],
						options: options
					}
					this._lines.add(newLine);
				}
			});
		}
		// const currentLines = [];
		// this._neighbours.forEach((neighbour) => {
		// 	const line = [neighbour.position, this._sphere.position];
		// 	//check if line already exists
		// 	currentLines.forEach((line) => {
		// 		if (
		// 			(line[0] === neighbour.position && line[1] === this._sphere.position) ||
		// 			(line[0] === this._sphere.position && line[1] === neighbour.position)
		// 		) {
		// 			return;
		// 		}
		// 	});
		// 	currentLines.push(line);
		// });

		// currentLines.forEach((line) => {

		// 	const newLine = MeshBuilder.CreateLines(
		// 		'line',
		// 		{ points: [line[0], line[1]], colors: this._colors },
		// 		this._scene
		// 	);
		// 	this._lines.push(newLine);
		// });
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
