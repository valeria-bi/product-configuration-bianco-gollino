var scene = new THREE.Scene();

//Carico cubemap e irradiance map
var textureCubeScogliera = caricaCubeMap("Fjaderholmarna");
var irradianceMapScogliera = caricaCubeMap("FjaderholmarnaIrradiance");
var textureCubeForestaInnevata = caricaCubeMap("Forest");
var irradianceMapForestaInnevata = caricaCubeMap("ForestIrradiance");
var textureCubeFiordo = caricaCubeMap("Maskonaive3");
var irradianceMapFiordo = caricaCubeMap("Maskonaive3Irradiance");

//Setto la cubemap iniziale
scene.background = textureCubeScogliera;

//Carico normal map del modello scelto
var normalMap = loadTexture( "models/textures/TT_checker_2048x2048_UV_GRID_normal.png" );

//Carico texture materiale ruggine
var diffuseMapRuggine = loadTexture( "textures/materiali/Metal022_2K_Color.jpg" );

//Carico texture materiale latta
var diffuseMapLatta = loadTexture( "textures/materiali/Metal011_2K_Color.jpg" );

//Carico texture materiale legno
var diffuseMapLegno = loadTexture( "textures/materiali/Wood035_2K_Color.jpg" );

//Carico texture materiale osso
var diffuseMapOsso = loadTexture( "textures/materiali/Rock040_2K_Color.jpg" );

//Definiso parametri uniforms Argento
var uniformsArgento = {
    cspec:  { type: "v3", value: new THREE.Vector3(0.972,0.960, 0.915) },
    roughness: {type: "f", value: 0.5},
    normalMap:  { type: "t", value: normalMap},
    normalScale: {type: "v2", value: new THREE.Vector2(1,1)},
    pointLightPosition: { type: "v3", value: new THREE.Vector3() },
    clight: { type: "v3", value: new THREE.Vector3() },
    pointLightPosition2: { type: "v3", value: new THREE.Vector3() },
    clight2: { type: "v3", value: new THREE.Vector3() },
    pointLightPosition3: { type: "v3", value: new THREE.Vector3() },
    clight3: { type: "v3", value: new THREE.Vector3() },
    envMap: { type: "t", value: textureCubeScogliera},
};

//Definisco parametri uniforms Oro
var uniformsOro = {
    cspec:  { type: "v3", value: new THREE.Vector3(1.022,0.782,0.344) },
    roughness: {type: "f", value: 0.5},
    normalMap:  { type: "t", value: normalMap},
    normalScale: {type: "v2", value: new THREE.Vector2(1,1)},
    pointLightPosition: { type: "v3", value: new THREE.Vector3() },
    clight: { type: "v3", value: new THREE.Vector3() },
    pointLightPosition2: { type: "v3", value: new THREE.Vector3() },
    clight2: { type: "v3", value: new THREE.Vector3() },
    pointLightPosition3: { type: "v3", value: new THREE.Vector3() },
    clight3: { type: "v3", value: new THREE.Vector3() },
    envMap: { type: "t", value: textureCubeScogliera},
};

//Definisco parametri uniforms Ruggine
var uniformsRuggine = {
    diffuseMap: { type: "t", value: diffuseMapRuggine},
    envMap: { type: "t", value: textureCubeScogliera},
    normalMap:  { type: "t", value: normalMap},
    irradianceMap:  { type: "t", value: irradianceMapScogliera},
    pointLightPosition: { type: "v3", value: new THREE.Vector3() },
    clight: { type: "v3", value: new THREE.Vector3() },
    pointLightPosition2: { type: "v3", value: new THREE.Vector3() },
    clight2: { type: "v3", value: new THREE.Vector3() },
    pointLightPosition3: { type: "v3", value: new THREE.Vector3() },
    clight3: { type: "v3", value: new THREE.Vector3() },
    textureRepeat: { type: "v2", value: new THREE.Vector2(1,1) },
    normalScale: {type: "v2", value: new THREE.Vector2(1,1)},
};

//Definisco parametri uniforms Latta
var uniformsLatta = {
    diffuseMap: { type: "t", value: diffuseMapLatta},
    envMap: { type: "t", value: textureCubeScogliera},
    normalMap:  { type: "t", value: normalMap},
    irradianceMap:  { type: "t", value: irradianceMapScogliera},
    pointLightPosition: { type: "v3", value: new THREE.Vector3() },
    clight: { type: "v3", value: new THREE.Vector3() },
    pointLightPosition2: { type: "v3", value: new THREE.Vector3() },
    clight2: { type: "v3", value: new THREE.Vector3() },
    pointLightPosition3: { type: "v3", value: new THREE.Vector3() },
    clight3: { type: "v3", value: new THREE.Vector3() },
    textureRepeat: { type: "v2", value: new THREE.Vector2(1,1) },
    normalScale: {type: "v2", value: new THREE.Vector2(1,1)},
};

//Definisco parametri uniforms Legno
var uniformsLegno = {
    diffuseMap: { type: "t", value: diffuseMapLegno},
    envMap: { type: "t", value: textureCubeScogliera},
    normalMap:  { type: "t", value: normalMap},
    irradianceMap:  { type: "t", value: irradianceMapScogliera},
    pointLightPosition: { type: "v3", value: new THREE.Vector3() },
    clight: { type: "v3", value: new THREE.Vector3() },
    textureRepeat: { type: "v2", value: new THREE.Vector2(1,1) },
    pointLightPosition2: { type: "v3", value: new THREE.Vector3() },
    clight2: { type: "v3", value: new THREE.Vector3() },
    pointLightPosition3: { type: "v3", value: new THREE.Vector3() },
    clight3: { type: "v3", value: new THREE.Vector3() },
    normalScale: {type: "v2", value: new THREE.Vector2(1,1)},
};

//Definisco parametri uniforms Osso
var uniformsOsso = {
    diffuseMap: { type: "t", value: diffuseMapOsso},
    envMap: { type: "t", value: textureCubeScogliera},
    normalMap:  { type: "t", value: normalMap},
    irradianceMap:  { type: "t", value: irradianceMapScogliera},
    pointLightPosition: { type: "v3", value: new THREE.Vector3() },
    clight: { type: "v3", value: new THREE.Vector3() },
    pointLightPosition2: { type: "v3", value: new THREE.Vector3() },
    clight2: { type: "v3", value: new THREE.Vector3() },
    pointLightPosition3: { type: "v3", value: new THREE.Vector3() },
    clight3: { type: "v3", value: new THREE.Vector3() },
    textureRepeat: { type: "v2", value: new THREE.Vector2(1,1) },
    normalScale: {type: "v2", value: new THREE.Vector2(1,1)},
};

var nuovoUniformsE = uniformsArgento;
var nuovoUniformsC = uniformsOsso;
var nuovoUniformsF = uniformsOro;

//shader usato con cubmap ambiente + materiale oro e argento
vs_glossy = document.getElementById("vertex_glossy").textContent;
fs_glossy = document.getElementById("fragment_glossy").textContent;
//shader usato con cubemap ambiente + texture materiali 
vs_iem = document.getElementById("vertex_iem").textContent
fs_iem = document.getElementById("fragment_iem").textContent;
//shader usato con luci + materiale oro e argento
vs_normal = document.getElementById("vertex_normal").textContent;
fs_normal = document.getElementById("fragment_normal").textContent;

//Setto i materiali di partenza
var ourMaterial = new THREE.ShaderMaterial();
var materialElmo = new THREE.ShaderMaterial({ uniforms: uniformsArgento, vertexShader: vs_glossy, fragmentShader: fs_glossy, extensions: materialExtensions });
var materialCorna = new THREE.ShaderMaterial({ uniforms: uniformsOsso, vertexShader: vs_iem, fragmentShader: fs_iem, extensions: materialExtensions });	
var materialFrontino = new THREE.ShaderMaterial({uniforms: uniformsOro, vertexShader: vs_glossy, fragmentShader: fs_glossy, extensions: materialExtensions });

//Istanza per caricare il modello
var loader = new THREE.GLTFLoader();
loader.useIndices = true;

//Carico il modello
var i = 0;
aggiungiModello(materialElmo, materialCorna, materialFrontino);

//Definisco stats per controllare i parametri di aggiornamento del rendering
var gui;
var stats = new Stats();

function init() {
    
    renderer.setClearColor( 0xf0f0f0 );

    camera.position.set( 0, 0, 16 );
    scene.add( camera );

    document.body.appendChild( renderer.domElement );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( windowWidth,windowHeight );
    //renderer.toneMapping = THREE.NoToneMapping;
    //renderer.toneMapping = THREE.ReinhardToneMapping;
    //renderer.toneMapping = THREE.CineonToneMapping;
    renderer.toneMapping = THREE.LinearToneMapping;
    //renderer.toneMapping = THREE.ACESFilmicToneMapping;


    window.addEventListener( 'resize', onResize, false );

    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    stats.domElement.style.zIndex = "auto";
    document.body.appendChild( stats.domElement );

    ourMaterial.needsUpdate = true;

}

function update() {

    windowWidth = window.innerWidth - 470;
    windowHeight = window.innerHeight - 100;
    requestAnimationFrame( update );
    stats.update();
    render();

}

function render() {

    onResize();
    updateUniforms();
    renderer.render( scene, camera );
    
}

init();
update();
render();
