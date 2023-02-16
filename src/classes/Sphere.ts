import { Color3, Vector3, MeshBuilder, StandardMaterial, Scene } from "@babylonjs/core";

export class Sphere {
    constructor(position: Vector3, scene: Scene) {
        let sphere = MeshBuilder.CreateSphere("Sphere", { segments: 16, diameter: 0.2 }, scene);
        sphere.position = position;
        let material = new StandardMaterial("", scene);
        material.disableLighting = true;
        material.emissiveColor = new Color3(106 / 255, 104 / 255, 191 / 255)
        sphere.material = material;
    }
}