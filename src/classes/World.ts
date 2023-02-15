import { ArcRotateCamera, Color4, CreateSphere, Engine, HemisphericLight, Scene, UniversalCamera, Vector3, WebGPUEngine } from "@babylonjs/core";
import { GridMaterial } from "@babylonjs/materials/grid/gridMaterial";
export class World{
    private _canvas: HTMLCanvasElement;
    private _engine;
    private _scene;
    constructor(canvas: HTMLCanvasElement, webGPUSupported: boolean){
        this._canvas = canvas;
        if(webGPUSupported){
            this._engine = new WebGPUEngine(canvas);
        } else{
            this._engine = new Engine(canvas, true)
        }
        this._scene = new Scene(this._engine);
    }

    public setup(){
        this._engine.switchFullscreen;
        this._scene.clearColor = new Color4(0.9, 0.3, 0.3, 1);
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
        let sphere = CreateSphere("sphere1", { segments: 16, diameter: 2 }, this._scene);
        sphere.position.y = 2;
        sphere.material = material;

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