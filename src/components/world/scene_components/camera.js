import { PerspectiveCamera } from 'three';

function createCamera() {

    const fov = 35// AKA Field of View
    const aspect = 1  //dummy for proportion
    const near = 0.1 // the near clipping plane
    const far = 100 // the far clipping plane

    const camera = new PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(0, 0, 20);

    return camera;
}

export { createCamera }