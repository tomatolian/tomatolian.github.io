scene = new THREE.Scene(); 
new THREE.GLTFLoader()
   .setPath( '/test/models/' )
   .load( 'Flower.glb', function ( gltf ) {
      scene.add( gltf.scene);
   });
   camera.position.z = 0;