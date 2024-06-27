/* eslint-disable */    //disabled all warnings in a file
import { BoxGeometry, MeshStandardMaterial, Mesh} from "three";
import { Group } from "three";

 export function createCalculator()  {

    //calculator Group
    const calculatorModel = new Group()


    //body
    const body_geometry = new BoxGeometry( 7, 12, 3)
    const body_material = new MeshStandardMaterial({color: "hsl(0, 100%, 50%)"})
    const body = new Mesh(body_geometry, body_material)

    calculatorModel.add(body)


    //battery
    const battery_geometry = new BoxGeometry( 7, 5, 1)
    const battery_material = new MeshStandardMaterial({color: "hsl(100, 100%, 50%)"})
    const battery = new Mesh(battery_geometry, battery_material)
    
    battery.position.set(0,-3.5,-2)

    calculatorModel.add(battery)


    //buttons
    const button_geometry = new BoxGeometry(0.8, 0.8, 0.5)
    const button_material = new MeshStandardMaterial({color: "hsl(150, 100%, 90%)"})
    const buttonTemplate = new Mesh(button_geometry, button_material);

    const buttons = new Group()
    buttons.name = "buttons"
    buttons.position.set(-2, 0, 1.75)

    for (let i = 0; i < 17; i ++) {
        const button = buttonTemplate.clone();
        
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
    const screen_material = new MeshStandardMaterial({color: "hsl(100, 100%, 50%)"})
    const screen = new Mesh(screen_geometry, screen_material)
    
    screen.position.set(0, 3, 1.6)

    calculatorModel.add(screen)

    //-------

    return calculatorModel
}