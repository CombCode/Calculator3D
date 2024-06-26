/* eslint-disable */    //disabled all warnings in a file
import { createCamera } from './scene_components/camera.js';
//import { createCube } from './scene_components/cube.js';
//import { createCube2 } from './scene_components/cube2.js';
import { createCalculator } from './scene_components/calculatorModel/calculatorModel.js'
import { createLights } from './scene_components/lights.js';
import { createScene } from './scene_components/scene.js';

import { createRenderer } from './scene_systems/renderer.js';
import { Resizer } from './scene_systems/Resizer.js';
import { createControls } from './scene_systems/controls.js';
import { Loop } from './scene_systems/Loop.js';

let loop
let renderer
class World {
  constructor(container) {
    
    let scene = createScene();

    //scene concrete elements
    let camera = createCamera();
      //objects
    const calculatorModel =  createCalculator()
      //lights
    const { ambientLight, sun } = createLights();

    //scene system elements
    renderer = createRenderer();
    let controls = createControls(camera, renderer.domElement);
    loop = new Loop(camera, scene, renderer)
    let resizer = new Resizer(container, camera, renderer);

    //adding all elements to the scene
    scene.add(calculatorModel, ambientLight, sun)

  
    // ANIMATION
    loop.animatedObjs.push(controls)
    console.log("animated objs: ", loop.animatedObjs)
    
    //add the canva in the html
    container.append(renderer.domElement) 
  }

  //actual render the scene 
  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
  //start rendering loop
  start(){
    loop.start()
  }
  //stop rendering loop
  stop(){
    loop.stop()
  }
}

export {World}