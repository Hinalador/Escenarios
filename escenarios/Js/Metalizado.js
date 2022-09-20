// Crear escena
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x00000, 0.8, 8)
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

const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshStandardMaterial();
const cube = new THREE.Mesh( geometry, material );
material.metalness = 0.4;
material.roughness = 0.5;

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1)
scene.add (directionalLight)
scene.add( cube );

const edges = new THREE.EdgesGeometry( geometry )
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x00000}))
scene.add(cube)

camera.position.x = 2;
camera.position.y = -1;
camera.position.z = 4;

function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    renderer.render(scene, camera);
}

animate();



