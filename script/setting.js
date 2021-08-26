//luce 0
var lightParameters = {
    red: 1.0,
    green: 1.0,
    blue: 1.0,
    intensity: 0.5,
}

//luce 1
var lightParameters2 = {
    red: 1.0,
    green: 1.0,
    blue: 1.0,
    intensity: 0.5,
}

//luce 2
var lightParameters3 = {
    red: 1.0,
    green: 1.0,
    blue: 1.0,
    intensity: 0.5,
}

var textureParameters = {
    normalScale: 0.0,
}

var materialExtensions = {
    shaderTextureLOD: true // set to use shader texture LOD
};

//Dimensioni finistra
var windowWidth = window.innerWidth - 470;
var windowHeight = window.innerHeight - 100;

var renderer = new THREE.WebGLRenderer( { antialias: true } );
var camera = new THREE.PerspectiveCamera( 20, windowWidth / windowHeight , 1, 1000 );
var controls = new THREE.OrbitControls( camera, renderer.domElement );

//set zoom model
controls.minDistance = 5;
controls.maxDistance = 15;
