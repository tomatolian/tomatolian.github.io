scene = new THREE.Scene(); 
obj=new THREE.GLTFLoader()
   .setPath( '/test/models/' )
   .load( 'Flower.glb', function ( gltf ) {
    objmodel = gltf.clone();
    objmodel.scale.set(100, 100, 100);
    objmodel.rotation.set(0, 0, 0); 
    objmodel.position.set(0, 0, 0);   
    scene.add(objmodel);
   }); 