/* eslint-disable */    //disabled all warnings in a file
import { createCamera } from './scene_components/camera.js';
import { createCube } from './scene_components/cube.js';
import { createCube2 } from './scene_components/cube2.js';
import { createLights } from './scene_components/lights.js';
import { createScene } from './scene_components/scene.js';

import { createRenderer } from './scene_systems/renderer.js';
import { Resizer } from './scene_systems/Resizer.js';
import { createControls } from './scene_systems/controls.js';
import { Loop } from './scene_systems/Loop.js';

let camera
let renderer
let scene
let loop

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer)

    container.append(renderer.domElement) //add the canva in the html

    const controls = createControls(camera, renderer.domElement); 
    //objects
    let tour = createCube()
    let cube = createCube2()
    const { ambientLight, sun } = createLights();

    scene.add(tour, cube, ambientLight, sun)


    let resizer = new Resizer(container, camera, renderer);
    /* resizer.onResize = () => {
      this.render()                   not necessary because of the loop existance
    } */

    loop.animatedObjs.push(tour)
    loop.animatedObjs.push(sun)
    
    loop.animatedObjs.push(controls)
    console.log("animated objs: ", loop.animatedObjs)
  }

  

  //actual render the scene 
  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  //rendering loop
  start(){
    loop.start()
  }

  stop(){
    loop.stop()
  }
}

export {World}