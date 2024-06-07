import { Clock } from "three"

const clock = new Clock();

class Loop {
    constructor(camera, scene, renderer){
        this.camera = camera
        this.scene = scene
        this.renderer = renderer
        this.animatedObjs = []
    }

    start(){
        this.renderer.setAnimationLoop(() => {
            // tell every animated object to tick forward one frame
            this.tick();
      
            // render a frame
            this.renderer.render(this.scene, this.camera);
          });
    }          
    stop(){
        // stop the loop
        this.renderer.setAnimationLoop(null);
    }

    tick(){
        
        //delta = duration of last frame
        const delta = clock.getDelta();
         /* console.log(
               `The last frame rendered in ${delta * 1000} milliseconds`,
             ); */

        //tick the animation of all animated objs
        this.animatedObjs.forEach((obj) => {
            obj.tick(delta)
        })
            
    }
}

export {Loop}