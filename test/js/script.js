new THREE.GLTFLoader()
   .setPath( 'models/' )
   .load( 'Flower.glb', function ( gltf ) {
      scene.add( gltf.scene );
   });