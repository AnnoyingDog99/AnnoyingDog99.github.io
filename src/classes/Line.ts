import { Axis, Color3, MeshBuilder, Scene, StandardMaterial, Vector3 } from "@babylonjs/core";

export class Line{
    private _startPosition: Vector3;
    private _endPosition: Vector3;
    private _color: Color3;
    private _width: number;

    constructor(startPosition: Vector3, endPosition: Vector3, color: Color3, width: number, scene: Scene){
        this._startPosition = startPosition;
        this._endPosition = endPosition;
        this._color = color;
        this._width = width;

        const mesh = MeshBuilder.CreatePlane("line", {width: width, height: Vector3.Distance(startPosition, endPosition)});

        let material = new StandardMaterial("", scene);
        material.disableLighting = true;
        material.emissiveColor = color;
        mesh.material = material;

        let posX = (startPosition.x + endPosition.x) / 2;
        let posY = (startPosition.y + endPosition.y) / 2;
        mesh.position = new Vector3(posX, posY, 0);
        mesh.rotate(Axis.Z, -1 * Math.atan2(endPosition.y + startPosition.y, endPosition.x + startPosition.x));
    }
}