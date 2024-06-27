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
import { Vector2 } from 'three';
import { Raycaster } from 'three';

let loop
let renderer
let mousePos
let raycaster
let camera
let scene
class World {
  constructor(container) {
    
    scene = createScene();

    //scene concrete elements
    camera = createCamera();
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

    //raycaster
    mousePos = new Vector2(); 
    document.addEventListener( 'mousedown', onMouseClick );
    raycaster = new Raycaster()
    
    
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


function onMouseClick( event ) {
  //update mousePos
  mousePos.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mousePos.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

  //cast ray on pousePos
  raycaster.setFromCamera(mousePos, camera) //why here ?

  //get the ray intesecting first obj
  let intersectedObjs = raycaster.intersectObjects(scene.children);
  let firstIntersectedObj = intersectedObjs[0]

  //animate the selected obj
  if(firstIntersectedObj != undefined && firstIntersectedObj.object.parent.name == "buttons"){
    console.log(firstIntersectedObj.object.name)
    /*
      //test a change on the selected obj
      if(firstIntersectedObj != undefined)
      firstIntersectedObj.object.scale.z =2
    */

    firstIntersectedObj.object.position.z -= 0.3
    setTimeout(() => {firstIntersectedObj.object.position.z += 0.3}, 200);
    
    //send correct calculator number to the calculatorView.vue
    let passValue = new CustomEvent("calculatorButtonPressed", {detail: {buttonChar: firstIntersectedObj.object.name}});
    document.dispatchEvent(passValue) //old way, need change
  
  }

}
  
  
export {World}