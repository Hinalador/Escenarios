// Crear escena
const scene = new THREE.Scene();
var loader = new THREE.TextureLoader();
loader.load(
    'img/vegeta.jpg', function(texture){
        scene.background = texture;
    }
)

// Se crea la camara y la perspectiva con sus respectivas medidas
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Se crea el render
const renderer = new THREE.WebGLRenderer();

// Se crea el tamaño de la ventana
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const textureLoader = new THREE.TextureLoader
const matcap = textureLoader.load('img/adobes.jpg')
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const geometry1 = new THREE.BoxGeometry( 1, 1, 1 );
const textureLoader1 = new THREE.TextureLoader
const matcap1 = textureLoader.load('img/adobes.jpg')
const material1 = new THREE.MeshMatcapMaterial();
material1.matcap = matcap;
material1.flatShading = true;

const cube1 = new THREE.Mesh( geometry, material );
scene.add( cube1 );

const geometry2 = new THREE.BoxGeometry( 1, 1, 1 );
const textureLoader2 = new THREE.TextureLoader
const matcap2 = textureLoader.load('img/adobes.jpg')
const material2 = new THREE.MeshMatcapMaterial();
material2.matcap = matcap;
material2.flatShading = true;

const cube2 = new THREE.Mesh( geometry, material );
scene.add( cube2 );

const geometry3 = new THREE.BoxGeometry( 1, 1, 1 );
const textureLoader3 = new THREE.TextureLoader
const matcap3 = textureLoader.load('img/adobes.jpg')
const material3 = new THREE.MeshMatcapMaterial();
material3.matcap = matcap;
material3.flatShading = true;

const cube3 = new THREE.Mesh( geometry, material );
scene.add( cube3 );

let objects = [cube, cube1, cube2, cube3]

camera.position.z = 10;

cube1.position.x = -6
cube.position.x = 0
cube2.position.x = 6
cube3.position.x = 12

/* const controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.minDistance = 3
controls.maxDistance = 10 */

/* const control = new THREE.PointerLockControls(camera, renderer.domElement);
document.getElementById('btnplay').onclick = () => {
    control.lock();
} */

const controls = new THREE.DragControls( [cube, cube1, cube2, cube3], camera, renderer.domElement );

function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    cube1.rotation.x += 0.005;
    cube1.rotation.y += 0.005;
    cube2.rotation.x += 0.005;
    cube2.rotation.y += 0.005;
    cube3.rotation.x += 0.005;
    cube3.rotation.y += 0.005;
    renderer.render(scene, camera);
}
animate();



