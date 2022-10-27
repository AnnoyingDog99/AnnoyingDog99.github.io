import type { Point } from "./Point";

export class Node{
    private _point: Point;
    private _neighbours: Node[];

    constructor(point: Point){
        this._point = point;
        this._neighbours = []
    }

    set neighbours(neighbours: Node[]){
        this._neighbours = neighbours;
    }
}