scene = new THREE.Scene(); 
obj=new THREE.GLTFLoader()
   .setPath( '/test/models/' )
   .load( 'Flower.glb', function ( gltf ) {
    gltf.scene.scale.set(100,100,100)
    scene.add(gltf.scene);
   }); 