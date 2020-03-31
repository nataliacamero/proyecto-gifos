



let recorder;
let blob;
let contadorCaptura;
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
    let segundos = 0;
    let minutos = 0;
    contadorCaptura = setInterval(() => {
        
        if (segundos < 60) {
            if (segundos < 9){
                 segundos = "0" + segundos;
            }

            document.getElementsByTagName("p")[0].innerHTML = `00:00:${minutos}:${segundos}`;
            segundos++;
        } else {
            minutos++;  
            segundos = 0;
        }
           
    },1000);

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
    //Limpiamos el timer
    clearInterval(contadorCaptura);

};


function descargarGuifo(){
    invokeSaveAsDialog(blob)
};

function inicio() {
    location.reload();
};


function copiarEnlace(urlImagen) {
    var aux = document.createElement("input");
    aux.setAttribute("value",`${urlImagen}`);
    console.log(aux.value);
    document.body.appendChild(aux);
    aux.select();
    console.log(document.execCommand("copy"));
    document.body.removeChild(aux);
};



function subirVideo() {
    const apikeyTen = 'dsuYjjUPEjD2uXAjeNzlsGO0OFmUrqQ5';
    const url = `https://upload.giphy.com/v1/gifs`;

    let form = new FormData();
    form.append('api_key', apikeyTen);
    form.append('tags', '');
    form.append('file', blob, 'myGif.gif');
    
    var request = new XMLHttpRequest();
    request.open("POST", url);

        
    request.onload = function (e) {

        if (this.status == 200) {
        
            localStorage.setItem('gif' + JSON.parse(this.response)["data"]["id"], this.response);
            
            let url = `https://api.giphy.com/v1/gifs/${JSON.parse(this.response)["data"]["id"]}?api_key=${apikeyTen}`;
            
            fetch(url).then(respuesta => {
                return respuesta.json();
            }).then(json => {
                console.log(json.data.id);
                let urlImagen = json.data.images.downsized_medium.url;
                let idExito = json.data.id;
                let tituloGIf = json.data.title;

                document.getElementsByTagName("section")[0].innerHTML = `
            
                    <div class="caja-exito flex-column align-center ">

                        <div class="div-pestaña-crear-guifos-2">
                            <img class="x-close" src="./assets/close.svg" alt="imagen-close">
                            <div class="pestaña pestaña-crear-guifos-chequeo" >
                                <h1 class="pestaña-texto pestaña--texto__margin" >Guifo Subido Con Éxito</h1>
                            </div>
                        </div>

                        <div  class="div-contenedor-exito flex-row center">

                            <div class="caja-img-gifo-exito">
                                <div class="guifo-exito">
                                    <img id="${idExito}" src="${urlImagen}" alt="${tituloGIf}" class="gif-exito"/>
                                </div>
                        
                            </div>

                            <div class="caja-botones-exito flex-column align-center ">

                                <div class="div-titulo-exito flex-row">
                                    <h2 class="texto texto-bold ">Guifo creado con éxito</h2>
                                </div>

                                <div class="boton-general boton--extra-large boton-blanco boton-general__margin30px boton-general_margin14px center"><a class="boton-texto   boton-texto-azul-oscuro  boton-texto-144px-line-heigth   boton-exito-copiar-guifo  marco-boton-dotted" href="#">Copiar Enlace Guifo</a></div>
                                <div class="boton-general boton--extra-large boton-blanco boton-general__margin30px center"><a class="boton-texto boton-texto-azul-oscuro   boton-texto-144px-line-heigth  boton-exito-descargar-guifo   marco-boton-dotted " href="#" download>Descargar Guifo</a></div>
                                
                                <div class="div-contenedor-boton-listo flex-column">
                                    <div class="boton-general boton--grande  boton-rosado boton-general__margin46px center"><a class="boton-texto boton-texto-azul-oscuro boton-texto-144px-line-heigth  boton-exito-listo   marco-boton-dotted" >Listo</a></div>
                                </div>


                            </div>
                            
                        </div>

                    </div>`;


                    console.log(document.getElementsByTagName("a"));


                    document.getElementsByTagName("a")[2].onclick = function () {copiarEnlace(urlImagen)};
                    document.getElementsByTagName("a")[3].onclick = function () {descargarGuifo()};

                    document.getElementsByTagName("a")[4].onclick = function () {inicio()};

            

                    
                



            }); 
                    
                    
                    
                
        };
        
    }


    request.send(form);
    

}





function htmlToElements(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}
function getMisGuifos() {
    const apikeyTen = 'dsuYjjUPEjD2uXAjeNzlsGO0OFmUrqQ5';
    
    for (var i = 0; i < localStorage.length; i++) {
        
        miguifo = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if(!localStorage.key(i).startsWith("gif")){
            continue;
        }
        fetch(`https://api.giphy.com/v1/gifs/${miguifo["data"]["id"]}?api_key=${apikeyTen}`).then(respuesta => {
            return respuesta.json();
        }).then(json => {
            let misguifos = document.querySelector('.div-resultados-mis-guifos--crear-guifo--html')
            // console.log(json.data);
            let id = json.data.id;
           
            let titulo = "pruebas mas pruebas y mas pruebas";
            const stringMisGuifos = titulo.replace(/ /g, " #")
            const stringNumeralMisGuifos = "#" + stringMisGuifos.slice(0, stringMisGuifos.lenght);
            const stringFinalMisGuifos = stringNumeralMisGuifos.slice(0,30);
            htmlresult = htmlToElements(`
                <div class="divtendencias caja-gifs-resultados cajas-gifs-resultados__margin">
                    <div class="marco-imagen ">
                    </div>
                        <img
                            id="${id}";
                            class="imagen-resutados"
                            src="${json.data.images.downsized_medium.url}" 
                            alt="${titulo}"
                        />
                    <div id="etiqueta" class="etiqueta-imagen">
                        <p class="pestaña-texto pestaña--texto__margin">${stringFinalMisGuifos}</p>
                    </div>
                </div>
  
  
            `);
            // console.log(htmlresult)
            misguifos.appendChild(htmlresult);

        

        });

    

    }
    
 

}

getMisGuifos();



document.getElementById("comenzar").onclick = function () { cuadroDialogo("comenzar") };

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

                    <div class="boton boton--pequeno flex-row center" >
                        <a id="boton-camara" class="a-imagen-boton flex-row center" href="#"><img class="imagen-boton" src="./assets/camera.svg" alt="imagen-camara-boton-grabar"></a>
                    </div>
                    <div class="boton-general boton--grande  boton-rosado  center">
                        <a id="boton-capturar"class="boton-texto boton-texto-azul-oscuro boton-texto-144px-line-heigth boton-chequeo-capturar marco-boton-dotted" href="#">Capturar</a>
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
                            <p class="texto"></p>
                        </div>
                    </div>

                    <div class="div-derecho-controles flex-row justify-end align-center">
                        <div class="boton-general boton--pequeno boton-rojo flex-row center" >
                            <a id="a-imagen-listo" class="a-imagen-listo flex-row center" href="#"><img class="imagen-boton" src="./assets/recording.svg" alt="imagen-circulo-boton-listo"></a>
                        </div>
                        <div class="boton-general boton--grande  boton-rojo center">
                            <a id="a-boton-listo" class="boton-texto boton-texto-blanco boton-texto-144px-line-heigth boton-chequeo-listo marco-boton-dotted" href="#">Listo</a>
                        </div>
                    </div>
                </div>
            </div>`;
        streamVideo()
        grabarStream();
        console.log(document.getElementsByTagName("p")[0].innerHTML)
                

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
                            <p class="texto">00:00:00:06</p>
                        </div>

                        <div class="boton-flecha flecha-foward flecha-foward__margin-right boton boton--pequeno flex-column center">
                            <a href="#" class=" flecha-foward marco-boton-dotted flex-column justify-center" >
                                <img  class="imagen-boton" src="./assets/forward.svg" alt="BotonFlechaa-a-la-derecha">
                            </a>
                        </div>
                        <div class=" caja-contenedora-cargando flex-row center">
                            <div class="rectangulo activo margin-rectangulo"></div>
                            <div class="rectangulo activo"></div>
                            <div class="rectangulo activo"></div>
                            <div class="rectangulo activo"></div>
                            <div class="rectangulo activo"></div>
                            <div class="rectangulo activo"></div>
                            <div class="rectangulo activo"></div>
                            <div class="rectangulo activo"></div>
                            <div class="rectangulo activo"></div>
                            <div class="rectangulo"></div>
                            <div class="rectangulo"></div>
                            <div class="rectangulo"></div>
                            <div class="rectangulo"></div>
                            <div class="rectangulo"></div>
                            <div class="rectangulo"></div>
                            <div class="rectangulo"></div>
                            <div class="rectangulo"></div>
                            
                        </div>

                    </div>

                    <div class="div-izquierdo-controles flex-row justify-end align-center">

                        <div class="boton-general boton--grande boton-blanco  center"><a class="boton-texto boton-texto-azul-oscuro boton-texto-144px-line-heigth  boton-chequeo-repetirCaptura marco-boton-dotted" href="#">Repetir Captura</a></div>
                        <div class="boton-general boton--grande  boton-rosado  boton-subir-guifo__marginleft center"><a class="boton-texto boton-texto-azul-oscuro boton-texto-144px-line-heigth boton-chequeo-subir-guifo marco-boton-dotted" href="#">Subir Guifo</a></div>

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
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                        <div class="rectangulo"></div>
                    </div>
                    <p class="texto-p-tiempo-restante">Tiempo restante: <span class="span-años">38 años</span> algunos minutos</p>
                </div>

                <div class="controles-grabacion flex-row align-center">
                    <div class="boton-general boton--grande boton-blanco center"><a class="boton-texto boton-texto-azul-oscuro boton-texto-144px-line-heigth  boton-chequeo-cancelar marco-boton-dotted" href="./crear-guifo.html">Cancelar</a></div> 
                </div>
            </div>`;
            let contadorRectangulos = 0;
            let rectangulos = document.querySelectorAll(".rectangulo");
            console.log(rectangulos);
            setInterval(() => {
                
                if (contadorRectangulos < rectangulos.length) {
                    
                    rectangulos.item(contadorRectangulos).classList.toggle("activo");
                    
                    contadorRectangulos++;
                } else {

                contadorRectangulos = 0;

                }


            },180);

    }
};




