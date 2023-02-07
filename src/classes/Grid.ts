import { Vector2, type Vector3 } from "three";
import { Cell } from "./Cell";

export class Grid {
    private _bottomLeft: Vector3;
    private _topRight: Vector3;
    private _rows: number;
    private _columns: number;
    private _cells: Cell[][];

    constructor(bottomLeft: Vector3, topRight: Vector3, rows: number, columns: number) {
        this._bottomLeft = bottomLeft;
        this._topRight = topRight;
        this._rows = rows;
        this._columns = columns;
        this._cells = [];
    }

    init() {
        let gridWidth = this._topRight.x - this._bottomLeft.x;
        let gridHeight = this._topRight.y - this._bottomLeft.y;

        let cellWidth = gridWidth / this._rows;
        let cellHeight = gridHeight / this._columns;

        for (let i = 0; i < this._columns; i++) {
            let rowCells = [];
            for (let j = 0; j < this._rows; j++) {
                let cellTopRight = new Vector2(this._bottomLeft.x + (cellWidth * (j + 1)), this._topRight.y - (cellHeight * i));
                let cellBottomLeft = new Vector2(this._bottomLeft.x + (cellWidth * j), this._topRight.y - (cellHeight * (i + 1)));
                rowCells.push(new Cell(cellTopRight, cellBottomLeft, j, i))
            }
            this._cells.push(rowCells)
        }
    }
    
    public get cells() : Cell[][] {
        return this._cells;
    }

    public clearGrid(){
        this._cells.forEach((row) => {
            row.forEach((cell) => {
                cell.clearCell();
            })
        })
    }
    
}