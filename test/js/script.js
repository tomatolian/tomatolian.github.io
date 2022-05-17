window.addEventListener("DOMContentLoaded", init);

function init() {
  const width = 960;
  const height = 540;
  var flower;

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas")
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  // シーンを作成
  const scene = new THREE.Scene();
  var axes = new THREE.AxesHelper(25);
  scene.add(axes);
  // カメラを作成
  const camera = new THREE.PerspectiveCamera(
    45,
    width / height,
    1,
    10000
  );
  camera.position.set(0, 0, +100);

  new THREE.GLTFLoader()
   .setPath( '/test/models/' )
   .load( 'Flower.glb', function ( gltf ) {
    flower=gltf.scene
    flower.scale.set(100,100,100)
    scene.add(flower);
   }); 
  const material = new THREE.MeshStandardMaterial({
    color: 0x0000ff
  });
  const box = new THREE.Mesh(flower, material);
  scene.add(box);

  // 平行光源
  const light = new THREE.DirectionalLight(0xffffff);
  light.intensity = 2; // 光の強さを倍に
  light.position.set(1, 1, 1);
  // シーンに追加
  scene.add(light);

  // 初回実行
  tick();

  function tick() {
    requestAnimationFrame(tick);
    console.log('a');
    // 箱を回転させる
    box.rotation.x += 0.01;
    box.rotation.z += 0.01;

    // レンダリング
    renderer.render(scene, camera);
  }
}