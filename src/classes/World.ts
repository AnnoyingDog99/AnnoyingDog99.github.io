import { ArcRotateCamera, Color3, Color4, CreateSphere, Engine, HemisphericLight, MeshBuilder, Scene, UniversalCamera, Vector3, WebGPUEngine } from "@babylonjs/core";
import { GradientMaterial } from "@babylonjs/materials";
import { GridMaterial } from "@babylonjs/materials/grid/gridMaterial";
import { GradientSphere } from "./3D objects/GradientSphere";
export class World {
    private _canvas: HTMLCanvasElement;
    private _engine;
    private _scene;
    constructor(canvas: HTMLCanvasElement, webGPUSupported: boolean) {
        this._canvas = canvas;
        if (webGPUSupported) {
            this._engine = new WebGPUEngine(canvas);
        } else {
            this._engine = new Engine(canvas, true)
        }
        this._scene = new Scene(this._engine);
    }

    public setup() {
        this._engine.switchFullscreen;
        this._scene.clearColor = new Color4(0, 0, 0, 0);
        //camera setup
        let camera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new Vector3(0, 0, -20), this._scene);
        camera.setTarget(Vector3.Zero());
        camera.attachControl(this._canvas, true);

        //add lightning
        let light = new HemisphericLight("light1", new Vector3(0, 1, 0), this._scene);
        light.intensity = 0.7;

        //add grid
        let material = new GridMaterial("grid", this._scene);

        //add sphere
        // let sphere = CreateSphere("sphere1", { segments: 16, diameter: 2 }, this._scene);
        // sphere.position.y = 2;
        // sphere.material = material;
        // let sphere = new GradientSphere(new Vector3(0, 0, 0), this._scene);
        let sphere = MeshBuilder.CreateSphere("sphere", { segments: 32, diameter: 2 }, this._scene);

        let gradientMaterial = new GradientMaterial("grad", this._scene);
        gradientMaterial.topColor = Color3.Red(); // Set the gradient top color
        gradientMaterial.bottomColor = Color3.Blue(); // Set the gradient bottom color
        gradientMaterial.offset = 0.25;

        sphere.material = gradientMaterial;

        this._engine.runRenderLoop(() => {
            this._scene.render();
        });

        window.addEventListener('resize', () => {
            this._engine.resize();
            this._canvas.width = window.innerWidth;
            this._canvas.height = window.innerHeight;
        })

    }
}