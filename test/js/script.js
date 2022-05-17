const loader = new THREE.TDSLoader();
loader.setResourcePath('models/textures');
loader.load('models/Cow_N050213.3DS',  (object) => {
scene.add(object);
});