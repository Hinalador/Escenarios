// Crear escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x134050)

// Se crea la camara y la perspectiva con sus respectivas medidas
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Se crea el render
const renderer = new THREE.WebGLRenderer();

// Se crea el tamaño de la ventana
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const textureLoader = new THREE.TextureLoader
const matcap = textureLoader.load('img/papel.jpg')
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

const edges = new THREE.EdgesGeometry( geometry )
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x00000}))
scene.add(torus)

camera.position.z = 30;

function animate(){
    requestAnimationFrame(animate);

    torus.rotation.y += 0.08;
    torus.rotation.x += 0.04;
    torus.rotation.z += 0.05
    renderer.render(scene, camera);
}
animate();