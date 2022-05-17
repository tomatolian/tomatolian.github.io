const loader = new THREE.TDSLoader();
const url = 'models/Cow_N050213.3DS';
loader.load(url, function(object){
  objmodel = object.clone();
  objmodel.scale.set(1,1,1);//縮尺の初期化
  objmodel.rotation.set(0,0,135);//角度の初期化
  objmodel.position.set(-100,0,0);//位置の初期化
  scene.add(objmodel);
});