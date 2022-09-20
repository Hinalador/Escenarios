//escenario

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x25a98);
    

//camaras

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrìas
const geometry = new THREE.SphereGeometry( 10, 25, 16 );
const textureLoader = new THREE.TextureLoader
const matcap = textureLoader.load('img/luna.jpg')

const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;

const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

const edges = new THREE.EdgesGeometry( geometry )
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x00000}))
scene.add(sphere)


camera.position.z = 30;

//animaciòn

function animate() {
	requestAnimationFrame( animate );
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();