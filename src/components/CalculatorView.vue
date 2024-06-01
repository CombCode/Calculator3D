

<template>
     <div>
        <div id="scene-container">
            
        </div>
    </div>
</template>

<script>
/* eslint-disable */    //disabled all warnings in a file
import {
    BoxGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
    } from 'three';


export default {
    
    mounted() {
    const container = document.querySelector('#scene-container');

    //world scene
    const scene = new Scene()
    scene.background = new Color(0x805050); //0x is a prefix for hexadecimal numbers

    //camera
    const fov = 35 // AKA Field of View
    const aspect = container.clientWidth / container.clientHeight  //proportion
    const near = 0.1 // the near clipping plane
    const far = 100 // the far clipping plane

    const camera = new PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(-2, 1, 10);

    //render agent (WebGL 2)
    const renderer = new WebGLRenderer()
    renderer.setPixelRatio(window.devicePixelRatio) //set actual screen pixels density
    renderer.setSize(container.clientWidth, container.clientHeight); // set the size of the renderer
    container.append(renderer.domElement);

    //--------------------------

    //geometry
    const length = 2
    const width = 2
    const depth = 2
    const geometry = new BoxGeometry(length, width, depth)
    //matherial
    const material = new MeshBasicMaterial();

    //mesh (= geometry[shape] and matherial[surface] combined)
    const cube = new Mesh(geometry, material)
    scene.add(cube);    //!!!
    
    //--------------------------

    // actual render fire
    renderer.render(scene, camera);

    },

    
}
</script>