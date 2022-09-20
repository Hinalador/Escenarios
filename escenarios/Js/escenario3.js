// Crear escena
const scene = new THREE.Scene();
let loader = new THREE.TextureLoader();
loader.load(
    'img/berser.jpg', function(texture){
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

const geometry = new THREE.CylinderGeometry( 1, 1, 5, 10 );
const textureLoader = new THREE.TextureLoader
const matcap = textureLoader.load('img/agua.jpg')
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

const edges = new THREE.EdgesGeometry( geometry )
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x00000}))
scene.add(cylinder)


camera.position.z = 7;

function animate(){
    requestAnimationFrame(animate);

    cylinder.rotation.x += 0.04;
    cylinder.rotation.y += 0.08;
    cylinder.rotation.z += 0.05
    renderer.render(scene, camera);
}
animate();