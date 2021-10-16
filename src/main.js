const MAIN_CAMERA_ID = 'MainCamera';
const MAIN_LIGHT_ID = 'MainLight';

class Main {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId); // Get the canvas element
    this.engine = new BABYLON.Engine(this.canvas, true);
    this.scene = new BABYLON.Scene(this.engine);

    // BOX
    BABYLON.MeshBuilder.CreateBox('box', {});

    // CAMERA
    const camera = new BABYLON.ArcRotateCamera(
      MAIN_CAMERA_ID,
      -Math.PI / 2,
      Math.PI / 2.5,
      15,
      new BABYLON.Vector3(0, 0, 0),
    );
    camera.attachControl(this.canvas, true);

    // LIGHT
    const light = new BABYLON.HemisphericLight(
      MAIN_LIGHT_ID,
      new BABYLON.Vector3(1, 1, 0),
    );

    // STEP
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });

    // RESIZE EVENT
    window.addEventListener('resize', () => {
      this.engine.resize();
    });
  }
}

let _APP;

function _Main() {
  _APP = new Main('renderCanvas');
}

_Main();
