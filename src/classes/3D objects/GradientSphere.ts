import { Color3, CreateSphere, Vector3 } from "@babylonjs/core";
import { GradientMaterial } from "@babylonjs/materials";


export class GradientSphere{
    constructor(position, scene){
        let sphere = CreateSphere("gradientSphere", { segments: 16, diameter: 2 }, scene);
        const material = new GradientMaterial("grad", scene);
        material.topColor = new Color3(55, 137, 230);
        material.bottomColor = new Color3(106, 104, 191);
        material.offset = 0.25;
        sphere.material = material;
    }
}