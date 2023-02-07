import { Node } from './Node';
import * as THREE from 'three';
import { Grid } from './Grid';
import type { Vector2, Vector3 } from 'three';

export class Controller {
	private static _instance: Controller;

	private _nodes: Node[];
	private _bottomLeft: THREE.Vector3;
	private _topRight: THREE.Vector3;
	private _kClosest: number;
	private _grid: Grid;

	private constructor() {
		this._nodes = [];
	}

	public static getInstance(): Controller {
		if (!Controller._instance) {
			Controller._instance = new Controller();
		}
		return Controller._instance;
	}

	public init(bottomLeft: THREE.Vector3, topRight: THREE.Vector3, kClosest: number) {
		this._bottomLeft = bottomLeft;
		this._topRight = topRight;
		this._kClosest = kClosest;
		this._grid = new Grid(this._bottomLeft, this._topRight, 10, 5);
		this._grid.init();
	}

	public generatePoints(amount: number) {
		this._nodes = [];
		const RADIUS = 0.5;
		for (let i = 0; i < amount; i++) {
			const x =
				Math.random() * (this._topRight.x - RADIUS - (this._bottomLeft.x + RADIUS)) +
				(this._bottomLeft.x + RADIUS);
			const y =
				Math.random() * (this._topRight.y - RADIUS - (this._bottomLeft.y + RADIUS)) +
				(this._bottomLeft.y + RADIUS);
			const node = new Node(new THREE.Vector3(x, y, 0), this._kClosest, RADIUS);
			this._nodes.push(node);
		}
	}

	public addPointsToGrid() {	
		this._grid.cells.forEach(row => {
			row.forEach((cell) => {
				this._nodes.forEach((node) => {
					if (this.pointWithin(node.position, cell.bottomLeft, cell.topRight)) {
						cell.addNode(node);
						node.cell = cell;
					}
				})
			})
		})
	}

	public update() {
		this.addPointsToGrid();
		this._nodes.forEach((node) => {
			node.neighbours = [];
			node.neighbours = this.findNearestNeighbour(node);
		});
		this._grid.clearGrid();
	}

	get nodes() {
		return this._nodes;
	}

	private pointWithin(point: Vector3, bottomLeft: Vector2, topRight: Vector2) {
		//check x
		if (point.x < bottomLeft.x || point.x > topRight.x) {
			return false;
		}
		//check y
		if (point.y < bottomLeft.y || point.y > topRight.y) {
			return false;
		}
		return true;
	}

	private findNearestNeighbour(node: Node) {
		let searchLength = 3;
		let searchRadius = 1;

		const neighbours: Node[] = [];

		let currentCellIndexRow = node.cell.indexRow;
		let currentCellIndexColumn = node.cell.indexColumn;

		while (neighbours.length < this._kClosest) {
			let startIndexRow = currentCellIndexRow - searchRadius;
			let startIndexColumn = currentCellIndexColumn - searchRadius;
			for (let i = 0; i < searchLength; i++) { //check surrounding rows
				for (let j = 0; j < searchLength; j++) { //check surrounding columns
					//check if [startIndexRow][startIndexColumn] is within grid
					if (startIndexRow + i < 0 || startIndexRow + i >= this._grid.cells.length) {
						continue;
					}
					if (startIndexColumn + j < 0 || startIndexColumn + j >= this._grid.cells[0].length) {
						continue;
					}
					const cell = this._grid.cells[startIndexRow + i][startIndexColumn + j];
					
					neighbours.push(...cell.nodes);
				}
			}
			searchLength++;
			searchRadius++;
		}
		//sort neighbours by distance
		neighbours.sort((a, b) => {
			return a.position.distanceTo(node.position) - b.position.distanceTo(node.position);
		})
		//return only n closest neighbours
		return neighbours.slice(0, this._kClosest);
	}

	get grid() {
		return this._grid;
	}
}
