// Crear escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x54A28)

// Se crea la camara y la perspectiva con sus respectivas medidas
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Se crea el render
const renderer = new THREE.WebGLRenderer();

// Se crea el tamaño de la ventana
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

class CustomSinCurve extends THREE.Curve {

	constructor( scale = 1 ) {

		super();

		this.scale = scale;

	}

	getPoint( t, optionalTarget = new THREE.Vector3() ) {

		const tx = t * 3 - 1.5;
		const ty = Math.sin( 2 * Math.PI * t );
		const tz = 0;

		return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );

	}

}

const path = new CustomSinCurve( 10 );
const geometry = new THREE.TubeGeometry( path, 100, 5, 20, false );
//const material = new THREE.MeshBasicMaterial();
/*const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );*/
const textureLoader = new THREE.TextureLoader
const matcap = textureLoader.load('img/cosas.jpg')

const material1 = new THREE.MeshMatcapMaterial();
material1.matcap = matcap;
material1.flatShading = true;
const TubeGeometry = new THREE.Mesh( geometry, material1 );
scene.add( TubeGeometry );


camera.position.z = 70;

function animate(){
    requestAnimationFrame(animate);

    TubeGeometry.rotation.x += 0.05;
    TubeGeometry.rotation.y += 0.05;
    TubeGeometry.rotation.z += 0.05;
    renderer.render(scene, camera);
}
animate();