console.log(document.getElementsByTagName("a"));
document.getElementsByTagName("a")[3].onclick = function() {cuadroDialogo("comenzar")};


function cuadroDialogo(boton) {
    console.log(boton);
    if (boton === "comenzar") {
        console.log("Aqui entro en comenzar");
        
        let section = document.getElementsByTagName("section")[0].innerHTML = `  
            <div class="caja-crear-guifos-chequeo caja-crear-guifos-chequeo___margin  flex-column align-center">
                <div class="div-pestaña-crear-guifos-2">
                    <img class="x-close" src="./assets/close.svg" alt="imagen-close">
                    <div class="pestaña pestaña-crear-guifos-chequeo" >
                        <h1 class="pestaña-texto pestaña--texto__margin" >Un Chequeo Antes de Empezar</h1>
                    </div>
                </div>

                <div class="caja-contenedor-grabacion caja-contenedor-grabacion__margin flex-column align-center">
                    
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
        console.log("Estas son las a, en btn comenzar");
        console.log(document.getElementsByTagName("a"));
        document.getElementsByTagName("a")[3].onclick = function() {cuadroDialogo("capturar")};
   
    } else if (boton === "capturar") {
        console.log("Aqui entro en capturar"+ document.getElementsByTagName("a"));
        console.log("click en boton capturar");
        let section = document.getElementsByTagName("section")[0].innerHTML = `  
            <div class="caja-crear-guifos-chequeo caja-crear-guifos-chequeo___margin  flex-column align-center">
                <div class="div-pestaña-crear-guifos-2">
                    <img class="x-close" src="./assets/close.svg" alt="imagen-close">
                    <div class="pestaña pestaña-crear-guifos-chequeo" >
                        <h1 class="pestaña-texto pestaña--texto__margin" >Un Chequeo Antes de Empezar</h1>
                    </div>
                </div>

                <div class="caja-contenedor-grabacion caja-contenedor-grabacion__margin flex-column align-center">
                    
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
        console.log("Estas son las a, en btn capturar");
        console.log(document.getElementsByTagName("a"));
        document.getElementsByTagName("a")[3].onclick = function() {cuadroDialogo("listo")};

    } else if (boton === "listo"){
        console.log("click en boton listo");
        let section = document.getElementsByTagName("section")[0].innerHTML = `  
            <div class="caja-crear-guifos-chequeo caja-crear-guifos-chequeo___margin  flex-column align-center">
                <div class="div-pestaña-crear-guifos-2">
                    <img class="x-close" src="./assets/close.svg" alt="imagen-close">
                    <div class="pestaña pestaña-crear-guifos-chequeo" >
                        <h1 class="pestaña-texto pestaña--texto__margin" >Un Chequeo Antes de Empezar</h1>
                    </div>
                </div>

                <div class="caja-contenedor-grabacion caja-contenedor-grabacion__margin flex-column align-center">
                    
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
        console.log("Estas son las a, en btn listo");
        console.log(document.getElementsByTagName("a"));
        document.getElementsByTagName("a")[4].onclick = function() {cuadroDialogo("subir")};
        console.log("estoy en final Subirguifos");
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




