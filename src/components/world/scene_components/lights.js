/* eslint-disable */    //disabled all warnings in a file
import {  AmbientLight, DirectionalLight, HemisphereLight, } from "three";

export function createLights(){

    const color = "white"
    const intensity = 3
    const sun = new DirectionalLight(color, intensity)

    const ambientLight = new AmbientLight('white', 1);
    
    sun.position.set(-10, 10, 20)

    const backLight = new DirectionalLight("yellow", 2)

    backLight.position.set(5, -10, -20)

        
    return {sun, backLight, ambientLight}
}