scene = new THREE.Scene(); 
var axes = new THREE.AxisHelper(25);
scene.add(axes);
obj=new THREE.GLTFLoader()
   .setPath( '/test/models/' )
   .load( 'Flower.glb', function ( gltf ) {
    gltf.scene.scale.set(100,100,100)
    scene.add(gltf.scene);
   }); 