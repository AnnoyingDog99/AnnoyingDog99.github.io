import type { Vector2 } from "three";
import type { Node } from "./Node";

export class Cell {
    private _nodes: Node[];
    private _topRight: Vector2;
    private _bottomLeft: Vector2;
    private _indexRow: number;
    private _indexColumn: number;

    constructor(topRight: Vector2, bottomLeft: Vector2, indexRow: number, indexColumn: number) {
        this._nodes = [];
        this._topRight = topRight;
        this._bottomLeft = bottomLeft;
        this._indexRow = indexRow;
        this._indexColumn = indexColumn;
    }

    public get topRight(): Vector2 {
        return this._topRight
    }

    public get bottomLeft(): Vector2 {
        return this._bottomLeft;
    }

    public addNode(node: Node) {
        this._nodes.push(node);
    }

    public get nodes(){
        return this._nodes;
    }

    public clearCell(){
        this._nodes = [];
    }

    public get indexRow(){
        return this._indexRow;
    }

    public get indexColumn(){
        return this._indexColumn;
    }
}