console.log(document.getElementsByTagName("a"));
document.getElementsByTagName("a")[3].onclick = function () { cuadroDialogo("comenzar") };
const apikeyTen = 'dsuYjjUPEjD2uXAjeNzlsGO0OFmUrqQ5';

let recorder;
let blob;
async function streamVideo() {

    let video = document.querySelector('video');

    let stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    });

    if ("srcObject" in video) {
        video.srcObject = stream;
    } else {

        video.src = window.URL.createObjectURL(stream);
    }
    video.onloadedmetadata = function (e) {
        video.play();
    };

};

async function grabarStream() {
    let video = document.querySelector('video');
    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    video.srcObject = stream;
    recorder = new RecordRTCPromisesHandler(stream, {
        type: 'gif',
        frameRate: 1,
        quality: 10,
        width: 360,
        hidden: 240,
        onGifRecordingStarted: function () {
            console.log('started')
        },
    });

    await recorder.startRecording();


    recorder.stream = stream;
}

function createObjectURL(file) {
    if (window.webkitURL) {
        return window.webkitURL.createObjectURL(file);
    } else if (window.URL && window.URL.createObjectURL) {
        return window.URL.createObjectURL(file);
    } else {
        return null;
    }
}

async function stopRecordingCallback() {
    await recorder.stopRecording();
    let imagen = document.querySelector('.gif-generado');
    blob = await recorder.getBlob();
    imagen.src = createObjectURL(blob);
    recorder.stream.getTracks()[0].stop();

    // reset recorder's state
    await recorder.reset();

    // clear the memory
    await recorder.destroy();
    jonathan


}


function subirVideo() {
    const url = `https://upload.giphy.com/v1/gifs`;

    let form = new FormData();
    form.append('api_key', apikeyTen);
    form.append('tags', '');
    form.append('file', blob, 'myGif.gif');
    console.log(form.get('file'))

    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.onload = function (e) {
        if (this.status == 200) {
            console.log(JSON.parse(this.response)); // JSON response  
            localStorage.setItem('gif' + JSON.parse(this.response)["data"]["id"], this.response);
        }
    };
    request.send(form);

}
function htmlToElements(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}
function getMisGuifos() {
    
    
    for (var i = 0; i < localStorage.length; i++) {
        miguifo = JSON.parse(localStorage.getItem(localStorage.key(i)));
        fetch(`https://api.giphy.com/v1/gifs/${miguifo["data"]["id"]}?api_key=${apikeyTen}`).then(respuesta => {
            return respuesta.json();
        }).then(json => {
            let misguifos = document.querySelector('.div-resultados-mis-guifos--crear-guifo--html')
            console.log(json.data);
            let titulo = "#probando #natural #nofake";
            htmlresult = htmlToElements(`
                <div class="divtendencias caja-gifs-resultados cajas-gifs-resultados__margin">
                    <div class="marco-imagen ">
                    </div>
                        <img
                            
                            class="imagen-resutados"
                            src="${json.data.images.downsized_medium.url}" 
                            alt="${titulo}"
                        />
                    <div id="etiqueta" class="etiqueta-imagen">
                        <p class="pestaña-texto pestaña--texto__margin">${titulo}</p>
                    </div>
                </div>
  
  
            `);
            console.log(htmlresult)
            misguifos.appendChild(htmlresult);

        

        });

    

    }
    
 

}

getMisGuifos();


function cuadroDialogo(boton) {

    if (boton === "comenzar") {


        let section = document.getElementsByTagName("section")[0].innerHTML = `  
            <div class="caja-crear-guifos-chequeo caja-crear-guifos-chequeo___margin  flex-column align-center">
                <div class="div-pestaña-crear-guifos-2">
                    <img class="x-close" src="./assets/close.svg" alt="imagen-close">
                    <div class="pestaña pestaña-crear-guifos-chequeo" >
                        <h1 class="pestaña-texto pestaña--texto__margin" >Un Chequeo Antes de Empezar</h1>
                    </div>
                </div>

                <div class="caja-contenedor-grabacion caja-contenedor-grabacion__margin flex-column align-center">
                    <video class="video">
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div class="controles-grabacion flex-row align-center">

                    <div class="boton boton--pequeno center" >
                        <a class="" href="#"><img class="imagen-boton" src="./assets/camera.svg" alt="imagen-camara-boton-grabar"></a>
                    </div>
                    <div class="boton-general boton--grande  boton-rosado  center">
                        <a class="boton-texto boton-texto-azul-oscuro boton-texto-144px-line-heigth boton-chequeo-capturar marco-boton-dotted" href="#">Capturar</a>
                    </div>
                </div>
            </div>  `;
        streamVideo()

        document.getElementsByTagName("a")[3].onclick = function () {

            cuadroDialogo("capturar");

        };

    } else if (boton === "capturar") {


        let section = document.getElementsByTagName("section")[0].innerHTML = `  
            <div class="caja-crear-guifos-chequeo caja-crear-guifos-chequeo___margin  flex-column align-center">
                <div class="div-pestaña-crear-guifos-2">
                    <img class="x-close" src="./assets/close.svg" alt="imagen-close">
                    <div class="pestaña pestaña-crear-guifos-chequeo" >
                        <h1 class="pestaña-texto pestaña--texto__margin" >Un Chequeo Antes de Empezar</h1>
                    </div>
                </div>

                <div class="caja-contenedor-grabacion caja-contenedor-grabacion__margin flex-column align-center">
                    <video class="video">
                    Your browser does not support the video tag.
                    </video>
                </div>

                <div class="controles-grabacion flex-row align-center justify-evenly ">
                    <div class="div-izquierdo-controles flex-row justify-start align-center">
                        <div class="caja-contador flex-column center">
                            <p class="texto">00:00:03:06</p>
                        </div>
                    </div>

                    <div class="div-derecho-controles flex-row justify-end align-center">
                        <div class="boton-general boton--pequeno boton-rojo center" >
                            <a class="" href="#"><img class="imagen-boton" src="./assets/recording.svg" alt="imagen-circulo-boton-listo"></a>
                        </div>
                        <div class="boton-general boton--grande  boton-rojo center">
                            <a class="boton-texto boton-texto-blanco boton-texto-144px-line-heigth boton-chequeo-listo marco-boton-dotted" href="#">Listo</a>
                        </div>
                    </div>
                </div>
            </div>`;
        streamVideo()
        grabarStream();
        document.getElementsByTagName("a")[3].onclick = function () {
            cuadroDialogo("listo")
            stopRecordingCallback();


        };

    } else if (boton === "listo") {

        let section = document.getElementsByTagName("section")[0].innerHTML = `  
            <div class="caja-crear-guifos-chequeo caja-crear-guifos-chequeo___margin  flex-column align-center">
                <div class="div-pestaña-crear-guifos-2">
                    <img class="x-close" src="./assets/close.svg" alt="imagen-close">
                    <div class="pestaña pestaña-crear-guifos-chequeo" >
                        <h1 class="pestaña-texto pestaña--texto__margin" >Un Chequeo Antes de Empezar</h1>
                    </div>
                </div>

                <div class="caja-contenedor-grabacion caja-contenedor-grabacion__margin flex-column align-center">
                    <img src="#" class="imagen-video gif-generado" />
                    
                </div>

                <div class="controles-grabacion flex-row align-center">

                    <div class="div-izquierdo-controles flex-row justify-start align-center">

                        <div class="caja-contador flex-column center">
                            <p class="texto">00:00:03:06</p>
                        </div>
                        <div class="boton-flecha flecha-foward flecha-foward__margin-right boton boton--pequeno flex-column center">
                            <a href="#" class=" flecha-foward marco-boton-dotted flex-column justify-center" >
                                <img  class="imagen-boton" src="./assets/forward.svg" alt="BotonFlechaa-a-la-derecha">
                            </a>
                        </div>
                        <div class=" caja-contenedora-cargando flex-row center">
                            <div class="rectangulo-activo"></div>
                            <div class="rectangulo-activo"></div>
                            <div class="rectangulo-activo"></div>
                            <div class="rectangulo-activo"></div>
                            <div class="rectsangulo-activo"></div>
                            <div class="rectangulo-inactivo"></div>
                            <div class="rectangulo-inactivo"></div>
                            <div class="rectangulo-inactivo"></div>
                            <div class="rectangulo-inactivo"></div>
                            <div class="rectangulo-inactivo"></div>
                            <div class="rectangulo-inactivo"></div>
                            <div class="rectangulo-inactivo"></div>
                            <div class="rectangulo-inactivo"></div>
                            <div class="rectangulo-inactivo"></div>
                            <div class="rectangulo-inactivo"></div>
                            <div class="rectangulo-inactivo"></div>
                            <div class="rectangulo-inactivo"></div>
                            
                        </div>

                    </div>

                    <div class="div-izquierdo-controles flex-row justify-end align-center">

                        <div class="boton-general boton--grande boton-blanco  center"><a class="boton-texto boton-texto-azul-oscuro boton-texto-144px-line-heigth  boton-chequeo-repetirCaptura marco-boton-dotted" href="#">Repetir Captura</a></div>
                        <div class="boton-general boton--grande  boton-rosado  boton-subir-guifo__marginleft center"><a class="boton-texto boton-texto-azul-oscuro boton-texto-144px-line-heigth boton-chequeo-subir-guifo  boton-subir-guifo__marginleft  marco-boton-dotted" href="#">Subir Guifo</a></div>

                    </div>
                </div>
            </div>`;

        document.getElementsByTagName("a")[4].onclick = function () {
            cuadroDialogo("subir");
            subirVideo();
        };
        document.getElementsByTagName("a")[3].onclick = function () { cuadroDialogo("comenzar") };

    } else if (boton === "subir") {
        console.log(boton);
        console.log("click en boton subir");
        let section = document.getElementsByTagName("section")[0].innerHTML = `  
            <div class="caja-crear-guifos-chequeo caja-crear-guifos-chequeo___margin  flex-column align-center ">
                <div class="div-pestaña-crear-guifos-2">
                    <img class="x-close" src="./assets/close.svg" alt="imagen-close">
                    <div class="pestaña pestaña-crear-guifos-chequeo" >
                        <h1 class="pestaña-texto pestaña--texto__margin" >Un Chequeo Antes de Empezar</h1>
                    </div>
                </div>

                <div class="caja-contenedor-grabacion caja-contenedor-grabacion__margin flex-column center">
                    <img src="./assets/globe_img.png" alt="imagen-de mapa-mundi">
                    <p class"texto texto-bold " >Estamos subiendo tu guifo…</p>
                    <div class=" caja-contenedora-cargando  caja-contenedora-cargando-cancelar flex-row center">
                        <div class="rectangulo-activo"></div>
                        <div class="rectangulo-activo"></div>
                        <div class="rectangulo-activo"></div>
                        <div class="rectangulo-activo"></div>
                        <div class="rectangulo-activo"></div>
                        <div class="rectangulo-inactivo"></div>
                        <div class="rectangulo-inactivo"></div>
                        <div class="rectangulo-inactivo"></div>
                        <div class="rectangulo-inactivo"></div>
                        <div class="rectangulo-inactivo"></div>
                        <div class="rectangulo-inactivo"></div>
                        <div class="rectangulo-inactivo"></div>
                        <div class="rectangulo-inactivo"></div>
                        <div class="rectangulo-inactivo"></div>
                        <div class="rectangulo-inactivo"></div>
                        <div class="rectangulo-inactivo"></div>
                        <div class="rectangulo-inactivo"></div>
                        <div class="rectangulo-inactivo"></div>
                        <div class="rectangulo-inactivo"></div>
                        <div class="rectangulo-inactivo"></div>
                        <div class="rectangulo-inactivo"></div>
                        <div class="rectangulo-inactivo"></div>
                        <div class="rectangulo-inactivo"></div>
                    </div>
                    <p class="texto-p-tiempo-restante">Tiempo restante: <span class="span-años">38 años</span> algunos minutos</p>
                </div>

                <div class="controles-grabacion flex-row align-center">
                    <div class="boton-general boton--grande boton-blanco center"><a class="boton-texto boton-texto-azul-oscuro boton-texto-144px-line-heigth  boton-chequeo-cancelar marco-boton-dotted" href="./crear-guifo.html">Cancelar</a></div> 
                </div>
            </div>`;
    }
};




