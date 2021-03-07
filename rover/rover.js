/**
Ejemplo hecho a partir de los códigos que figuran en: https://github.com/josdirksen/learning-threejs
*/
var scene, renderer, camera;
var controls;
var step;
var cube;
var rueda1,rueda2,rueda3,rueda4,rueda5,rueda6;
function init() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.
    scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and configure it with shadows
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x3446eb));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const light = new THREE.DirectionalLight();
    light.position.set(0,1,2);
    scene.add(light);
    // position and point the camera to the center of the scene
    camera.position.x = 10;
    camera.position.y = 10;
    camera.position.z = 30;
    camera.lookAt(scene.position);


    const general = new THREE.Object3D();
    scene.add(general);


    // create a cube
    var cubeGeometry  = new THREE.BoxGeometry(16, 12, 40); 
    var cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xbf8519
    });

    cube  = new THREE.Mesh(cubeGeometry, cubeMaterial);


    cube.castShadow = true;

    // position the cube
    cube.position.x = 10;
    cube.position.y = 0;
    cube.position.z = 20;

    // add the objects
    general.add(cube);


    const ruedas = new THREE.Object3D();
    ruedas.position.x = 10;
    general.add(ruedas);

    

    const ruedasDcha = new THREE.Object3D();
    ruedasDcha.position.x = -10;
    general.add(ruedasDcha);


    // create a sphere
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

    // position the sphere
    esfera.position.set(13,0,0);
    esfera2.position.set(13,0,11);
    esfera3.position.set(13,0,22);

    esfera4.position.set(-13,0,0);
    esfera5.position.set(-13,0,11);
    esfera6.position.set(-13,0,22);

    // add the sphere to the scene
    ruedas.add(esfera);
    ruedas.add(esfera2);
    ruedas.add(esfera3);

    ruedas.add(esfera4);
    ruedas.add(esfera5);
    ruedas.add(esfera6);
 
    // add the output of the renderer to the html element
    document.getElementById("contenedor").appendChild(renderer.domElement);
    //controles
    createControls();

  // call the render function
   renderer.render(scene, camera);
}


function createControls() {

    controls = new THREE.TrackballControls( camera, renderer.domElement );

    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;

    controls.keys = [ 65, 83, 68 ];

 }
 
function animate() {

   requestAnimationFrame( animate );
   controls.update();
   render();

 }
function render() {
 renderer.render(scene, camera);}
 
