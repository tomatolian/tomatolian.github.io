scene = new THREE.Scene(); 
obj=new THREE.GLTFLoader()
   .setPath( '/test/models/' )
   .load( 'Flower.glb', function ( gltf ) {
      scene.add( gltf.scene);
   }).scale.set(100, 100, 100); 