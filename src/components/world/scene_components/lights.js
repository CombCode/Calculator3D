/* eslint-disable */    //disabled all warnings in a file
import {  AmbientLight, DirectionalLight, HemisphereLight, } from "three";

export function createLights(){

    const color = "white"
    const intensity = 5
    const sun = new DirectionalLight(color, intensity)

    const ambientLight = new AmbientLight('white', 1);
    
    sun.position.set(-10, 10, 3)

    //animation
    let xMovePerSecond = 10
    console.log(sun.position)

    sun.tick = (delta) => {
        if(sun.position.x > 20 || sun.position.x < -20)
            xMovePerSecond = xMovePerSecond * -1
           
        
         sun.position.x += xMovePerSecond*delta
    }
        
    return {sun, ambientLight}
}