// Import Three.js
// import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a WebGLRenderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-container').appendChild(renderer.domElement);

// Load the glb model from GitHub Pages
const loader = new THREE.GLTFLoader();
loader.load('/path/to/your/model.gltf', (gltf) => {
    // Adjust the position or scale if needed
    gltf.scene.rotation.x = Math.PI / 4; // Example: Rotate the model for a better view
    scene.add(gltf.scene);
});

// Animation function
function animate() {
    requestAnimationFrame(animate);

    // Rotate the model (adjust the rotation speed if needed)
    if (scene.children.length > 0) {
        scene.children[0].rotation.y += 0.01;
    }

    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Call the animate function
animate();
