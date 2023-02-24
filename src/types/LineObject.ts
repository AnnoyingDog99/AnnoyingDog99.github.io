import type { Sphere } from "$classes/Sphere";
import type { Color4, LinesMesh, Vector3 } from "@babylonjs/core";

export type LineObject = {
    mesh: LinesMesh,
    neighbour: Sphere,
    options: {
        points: Vector3[];
        updatable?: boolean;
        instance?: LinesMesh;
        colors?: Color4[];
    }
}