import type { Vector2 } from "three";
import type { Node } from "./Node";

export class Cell {
    private _nodes: Node[];
    private _topRight: Vector2;
    private _bottomLeft: Vector2;

    constructor(topRight: Vector2, bottomLeft: Vector2) {
        this._nodes = [];
        this._topRight = topRight;
        this._bottomLeft = bottomLeft;
    }


    public get topRight(): Vector2 {
        return this._topRight
    }

    public get bottomLeft(): Vector2 {
        return this._bottomLeft;
    }

    public addNode(node: Node) {
        this._nodes.push(node)
    }
}