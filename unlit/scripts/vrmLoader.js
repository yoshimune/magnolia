// This file is part of the Three.js Scene Viewer project.

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE_VRM from '@pixiv/three-vrm';

// Function to load shader from file
async function loadShader(url) {
    const response = await fetch(url);
    return await response.text();
}

// load VRM model using GLTFLoader and VRMLoaderPlugin
async function loadVRMModel(url, scene) {
    // Load shaders
    const vertexShader = await loadShader('./scripts/shaders/vertex.glsl');
    const fragmentShader = await loadShader('./scripts/shaders/fragment.glsl');

    // Create a GLTFLoader - The loader for loading VRM models
    const loader = new GLTFLoader();
    loader.register((parser) => {
        return new THREE_VRM.VRMLoaderPlugin(parser);
    });

    loader.load(url, (gltf) => {
        // retrieve the VRM object from the loaded glTF
        const vrm = gltf.userData.vrm;

        vrm.materials.forEach(material => {
            console.log(material);
            material.vertexShader = vertexShader;
            material.fragmentShader = fragmentShader;
        });

        scene.add(vrm.scene);
        console.log('VRM model loaded:', vrm);
    },
    
    (progress) => {
        console.log('Loading VRM model:', Math.round((progress.loaded / progress.total) * 100) + '% loaded');
    },
    
    (error) => {
        console.error('Error loading VRM model:', error);
    });
}

export default {
    loadVRMModel
};