import { Scene, Color } from "three";

function createScene() {
    const instance = new Scene();
    instance.background = new Color(0x805050); //0x is a prefix for hexadecimal numbers
    
    return instance;
}

export { createScene }