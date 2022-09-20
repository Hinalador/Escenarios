// Crear escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x501A2)

// Se crea la camara y la perspectiva con sus respectivas medidas
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Se crea el render
const renderer = new THREE.WebGLRenderer();

// Se crea el tamaño de la ventana
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

const geometry = new THREE.CapsuleGeometry( 1, 1, 2, 15 );
const textureLoader = new THREE.TextureLoader
const matcap = textureLoader.load('img/cafe.jpg')
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

const edges = new THREE.EdgesGeometry( geometry )
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x00000}))
scene.add(capsule)

camera.position.z = 5;

function animate(){
    requestAnimationFrame(animate);

    capsule.rotation.x += 0.05;
    capsule.rotation.y += 0.06;
    renderer.render(scene, camera);
}
animate();