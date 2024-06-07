/* eslint-disable */    //disabled all warnings in a file
import { MeshStandardMaterial } from 'three';
import {  BoxGeometry, Mesh, MeshBasicMaterial } from 'three';

export function createCube2() {
    
    //geometry
    const geometry = new BoxGeometry( 2, 2, 2)

    //material
    const material = new MeshStandardMaterial({color: "yellow"})

    //mesh (= geometry[shape] and matherial[surface] combined)
    const cube = new Mesh(geometry, material)
    cube.position.set(6, 0, 0)
    cube.rotation.set(0.4, 0.2, 0)

    console.log ("cube created")

    return cube;
}

