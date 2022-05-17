new THREE.GLTFLoader()
   .setPath( 'test/models/' )
   .load( 'Flower.glb', function ( gltf ) {
      scene.add( gltf.scene );
   });