/* eslint-disable */    //disabled all warnings in a file
import { RepeatWrapping, TextureLoader } from "three";
import { BoxGeometry, MeshStandardMaterial, Mesh} from "three";
import { Group } from "three";

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

//import plasticTexture_color from "@/assets/textures/plasticpattern1-albedo.png"
import plasticTexture_normals from "@/assets/textures/plasticpattern1-normal2-ogl.png"
import plasticTexture_roughness from "@/assets/textures/plasticpattern1-roughness2.png"

import texture_0 from "@/assets/textures/buttons/0.png"
import texture_1 from "@/assets/textures/buttons/1.png"
import texture_2 from "@/assets/textures/buttons/2.png"
import texture_3 from "@/assets/textures/buttons/3.png"
import texture_4 from "@/assets/textures/buttons/4.png"
import texture_5 from "@/assets/textures/buttons/5.png"
import texture_6 from "@/assets/textures/buttons/6.png"
import texture_7 from "@/assets/textures/buttons/7.png"
import texture_8 from "@/assets/textures/buttons/8.png"
import texture_9 from "@/assets/textures/buttons/9.png"
import texture_ac from "@/assets/textures/buttons/ac.png"
import texture_div from "@/assets/textures/buttons/div.png"
import texture_dot from "@/assets/textures/buttons/dot.png"
import texture_equal from "@/assets/textures/buttons/equal.png"
import texture_min from "@/assets/textures/buttons/min.png"
import texture_mult from "@/assets/textures/buttons/mult.png"
import texture_plus from "@/assets/textures/buttons/plus.png"
import { CanvasTexture } from "three";
import { degToRad } from "three/src/math/MathUtils";




 export function createCalculator()  {

    //calculator Group
    const calculatorModel = new Group()


    //body
    const loader3 = new GLTFLoader();

    loader3.load( 'https://raw.githubusercontent.com/CombCode/3D_Model1/main/calculatorBody.gltf', function ( gltf ) {

        let model = gltf.scene
        model.rotateY(degToRad(270))
        model.scale.set(1.5,2,2)
        model.position.z = 0.4
        model.traverse((child) => {
            if (child.isMesh) {
                child.material = new MeshStandardMaterial({color: 0x571d57});
            }
        });
        calculatorModel.add( gltf.scene );

    }, undefined, function ( error ) {

        console.error( error );

    } );



    //buttons
    const button_geometry = new BoxGeometry(0.8, 0.8, 0.5)

   
    const buttonsTextures = [
        texture_plus, texture_min, texture_mult, texture_div,
        texture_7, texture_8, texture_9,
        texture_4, texture_5, texture_6,
        texture_1, texture_2, texture_3,
        texture_0, texture_dot, texture_ac, texture_equal
    ]
    const loader = new TextureLoader();
    const buttonsMaterial = buttonsTextures.map((texture) => {
        let tempMaterial = new MeshStandardMaterial({map: loader.load(texture)})
        return tempMaterial})

    const buttonsMaterial_white = new MeshStandardMaterial({color: "white"})
    


    const buttons = new Group()
    buttons.name = "buttons"
    buttons.position.set(-2, 0, 1.6)

    for (let i = 0; i < 17; i ++) {
        const button = new Mesh(button_geometry, 
            [
                buttonsMaterial_white,
                buttonsMaterial_white,
                buttonsMaterial_white,
                buttonsMaterial_white,
                buttonsMaterial[i], // front face
                buttonsMaterial_white
            ]
        );
        
        // + - * /
        if(i == 0) {
            button.position.set(0, 0, 0);
            button.name = " + "
        } else if(i == 1) {
            button.position.set(1, 0, 0);
            button.name = " - "
        } else if(i == 2) {
            button.position.set(3, 0, 0);
            button.name = " * "
        } else if(i == 3) {
            button.position.set(4, 0, 0);
            button.name = " / "
        }
        // 7 8 9
        else if(i == 4) {
            button.position.set(0, -2, 0);
            button.name = "7"
        } else if(i == 5) {
            button.position.set(1, -2, 0);
            button.name = "8"
        } else if(i == 6) {
            button.position.set(2, -2, 0);
            button.name = "9"
        }
        // 4 5 6
        else if(i == 7) {
            button.position.set(0, -3, 0);
            button.name = "4"
        } else if(i == 8) {
            button.position.set(1, -3, 0);
            button.name = "5"
        } else if(i == 9) {
            button.position.set(2, -3, 0);
            button.name = "6"
        }
        // 1 2 3
        else if(i == 10) {
            button.position.set(0, -4, 0);
            button.name = "1"
        } else if(i == 11) {
            button.position.set(1, -4, 0);
            button.name = "2"
        } else if(i == 12) {
            button.position.set(2, -4, 0);
            button.name = "3"
        }
        // 0 .
        else if(i == 13) {
            button.position.set(0, -5, 0);
            button.name = "0"
        } else if(i == 14) {
            button.position.set(2, -5, 0);
            button.name = "."
        }
        // AC =
        else if(i == 15) {
            button.position.set(4, -2, 0);
            button.name = "AC"
        } else if(i == 16) {
            button.position.set(4, -4, 0);
            button.name = "="
        }

        buttons.add(button)   
    }
    console.log("buttons:" , buttons)
    calculatorModel.add(buttons)

    //screen
    const screen_geometry = new BoxGeometry(5, 2, 0.2)

    
    const screenTexture = drawScreenTexture(":)")

    const screen_material = new MeshStandardMaterial({map: screenTexture})
    const screen = new Mesh(screen_geometry, screen_material)

    
    
    screen.position.set(0, 3, 1.41)

    calculatorModel.add(screen)

    //-------
    calculatorModel.tick = (delta) => {
        let shouldHandleChange = true;

        const handleChangeScreen = (event) => {
            if (shouldHandleChange && event.detail.string !== "") {
                console.log(event.detail.string);
                const newTexture = drawScreenTexture(event.detail.string.toString());
                screen.material.map = newTexture;
                screen.material.map.needsUpdate = true;
                
                // Disabilitare la gestione degli eventi
                shouldHandleChange = false;
            }
        };
        document.addEventListener("changeScreen", handleChangeScreen);
    } 

    return calculatorModel
}


function createCalculatorMaterial(color){
    //texture loader creation
    const textureLoader = new TextureLoader()

    //load textures
    //const colorTexture = textureLoader.load(plasticTexture_color)
    const roughnessTexture = textureLoader.load(plasticTexture_roughness)
    const normalTexture = textureLoader.load(plasticTexture_normals)
    
    

    //actual creation
    let material = new MeshStandardMaterial({
            color: color, 
            roughnessMap: roughnessTexture, 
            normalMap: normalTexture
            })

    return material
}

function drawScreenTexture(custom_text){

    //font size screen adapter
    let fontSize
    if(custom_text.length <= 7){
        fontSize = 100
    }
    else{
        let custom_text_inverse = 1/custom_text.length
        fontSize = 100 * custom_text_inverse *8//71
        fontSize = parseInt(fontSize)
    }
    console.log("fontsize: ",fontSize)
    

    //canva settings
    const canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 200;

    const context = canvas.getContext('2d');

    //backgrownd
    context.fillStyle = 'green';
    let border = 10
    context.fillRect(border, border, canvas.width-border*2, canvas.height-border*2);

    //text
    context.fillStyle = 'white';
    context.font = fontSize + 'px Arial';   
    context.textAlign = 'right';
    context.textBaseline = 'middle';

    context.fillText(custom_text, canvas.width-border*2, canvas.height / 2);

    //texture creation
    const texture = new CanvasTexture(canvas)
    
    return texture
}

