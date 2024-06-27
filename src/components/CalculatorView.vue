

<template>
     <div>
        <div id="scene-container">
            
        </div>
    </div>
</template>

<script>
/* eslint-disable */    //disabled all warnings in a file
import { World } from './world/world.js';


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

    

    
}
</script>