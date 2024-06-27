

<template>
     <div>
        <div id="scene-container">
            
        </div>
    </div>
</template>

<script>
/* eslint-disable */    //disabled all warnings in a file
import { ref } from 'vue';
import { World } from './world/world.js';
import { processCalculation } from './calculatorLogic.js';


export default {
    
    mounted() {

        let initWorld = () => {
            //reference the html spot
            const container = document.querySelector('#scene-container');

            // init world istance
            const world = new World(container);

            //render
            //world.render()   only for single frame
            world.start()

        }

        initWorld()
    },

    setup(){

        let fullString = ref("")
        let result = ref("")

        let onCalculatorButtonPressed = (e) => {
            if(e.detail.buttonChar == "="){
                result.value = processCalculation(fullString)
                fullString.value = ""
            }
            else if(e.detail.buttonChar == "AC"){
                fullString.value = ""
            }
            else{
                fullString.value = fullString.value + e.detail.buttonChar
            }
        
            
            console.log("fullstring = ", fullString.value)
        }

        document.addEventListener('calculatorButtonPressed', onCalculatorButtonPressed);

    return{fullString, result, onCalculatorButtonPressed}
    },

    
   
}
</script>