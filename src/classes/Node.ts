import type { Cell } from "./Cell";

export class Node {
	private _position: THREE.Vector3;
	private _kClosest: number;
	private _neighbours: Node[];
	private _radius: number;
	private _cell: Cell;

	constructor(position: THREE.Vector3, kClosest: number, radius: number) {
		this._position = position;
		this._kClosest = kClosest;
		this._neighbours = [];
		this._radius = radius;
	}

	get position() {
		return this._position;
	}

	set position(position: THREE.Vector3) {
		this._position = position;
	}

	get neighbours() {
		return this._neighbours;
	}

	set neighbours(neighbours: Node[]) {
		this._neighbours = neighbours;
	}

	get radius() {
		return this._radius;
	}

	set radius(radius: number) {
		this._radius = radius;
	}

	get kClosest() {
		return this._kClosest;
	}

	set kClosest(kClosest: number) {
		this._kClosest = kClosest;
	}

	get cell() {
		return this._cell;
	}

	set cell(cell: Cell) {		
		this._cell = cell;
	}
}
