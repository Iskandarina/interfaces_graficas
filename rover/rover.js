/**
Ejemplo hecho a partir de los códigos que figuran en: https://github.com/josdirksen/learning-threejs
*/
//Definición de variables
var scene, renderer, camera;
var controls;
var step;
var cube;
var rueda1,rueda2,rueda3,rueda4,rueda5,rueda6;
function init() {
    // Creación de un escenario que contendrá elementos como cámaras, onjetos y luces.
    scene = new THREE.Scene();

    // creación de la cámara
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // creación de un render y definición de sombras
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x3446eb));
    renderer.setSize(window.innerWidth, window.innerHeight);
	//Creación y definición de posición asociada a luces
    const light = new THREE.DirectionalLight();
    light.position.set(0,1,2);
    scene.add(light);
    // Centro de la cámara en el escenario
    camera.position.x = 10;
    camera.position.y = 10;
    camera.position.z = 30;
    camera.lookAt(scene.position);


    const general = new THREE.Object3D();
    scene.add(general);

    // creación y definición del color del paralelepípedo que servirá como "cuerpo" del Rover
    var cubeGeometry  = new THREE.BoxGeometry(16, 12, 40); 
    var cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xbf8519
    });

    cube  = new THREE.Mesh(cubeGeometry, cubeMaterial);


    cube.castShadow = true;

    // posición en la que se situará el paralelepípedo
    cube.position.x = 10;
    cube.position.y = 0;
    cube.position.z = 20;

    // Se añade el paralelepípedo al escenario
    general.add(cube);

	//Creación de las ruedas a la izaquierda y derecha (tres esferas a cada lado)
    const ruedas = new THREE.Object3D();
	//Distancia de las tres ruedas de la izquierda al paralelepípedo
    ruedas.position.x = 10;
    general.add(ruedas);

    const ruedasderecha = new THREE.Object3D();
    ruedasderecha.position.x = -10;
    general.add(ruedasderecha);


    // creación de las esferas que actúan como ruedas
    var sphereGeometry = new THREE.SphereGeometry(6, 6, 6);
    var sphereMaterial = new THREE.MeshLambertMaterial({
        color: 0x2e2d2b
    });
    var esfera = new THREE.Mesh(sphereGeometry, sphereMaterial);
    var esfera2 = new THREE.Mesh(sphereGeometry, sphereMaterial);
    var esfera3 = new THREE.Mesh(sphereGeometry, sphereMaterial);
    var esfera4 = new THREE.Mesh(sphereGeometry, sphereMaterial);
    var esfera5 = new THREE.Mesh(sphereGeometry, sphereMaterial);
    var esfera6 = new THREE.Mesh(sphereGeometry, sphereMaterial);

    // Posición de cada esfera
    esfera.position.set(13,0,0);
    esfera2.position.set(13,0,11);
    esfera3.position.set(13,0,22);

    esfera4.position.set(-13,0,0);
    esfera5.position.set(-13,0,11);
    esfera6.position.set(-13,0,22);

    // Inclusión de las esferas en el escenario
    ruedas.add(esfera);
    ruedas.add(esfera2);
    ruedas.add(esfera3);

    ruedas.add(esfera4);
    ruedas.add(esfera5);
    ruedas.add(esfera6);
 
    // Se añade la salida del render al elemento HTML
    document.getElementById("contenedor").appendChild(renderer.domElement);
    //controles
    createControls();

  // llamada a la función de render
   renderer.render(scene, camera);
}

//Controles de cámara (determinan la velocidad de rotación, de zoom)
function createControls() {

    controls = new THREE.TrackballControls( camera, renderer.domElement );

    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;

    controls.keys = [ 65, 83, 68 ];

 }
 //Función necesaria para poder desplazar la cámara
 
function animate() {

   requestAnimationFrame( animate );
   controls.update();
   render();

 }
 //Función de render
function render() {
 renderer.render(scene, camera);}
 
