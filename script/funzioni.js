var illuminazioneManuale = false;
var textureCorna = true;
var textureElmo = false;
var textureFrontino = false;
var bloccaPrezzo = false;

//Funzione per caricare la cubemap
function caricaCubeMap(path){

	var loader = new THREE.CubeTextureLoader();
	loader.setPath( 'textures/cubemap/'+path+"/" );

	var textureCube = loader.load( [
			'posx.jpg', 'negx.jpg',
			'posy.jpg', 'negy.jpg',
			'posz.jpg', 'negz.jpg'
		] );
	return textureCube;
}

function loadTexture(file) {

		var texture = new THREE.TextureLoader().load( file , function ( texture ) {
			texture.minFilter = THREE.LinearMipMapLinearFilter;
			texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			texture.offset.set( 0, 0 );
			texture.needsUpdate = true;
			render();
		} )
		return texture;
}

function aggiungiModello (materialeElmo, materialeCorna, materialeFrontino){

	loader.load( "models/scene.gltf", function ( model ) {
	model.scene.traverse( function ( child ) {
		if ( child.isMesh ) {
			//1 frontino
			//2 corna
			//0 elmo
			if(i == 0 ){
				ourMaterial = materialeElmo;
				child.material = ourMaterial;
				
			} else if(i==1){
				ourMaterial = materialeFrontino;
				child.material = ourMaterial;
			}
			else{
				ourMaterial = materialeCorna;
				child.material = ourMaterial;							
			}
			child.scale.multiplyScalar( 5 );
			i++;
		}
	} );
	model.scene.position.set(0,0,0);
	i = 0;
	scene.add( model.scene );
} );
}

function cambiaMaterialeElmo(tipoE, tipoC, tipoF){

	if(tipoE != null){
		switch(tipoE){
			case 'Argento':
				nuovoUniformsE = uniformsArgento;
				textureElmo = false;
				bloccaPrezzo = false;
				break;
			case 'Oro':
				nuovoUniformsE = uniformsOro;
				textureElmo = false;
				bloccaPrezzo = false;
				break;
			case 'Latta':
				if(illuminazioneManuale){
					bloccaPrezzo = true;
					alert("L'illuminazione manuale è disponibile solo per i materiali Argento e Oro! ");
					return;
				}else{
					nuovoUniformsE = uniformsLatta;
					textureElmo = true;
					bloccaPrezzo= false;
				}
				break;
			case 'Legno' :
				if(illuminazioneManuale){
					bloccaPrezzo = true;
					alert("L'illuminazione manuale è disponibile solo per i materiali Argento e Oro! ");
					return;
				}else{
					nuovoUniformsE = uniformsLegno;
					textureElmo = true;
					bloccaPrezzo = false;
				}
				break;
			case 'Ruggine' :
				if(illuminazioneManuale){
					bloccaPrezzo = true;
					alert("L'illuminazione manuale è disponibile solo per i materiali Argento e Oro! ");
					return;
				}else{
					nuovoUniformsE = uniformsRuggine;
					textureElmo = true;
					bloccaPrezzo = false;
				}
				break;
		}
	}else if(tipoC != null){
		switch(tipoC){
			case 'Argento':
				nuovoUniformsC = uniformsArgento;
				textureCorna = false;
				break;
			case 'Oro':
				nuovoUniformsC = uniformsOro;
				textureCorna = false;
				break;
			case 'Osso' :
				if(illuminazioneManuale){
					alert("L'illuminazione manuale è disponibile solo per i materiali Argento e Oro! ");
					return;
				}else{
					nuovoUniformsC = uniformsOsso;
					textureCorna = true;
				}
				break;
			case 'Legno' :
				if(illuminazioneManuale){
					alert("L'illuminazione manuale è disponibile solo per i materiali Argento e Oro! ");
					return;
				}else{
					nuovoUniformsC = uniformsLegno;
					textureCorna = true;
				}
				break;
			case 'Ruggine' :
				if(illuminazioneManuale){
					alert("L'illuminazione manuale è disponibile solo per i materiali Argento e Oro! ");
					return;
				}else{
					nuovoUniformsC = uniformsRuggine;
					textureCorna = true;
				}
				break;
		}	
	}else if(tipoF != null){
			switch(tipoF){
				case 'Argento':
				nuovoUniformsF = uniformsArgento;
				textureFrontino = false;
				break;
			case 'Oro':
				nuovoUniformsF = uniformsOro;
				textureFrontino = false;
				break;
			case 'Latta':
				if(illuminazioneManuale){
					alert("L'illuminazione manuale è disponibile solo per i materiali Argento e Oro! ");
					return;
				}else{
					nuovoUniformsF = uniformsLatta;
					textureFrontino = true;
				}
				break;
			case 'Legno' :
				if(illuminazioneManuale){
					alert("L'illuminazione manuale è disponibile solo per i materiali Argento e Oro! ");
					return;
				}else{
					nuovoUniformsF = uniformsLegno;
					textureFrontino = true;
				}
				break;
			case 'Ruggine' :
				if(illuminazioneManuale){
					alert("L'illuminazione manuale è disponibile solo per i materiali Argento e Oro! ");
					return;
				}else{
					nuovoUniformsF = uniformsRuggine;
					textureFrontino = true;
				}
				break;
		}	
	}
	else{
		alert("L'illuminazione manuale è disponibile solo per i materiali Argento e Oro! ");
	}
	
	creaModelloIlluminato(nuovoUniformsE,nuovoUniformsC, nuovoUniformsF);

}

function cambiaAmbiente(tipo){

	illuminazioneManuale = false;

	var nuovoEnviroment;
	var nuovoIrradiance;

	switch(tipo){
		case 'Scogliera':		
			nuovoEnviroment = textureCubeScogliera;
			nuovoIrradiance = irradianceMapScogliera;
			break;
		case 'ForestaInnevata':
			nuovoEnviroment = textureCubeForestaInnevata;
			nuovoIrradiance = irradianceMapForestaInnevata;		
			break;
		case 'Fiordo':
			nuovoEnviroment = textureCubeFiordo;
			nuovoIrradiance = irradianceMapFiordo;		
			break;
	}

	uniformsArgento.envMap.value = nuovoEnviroment;
	uniformsOro.envMap.value = nuovoEnviroment;

	uniformsRuggine.irradianceMap.value = nuovoIrradiance;
	uniformsLatta.irradianceMap.value = nuovoIrradiance;
	uniformsLegno.irradianceMap.value = nuovoIrradiance;
	uniformsOsso.irradianceMap.value = nuovoIrradiance;

	scene.background = nuovoEnviroment;
	
	creaModelloIlluminato(nuovoUniformsE,nuovoUniformsC,nuovoUniformsF);

}

function inserisciLuceManuale(){

	if(textureCorna || textureElmo || textureFrontino){
		alert("L'illuminazione manuale è disponibile solo per i materiali Argento e Oro! ");
		return;
	}

	illuminazioneManuale = true;

	scene.background =  0xFFFFF;

	var luce = new THREE.Mesh( new THREE.SphereGeometry( 3, 16,16), new THREE.MeshBasicMaterial ({color: 0xFFFFF} ));
	luce.position.set( 8,7,7 );

	var luce2 = new THREE.Mesh( new THREE.SphereGeometry( 3, 16,16), new THREE.MeshBasicMaterial ({color: 0xFFFFF} ));
	luce2.position.set( -8,7,7 );

	var luce3 = new THREE.Mesh( new THREE.SphereGeometry( 3, 16,16), new THREE.MeshBasicMaterial ({color: 0xFFFFF} ));
	luce3.position.set( 0,0,-7 );

	uniformsArgento.pointLightPosition.value = new THREE.Vector3(luce.position.x, luce.position.y, luce.position.z); 
	uniformsOro.pointLightPosition.value = new THREE.Vector3(luce.position.x, luce.position.y, luce.position.z);   

	uniformsArgento.pointLightPosition2.value = new THREE.Vector3(luce2.position.x, luce2.position.y, luce2.position.z); 
	uniformsOro.pointLightPosition2.value = new THREE.Vector3(luce2.position.x, luce2.position.y, luce2.position.z);   

	uniformsArgento.pointLightPosition3.value = new THREE.Vector3(luce3.position.x, luce3.position.y, luce3.position.z); 
	uniformsOro.pointLightPosition3.value = new THREE.Vector3(luce3.position.x, luce3.position.y, luce3.position.z);   

	creaModelloIlluminato(nuovoUniformsE,nuovoUniformsC,nuovoUniformsF);

}

function creaModelloIlluminato(uE,uC,uF){

	while(scene.children.length > 0){ 
	    scene.remove(scene.children[0]); 
	}

	if(!illuminazioneManuale){

		if (!textureElmo) {
			materialElmo = new THREE.ShaderMaterial({ uniforms: uE, vertexShader: vs_glossy, fragmentShader: fs_glossy, extensions: materialExtensions });
		}else {
			materialElmo = new THREE.ShaderMaterial({ uniforms: uE, vertexShader: vs_iem, fragmentShader: fs_iem, extensions: materialExtensions });
		}

		if (!textureCorna) {
			materialCorna = new THREE.ShaderMaterial({ uniforms: uC, vertexShader: vs_glossy, fragmentShader: fs_glossy, extensions: materialExtensions });
		}else{
			materialCorna = new THREE.ShaderMaterial({ uniforms: uC, vertexShader: vs_iem, fragmentShader: fs_iem, extensions: materialExtensions });
		}

		if(!textureFrontino){
			materialFrontino = new THREE.ShaderMaterial({ uniforms: uF, vertexShader: vs_glossy, fragmentShader: fs_glossy, extensions: materialExtensions });	
		}else {
			materialFrontino = new THREE.ShaderMaterial({ uniforms: uF, vertexShader: vs_iem, fragmentShader: fs_iem, extensions: materialExtensions });
		}

	}else{ 
		materialElmo = new THREE.ShaderMaterial({ uniforms: uE, vertexShader: vs_normal, fragmentShader: fs_normal, extensions: materialExtensions });
		materialCorna = new THREE.ShaderMaterial({ uniforms: uC, vertexShader: vs_normal, fragmentShader: fs_normal, extensions: materialExtensions });	
		materialFrontino = new THREE.ShaderMaterial({ uniforms: uF, vertexShader: vs_normal, fragmentShader: fs_normal, extensions: materialExtensions });
	}

	aggiungiModello(materialElmo,materialCorna, materialFrontino);
}

function onResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( windowWidth < 400? 400 : windowWidth, windowHeight < 400? 400 : windowHeight);

}

function updateUniforms() {

    uniformsArgento.clight.value = new THREE.Vector3( lightParameters.red * lightParameters.intensity, lightParameters.green * lightParameters.intensity, lightParameters.blue * lightParameters.intensity);
    uniformsArgento.clight2.value = new THREE.Vector3( lightParameters2.red * lightParameters2.intensity, lightParameters2.green * lightParameters2.intensity, lightParameters2.blue * lightParameters2.intensity);
    uniformsArgento.clight3.value = new THREE.Vector3( lightParameters3.red * lightParameters3.intensity, lightParameters3.green * lightParameters3.intensity, lightParameters3.blue * lightParameters3.intensity);
    uniformsArgento.normalScale.value = new THREE.Vector2( textureParameters.normalScale, textureParameters.normalScale );
    uniformsOro.clight.value = new THREE.Vector3( lightParameters.red * lightParameters.intensity, lightParameters.green * lightParameters.intensity, lightParameters.blue * lightParameters.intensity);
    uniformsOro.clight2.value = new THREE.Vector3( lightParameters2.red * lightParameters2.intensity, lightParameters2.green * lightParameters2.intensity, lightParameters2.blue * lightParameters2.intensity);
    uniformsOro.clight3.value = new THREE.Vector3( lightParameters3.red * lightParameters3.intensity, lightParameters3.green * lightParameters3.intensity, lightParameters3.blue * lightParameters3.intensity);
    uniformsOro.normalScale.value = new THREE.Vector2( textureParameters.normalScale, textureParameters.normalScale );

}

//Funzione per settare il prezzo dell'elmo vichingo
function setPrezzo(n){
	
	if (!illuminazioneManuale) {
		document.getElementById('prezzo').innerHTML = 50 + n;
	}
	else{
		if (!bloccaPrezzo) {
			document.getElementById('prezzo').innerHTML = 50 + n;
		}
	}
	
}