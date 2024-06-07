const setSize = (container, camera, renderer) =>{
   //camera proportion
   camera.aspect = container.clientWidth / container.clientHeight;
   // update the camera's frustum
   camera.updateProjectionMatrix();

   //renderer screen proportion
   renderer.setSize(container.clientWidth, container.clientHeight);
   //device pixel ratio 
   renderer.setPixelRatio(window.devicePixelRatio);
}

class Resizer {
    constructor(container, camera, renderer){
      //set size on load
      setSize(container, camera, renderer)
     
      //listen for web window resizing and throw the renderer and camera resize
      window.addEventListener("resize", () => {
        setSize(container, camera, renderer);
        this.onResize()
      });
    }

    onResize() {

    }

  }
  
  export { Resizer };