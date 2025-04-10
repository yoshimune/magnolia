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
const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 5000);
camera.position.set(0, 1, 5); // Set camera position
// clear color
renderer.setClearColor(0xffffff, 1);

// load vrm 
const url = 'https://d31xcqb46egav0.cloudfront.net/AvatarSample_I.vrm'; // Replace with your VRM model URL
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
