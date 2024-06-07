import { WebGLRenderer } from "three";

function createRenderer() {
    const renderer = new WebGLRenderer({ antialias: true });    //single-sambple anti aliasing (AA)
    
    // turn on the physically correct lighting model
    renderer.physicallyCorrectLights = true;

    return renderer;
}

export { createRenderer }