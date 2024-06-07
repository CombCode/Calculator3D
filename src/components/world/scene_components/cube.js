/* eslint-disable */    //disabled all warnings in a file
import { MeshStandardMaterial } from 'three';
import {  BoxGeometry,TorusGeometry, Mesh, MeshBasicMaterial } from 'three';
import {MathUtils} from "three"

export function createCube() {
    
    //geometry
    const length = 2
    const width = 2
    const depth = 2
    const geometry = new TorusGeometry( 3, 1, 12, 20 )

    //material
    const material = new MeshStandardMaterial({color: "hsl(0, 100%, 50%)"})

    //mesh (= geometry[shape] and matherial[surface] combined)
    const cube = new Mesh(geometry, material)

    console.log ("cube created")

    //animation -->
    const radiansPerSecond = MathUtils.degToRad(10);
    const colorChangePerSecond = 50 //h of hsl color encoding
    let color = 0

    // this method will be called once per frame
    cube.tick = (delta) => {
        // increase the cube's rotation each frame
        /* cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta; */

        color += colorChangePerSecond * delta
        cube.material.color.setStyle("hsl(" + color +", 100%, 50%)")
    };

    return cube;
}



