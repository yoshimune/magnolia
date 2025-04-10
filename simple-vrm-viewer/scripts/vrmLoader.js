// This file is part of the Three.js Scene Viewer project.

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE_VRM from '@pixiv/three-vrm';

// load VRM model using GLTFLoader and VRMLoaderPlugin
function loadVRMModel(url, scene) {

    // Create a GLTFLoader - The loader for loading VRM models
    const loader = new GLTFLoader();
    loader.register((parser) => {
        return new THREE_VRM.VRMLoaderPlugin(parser);
    });

    loader.load(url, (gltf) => {
        // retrieve the VRM object from the loaded glTF
        const vrm = gltf.userData.vrm;
        scene.add(vrm.scene); // Add the VRM model to the scene
        console.log('VRM model loaded:', vrm);
    },
    
    (progress) => {
        // Log the progress of the loading process
        console.log('Loading VRM model:', Math.round((progress.loaded / progress.total) * 100) + '% loaded');
    },
    
    (error) => {
        console.error('Error loading VRM model:', error);
    });
}

export default {
    loadVRMModel
};