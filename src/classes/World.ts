import { Color3, Color4, Engine, Scene, Vector3, WebGPUEngine } from "@babylonjs/core";
import { Sphere } from "./Sphere";
import { Camera } from "./Camera";
import { Line } from "./Line";

export class World {
    private _canvas: HTMLCanvasElement;
    private _engine: Engine | WebGPUEngine;
    private _scene: Scene;
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
        this._scene.clearColor = new Color4(0, 0, 0, 0);
        //camera setup
        let camera = new Camera("Camera", new Vector3(0, 0, -20), this._scene);

        //add sphere
        let sphere1 = new Sphere(new Vector3(0, 0, 0), this._scene);
        let sphere2 = new Sphere(new Vector3(1, 1, 0), this._scene);
        let sphere3 = new Sphere(new Vector3(2, 2, 0), this._scene);
        let sphere4 = new Sphere(new Vector3(3, 3, 0), this._scene);
        let sphere5 = new Sphere(new Vector3(-3, -2, 0), this._scene);
        let sphere6 = new Sphere(new Vector3(3, -2, 0), this._scene);
        let sphere7 = new Sphere(new Vector3(5, 5, 0), this._scene);
        let sphere8 = new Sphere(new Vector3(-7, 7, 0), this._scene);


        let line1 = new Line(new Vector3(0, 0, 0), new Vector3(1, 1, 0), Color3.Black(), 0.1, this._scene);
        let line2 = new Line(new Vector3(5, 5, 0), new Vector3(-7, 7, 0), Color3.Red(), 0.04, this._scene);


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