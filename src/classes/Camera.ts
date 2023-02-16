import { ArcRotateCamera, Vector3, type Scene } from "@babylonjs/core";

export class Camera {
    constructor(name: string, target: Vector3, scene: Scene) {
        let camera = new ArcRotateCamera(name, Math.PI / 2, Math.PI / 2, 2, target, scene);
        camera.setTarget(Vector3.Zero());
    }
}