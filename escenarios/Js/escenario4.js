// Crear escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x46D359)

// Se crea la camara y la perspectiva con sus respectivas medidas
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Se crea el render
const renderer = new THREE.WebGLRenderer();

// Se crea el tamaño de la ventana
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

const geometry = new THREE.ConeGeometry( 5, 20, 26 );
const textureLoader = new THREE.TextureLoader
const matcap = textureLoader.load('img/madera.jpg') 
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

const edges = new THREE.EdgesGeometry( geometry )
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x00000}))
scene.add(cone)


camera.position.z = 20;

function animate(){
    requestAnimationFrame(animate);

    cone.rotation.x += 0.04;
    cone.rotation.y += 0.08;
    cone.rotation.z += 0.05
    renderer.render(scene, camera);
}
animate();