import * as THREE from 'three';
import vrmloader from './vrmLoader.js';

// Set size
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Create a renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(sizes.width, sizes.height);

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 5000);
camera.position.set(0.15, 1.3, .5); // Set camera position
// Set camera look at
camera.lookAt(0, 1.22, 0); // Look at the center of the scene
// clear color
renderer.setClearColor(0xffffff, 1);

// light
const light = new THREE.DirectionalLight( 0xffffff, Math.PI );
light.position.set( 1.0, 1.0, 1.0 ).normalize();
scene.add( light );

// load vrm 
const url = 'https://d31xcqb46egav0.cloudfront.net/AvatarSample_I.vrm';
vrmloader.loadVRMModel(url, scene);


//tick
tick();
function tick() {
    // Update the camera and renderer
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    
    // Render the scene
    renderer.render(scene, camera);
    
    // Call the tick function again on the next frame
    requestAnimationFrame(tick);
}
