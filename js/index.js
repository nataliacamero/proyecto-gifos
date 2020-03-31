//---------------------------------------------1-----------------------------------------------------
                                    //CAMBIAR TEMA
//js cambiar tema
let anclaDay = document.getElementsByTagName("a")[4].onclick = function() {cambiarTema("day")};
let anclaNight = document.getElementsByTagName("a")[5].onclick = function() {cambiarTema("night")};
let likCrerGuifo = document.getElementsByTagName("a")[1].onclick = function() {setTema()};

function cambiarTema(theme){
    console.log(!sessionStorage.getItem("tema"));
    if(!sessionStorage.getItem("tema") || theme === "day") {
        sessionStorage.setItem("tema","estilos/sailor-day.css");
        document.getElementsByTagName("img")[0].setAttribute("src", "./assets/gifOF_logo.png" );
    } else {
        sessionStorage.setItem("tema","estilos/sailor-night.css");
        document.getElementsByTagName("img")[0].setAttribute("src", "./assets/gifOF_logo_dark.png" );
    }
    let link = document.getElementsByTagName("link")[0].setAttribute("href", sessionStorage.getItem("tema"));
}
    
 
function setTema() {
    
    if (!sessionStorage.getItem("tema")) {
        sessionStorage.setItem("tema", "estilos/sailor-day.css");       
    }
    
    if(sessionStorage.getItem("tema") === "estilos/sailor-day.css"){
        document.getElementsByTagName("img")[0].setAttribute("src", "./assets/gifOF_logo.png" );
    } else {
        document.getElementsByTagName("img")[0].setAttribute("src", "./assets/gifOF_logo_dark.png" );
    }  
    document.getElementsByTagName("link")[0].setAttribute("href", sessionStorage.getItem("tema"));
}
setTema();

// --------------------------------------------------2----------------------------------------------------------
                                    //DROPDOWN
//funcionalidad para desplegar la caja del boton elegir tema y la caja de resultados de busqueda.

document.getElementById("divTema").addEventListener("click", myFunction1);
document.getElementById("div-resultados").addEventListener("click", myFunction2);

    //pone la clase que cambia el display none, por flex y muestra las cajas resultados y tema
    function myFunction1() {
        document.getElementById("myDropdown").classList.toggle("mostrar");
    }

    function myFunction2() {
        document.getElementById("myDropdown-resultados").classList.toggle("mostrar-resultados");

    }

    // Cierra el dropdown si el usuario hace click afuera de el
    window.onclick = function(event) {
        //Traer los div de la busqeda por default.
        document.getElementsByTagName("div")[21].onclick = function () {textoAInput(this.innerText)};
        document.getElementsByTagName("div")[22].onclick = function () {textoAInput(this.innerText)};
        document.getElementsByTagName("div")[23].onclick = function () {textoAInput(this.innerText)};

        if (!event.target.matches('.resultados')) {
            var dropdowns = document.getElementsByClassName("dropdown-resultados-contenedor");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('mostrar-resultados')) {
                openDropdown.classList.remove('mostrar-resultados');
            }
            }
        }

        if (!event.target.matches('.tema')) {

            var dropdowns = document.getElementsByClassName("dropdown-contenedor");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('mostrar')) {
                    openDropdown.classList.remove('mostrar');
                }
            }
        //Creamos el cambio del boton buscar al ponerse en el input.
            if (true) {
                document.querySelectorAll(".boton_buscar")[0].style.background = "#F7C9F3";
                document.querySelectorAll(".boton_buscar")[0].style.backgroundImage = "url(../assets/lupa.svg)";
                document.querySelectorAll(".boton_buscar")[0].style.backgroundRepeat= "no-repeat";
                document.querySelectorAll(".boton_buscar")[0].style.backgroundPosition = "left 5px top 10px";
                document.querySelectorAll(".boton_buscar")[0].style.boxShadow = "inset -1px -1px 0 0 #997D97, inset 1px 1px 0 0 #FFFFFF";
                document.querySelectorAll(".boton_buscar")[0].style.border = "1px solid #110038";
                document.querySelectorAll(".boton-texto--buscar")[0].style.color = "#110038";     
            } else {
                document.querySelectorAll(".boton_buscar")[0].style.background = "#EE3EFE";
                document.querySelectorAll(".boton_buscar")[0].style.backgroundImage = "url(../assets/lupa_light.svg)";
                document.querySelectorAll(".boton_buscar")[0].style.backgroundRepeat= "no-repeat";
                document.querySelectorAll(".boton_buscar")[0].style.backgroundPosition = "left 5px top 10px";
                document.querySelectorAll(".boton_buscar")[0].style.boxShadow = "inset -1px -1px 0 0 #A72CB3, inset 1px 1px 0 0 #FFFFFF";
                document.querySelectorAll(".boton_buscar")[0].style.border = "1px solid #110038";
                document.querySelectorAll(".boton-texto--buscar")[0].style.color = "#ffffff";
            }

        }
    }

// --------------------------------------------------3----------------------------------------------------------
                            //FUNCION COMPLETAR

//Funcion terminos de busqueda relacionados, en caja buscar

//creamos un arrelo que contiene los términos.
let data = {
    terminos: [
        {
            term: "amor", 
            rel: "amor enamorado",
            otro: "pareja"
        },
        {
            term: "belleza", 
            rel: "beautiful",
            otro: "blackandwhite"
        },        
        {
            term: "cute", 
            rel: "tierno",
            otro: "mascota"
        },        
        {
            term: "divertido", 
            rel: "divertido dibujo",
            otro: "diseño"
        },
        {
            term: "estilo", 
            rel: "estilo de vida",
            otro: "fancy gourmet"
        },
        {
            term: "family", 
            rel: "family time",
            otro: "vacations"
        },
        {
            term: "girl", 
            rel: "girl angel",
            otro: "nature girl"
        },
        {
            term: "hermoso", 
            rel: "hermoso cielo",
            otro: "save nature"
        },
        {
            term: "inspiracion", 
            rel: "inspiracion conmovedora",
            otro: "dreams"
        },
        {
            term: "journal", 
            rel: "journal confirm",
            otro: "news"
        },
        {
            term: "keep", 
            rel: "keep yourself",
            otro: "save all of us"
        },
        {
            term: "love", 
            rel:  "love live ",
            otro: "love you"

        },
        {
            term: "mindfulness", 
            rel:  "mindfulness meditation",
            otro: "inner peace"

        },
        {
            term: "nature", 
            rel:  "nature world",
            otro: "medio ambiente"

        },
        {
            term: "old", 
            rel:  "old fashion",
            otro: "antiguo puente"

        },
        {
            term: "photooftheday", 
            rel:  "photooftheday ours",
            otro: "galeria"

        },
        {
            term: "queen", 
            rel:  "queen elizabeth ",
            otro: "dinastia real"

        },
        {
            term: "rosado", 
            rel:  "rosado unicornio",
            otro: "pink love"

        },
        {
            term: "saludable", 
            rel:  "saludable",
            otro: "healthy food"

        },
        {
            term: "tbt", 
            rel:  "tbt image",
            otro: "recuerdos colegio"

        },
        {
            term: "unicornio", 
            rel:  "unicornio azul",
            otro: "pony comic"

        },
        {
            term: "verano", 
            rel:  "verano helado",
            otro: "cambio climatico"

        },
        {
            term: "walk", 
            rel:  "walk forest",
            otro: "caminata"

        },
        {
            term: "xilofono", 
            rel:  "xilofono dulce",
            otro: "music instrumental"

        },
        {
            term: "yes", 
            rel:  "yes i do",
            otro: "marriage"

        },
        {
            term: "zebra", 
            rel:  "zebra pink",
            otro: "zoo"

        }
    ]
};


let campoInput = document.getElementsByTagName("input")[0];
let divLista = document.getElementById("myDropdown-resultados");
let elementoLista = '';

// ponemos el innerText del resultado de busqueda en el input.
function textoAInput(e){    
    document.getElementsByTagName("input")[0].value = e;
};

//evento que genera los terminos relacionados al cambiar el Input.
campoInput.addEventListener('input', function(){
    let value = input.value;
    
    // Limpiar divList
    while (divLista.firstChild) {
        divLista.removeChild(divLista.lastChild);
    }

    //elemento que inyecta los terminos relacionados en el divLista
    elementoLista = '';
    for (let i = 0;  i <= data.terminos.length-1; i++) {
    
        if(!value) {
            break;
        }
        
        if(data.terminos[i].term.substr(0, value.length) === value){
            
            elementoLista += `
            <div id="term" class=" boton-general boton--grande boton-blanco boton-buscar-largo-buscar-resultados align-center">
                <a id="a-term" class="boton-texto boton-texto-azul-oscuro boton-texto-largo-buscar-resultados marco-boton-dotted boton-texto-margenes" onclick="textoAInput(this.innerText)" href="#">
                    ${data.terminos[i].term.substr(0, value.length)}${data.terminos[i].term.substr(value.length)}
                </a>
            </div>
            <div id="rel" class=" boton-general boton--grande boton-blanco boton-buscar-largo-buscar-resultados align-center">
                <a id="a-rel" class="boton-texto boton-texto-azul-oscuro boton-texto-largo-buscar-resultados marco-boton-dotted boton-texto-margenes" onclick="textoAInput(this.innerText)" href="#">
                    ${data.terminos[i].rel.substr(0, value.length)}${data.terminos[i].rel.substr(value.length)}
                </a>
            </div>
            <div id="otro" class=" boton-general boton--grande boton-blanco boton-buscar-largo-buscar-resultados align-center">
                <a id="a-otro" class="boton-texto boton-texto-azul-oscuro boton-texto-largo-buscar-resultados marco-boton-dotted boton-texto-margenes"  onclick="textoAInput(this.innerText)" href="#">
                    ${data.terminos[i].otro.substr(0, value.length)}${data.terminos[i].otro.substr(value.length)} 
                </a>
            </div>
            `; 
            
            divLista.innerHTML = elementoLista;
            break
                   
        }  
        divLista.innerHTML = `'No hay resultados'`;
    }
    
});

// --------------------------------------------------3----------------------------------------------------------
                                    //FUNCION FETCH BUSCAR
                //Incluye funcionalidades de botones ver mas, la "X" para cerrar
//Traemos boton bucar, el input y el div para iyectarle el html.
const btnBuscar = document.getElementsByTagName("a")[7];
const input = document.getElementsByTagName("input")[0];
const divResultados = document.getElementsByTagName("div")[47];

//Funcionalidad cerrar bsqueda Guifos sugeridos.
//cuando cliqueamos la x hace refresh.
function cerrarX() {
    
    document.getElementsByClassName("x-close")[0].onclick = function () { resetBusquedaSugeridos() };
    document.getElementsByClassName("x-close")[1].onclick = function () { resetBusquedaSugeridos() };
    document.getElementsByClassName("x-close")[2].onclick = function () { resetBusquedaSugeridos() };
    document.getElementsByClassName("x-close")[3].onclick = function () { resetBusquedaSugeridos() };


    function resetBusquedaSugeridos() {
        location.reload();
    }
};

cerrarX();


//Funcionalidad Boton ver mas GuifOs sugeridos.
function botonVermas() {
    
    //Traemos todos los botones ver mas
    document.getElementsByTagName("a")[11].onclick = function () { enviarTag("jonathan") };
    document.getElementsByTagName("a")[12].onclick = function () { enviarTag("sailor") };
    document.getElementsByTagName("a")[13].onclick = function () { enviarTag("fab") };
    document.getElementsByTagName("a")[14].onclick = function () { enviarTag("unicorns") };


    //Cada boton ver mas, envia su innerText a la busqueda   
    function enviarTag(boton) {

        if (boton === "jonathan") {

            let textoJonathan = document.getElementsByTagName("h2")[0].innerText;

            //separo palabras
            let jonathan = textoJonathan.slice(1, 9);
            let vanness = textoJonathan.slice(9, textoJonathan.length);
            enviarJonathan = jonathan + " " + vanness;
            //Quito los #
            textoJonathan.slice(1, textoJonathan.length);
            //envio el string al iput 
            input.value = enviarJonathan;
            //lo pongo como argumento para que realice la busqueda automatica del termino.
            search(enviarJonathan);
            //Envio el termino a la caja titulo de tendencias, como resultado de busqueda
            let textoTendencias = document.getElementsByTagName("h1")[3].innerText = enviarJonathan;
            window.scrollTo(0, 700);

        } else if (boton === "sailor") {


            let textoSailor = document.getElementsByTagName("h2")[1].innerText;

            //Separo palabras
            let sailor = textoSailor.slice(1, 7);
            let mercury = textoSailor.slice(7, textoSailor.length);
            enviarSailor = sailor + " " + mercury;
            //envio el string al iput
            input.value = enviarSailor;
             //lo pongo como argumento para que realice la busqueda automatica del termino.
            search(enviarSailor);
            //Envio el termino a la caja titulo de tendencias, como resultado de busqueda
            let textoTendencias = document.getElementsByTagName("h1")[3].innerText = enviarSailor;

            window.scrollTo(0, 700);

        } else if (boton === "fab") {
            //Separo palabras
            let textoFab = document.getElementsByTagName("h2")[2].innerText;
            let fab = textoFab.slice(1, 4);
            let five = textoFab.slice(4, textoFab.length);
            enviarFab = fab + " " + five;
            //envio el string al iput
            input.value = enviarFab;
            //lo pongo como argumento para que realice la busqueda automatica del termino.
            search(enviarFab);
            //Envio el termino a la caja titulo de tendencias, como resultado de busqueda
            let textoTendencias = document.getElementsByTagName("h1")[3].innerText = enviarFab;

            window.scrollTo(0, 700);

        } else if (boton === "unicorns") {
            //Separo palabras
            let textoUnicorns = document.getElementsByTagName("h2")[3].innerText;
            let unicorns = textoUnicorns.slice(1, 9);
            let y = textoUnicorns.slice(9, 10);
            let rainbows = textoUnicorns.slice(10, textoUnicorns.length);
            enviarUnicorns = unicorns + " " + y + " " + rainbows;
            //envio el string al iput
            input.value = enviarUnicorns;
            //lo pongo como argumento para que realice la busqueda automatica del term
            search(enviarUnicorns);
            //Envio el termino a la caja titulo de tendencias, como resultado de busqueda
            let textoTendencias = document.getElementsByTagName("h1")[3].innerText = enviarUnicorns;
            window.scrollTo(0, 700);

        }
    };

};

botonVermas();


//Vista de busqueda
btnBuscar.addEventListener('click', event => {
    const q = input.value;

    if (input.value === "") {
        event.preventDefault();
        return false;
    }

    search(q);

    //Ocultamos section sugeridos
    document.getElementsByTagName("section")[1].style.display = "none";

    //Asignamos lo que se escriba en el input, en caja titulo de tendencias.
    let tendencias = document.getElementsByTagName("h1")[3].innerText = q;
});


//Funcionalidad que  genera los botones con el historial de busqueda, bajo de la caja buscar.
function refrescarHistorial() {
    let historial = JSON.parse(localStorage.getItem('historial'));

    if (!historial) {
        localStorage.setItem('historial', JSON.stringify([]));
        historial = JSON.parse(localStorage.getItem('historial'));
    }

    const lista = document.getElementsByTagName("ul")[0];
   
    lista.innerHTML = '';
    //Generamos el boton y agragamos la clase respectiva con estilo.
    historial.forEach(function (item) {
        let node = document.createElement("LI");
        let textnode = document.createTextNode("#" + item);
        let clas = document.createAttribute("class")
        clas.value = "boton-historial";
        node.setAttributeNode(clas);
        node.appendChild(textnode);
    
        node.addEventListener("click", function (e) {
            targetElement = e.target || e.srcElement;
            textoAInput(targetElement.innerText.slice(1));

        });
        
        lista.appendChild(node);
    });

}

refrescarHistorial();

function agregarHistorial(q) {

    let historial = JSON.parse(localStorage.getItem('historial'));

    if (!historial) {
        localStorage.setItem('historial', JSON.stringify([]));
        historial = JSON.parse(localStorage.getItem('historial'));
    }



    if (!historial.includes(q)) {
        historial.unshift(q);
    }



    if (historial.length > 9) {
        historial.pop();
    }

    localStorage.setItem('historial', JSON.stringify(historial));

    refrescarHistorial();
}

function borrarHistorial(q) {
    let historial = JSON.parse(localStorage.getItem('historial'));

    if (!historial) {
        localStorage.setItem('historial', JSON.stringify([]));
        historial = JSON.parse(localStorage.getItem('historial'));
    }

    historial.splice(historial.indexOf(q), 1);

    localStorage.setItem('historial', JSON.stringify(historial));
    refrescarHistorial();

}
//Funcionalidad BUSQUEDA de GUIFOS

function search(q) {

    const apikey = 'dsuYjjUPEjD2uXAjeNzlsGO0OFmUrqQ5';
    const ruta = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`;

    fetch(ruta).then(respuesta => {
        return respuesta.json();
    })
        .then(json => {
          
            agregarHistorial(q);
            let resultadosHTML = '';


            json.data.forEach(objeto => {
            
                const url = objeto.images.downsized_medium.url;
                const title = objeto.title;
                const stringBuscar = title.replace(/ /g, " #")
                const stringNumeralBuscar = "#" + stringBuscar.slice(0, stringBuscar.lenght);
                const stringFinalBuscar = stringNumeralBuscar.slice(0, 30);
                resultadosHTML += `
                <div class="divtendencias caja-gifs-resultados cajas-gifs-resultados__margin">
                    <div class="marco-imagen ">
                    </div>
                        <img
                            class="imagen-resutados"
                            src="${url}" 
                            alt="${title}"
                        >
                    <div id="etiqueta" class="etiqueta-imagen">
                        <p class="pestaña-texto pestaña--texto__margin">${stringFinalBuscar}</p>
                    </div>
                    
                </div>
        
        
            `;

            });

            divResultados.innerHTML = resultadosHTML;


        }).catch(error => {
            console.error(error.message);
        });
}



// --------------------------------------------------4---------------------------------------------------------
                            //Funcionalidad GUIFOS SUGERIDOS

  
//generamos los datos para consumir el servicio
const apikey = 'api_key=dsuYjjUPEjD2uXAjeNzlsGO0OFmUrqQ5';
const url = `https://api.giphy.com/v1/gifs/search?`;

//creamos las variables de cada GUIFO sugerido, que se inluira en la url
const jonathan = "&q=Jonathan%20%vanness";
const sailor = "&q=sailor%20%mercury";
const fabFive = "&q=fab%20%five";
const unicorns = "&q=unicorns%20%&%20%rainbows";
const ruta = url+apikey


//hacemos Get de Guifo sugerido, Jonathan
fetch(ruta+jonathan).then(respuesta => {
    return respuesta.json();
}).then(json => {
        const url = json.data[13].images.downsized_medium.url;
        const title = json.data[13].title;
        resultados1HTML = `             
                <img
                    class="imagen-sugeridos"
                    src="${url}" 
                    alt="${title}"
                >`;
        document.getElementsByTagName("div")[29].innerHTML = resultados1HTML;
}).catch(error => {
    console.error(error.message);
});

//hacemos Get de Guifo sugerido, sailor
fetch(ruta+sailor).then(respuesta2 => {
    return respuesta2.json();
}).then(json => {
    const url = json.data[1].images.downsized_medium.url;
    const title = json.data[1].title;
    resultados1HTML = `             
            <img
                class="imagen-sugeridos"
                src="${url}" 
                alt="${title}"
            >`;
    document.getElementsByTagName("div")[34].innerHTML = resultados1HTML;
}).catch(error => {
    console.error(error.message);
});


//hacemos Get de Guifo sugerido, FabFive
fetch(ruta+fabFive).then(respuesta3 => {
            return respuesta3.json();
}).then(json => {
    const url = json.data[18].images.downsized_medium.url;
    const title = json.data[18].title;
    resultados1HTML = `             
            <img
                class="imagen-sugeridos"
                src="${url}" 
                alt="${title}"
            >`;
    document.getElementsByTagName("div")[39].innerHTML = resultados1HTML;
}).catch(error => {
    console.error(error.message);
});

//hacemos Get de Guifo sugerido, Unicorns
fetch(ruta+unicorns).then(respuesta4 => {
            return respuesta4.json();
}).then(json => {
    const url = json.data[13].images.downsized_medium.url;
    const title = json.data[13].title;
    resultados1HTML = `             
            <img
                class="imagen-sugeridos"
                src="${url}" 
                alt="${title}"
            >`;
    document.getElementsByTagName("div")[44].innerHTML = resultados1HTML;
}).catch(error => {
    console.error(error.message);
});
                               


// --------------------------------------------------4---------------------------------------------------------
                            //Funcionalidad GUIFOS TENDENCIAS
                            // UTIIZAMOS ENDPOINT DE TENDENCIAS

const divInsertar = document.getElementsByTagName("div")[47];
const apikeyTen = 'dsuYjjUPEjD2uXAjeNzlsGO0OFmUrqQ5';
const limit = 24;
const offset = 5;
const rutatendencias = `https://api.giphy.com/v1/gifs/trending?api_key=${apikeyTen}&imit=${limit}&offset=${offset}`;


fetch(rutatendencias).then(respuesta => {
    return respuesta.json();
}).then(json => {
    let resultsHtml = '';

    json.data.forEach(objeto => {
        const urlImagen = objeto.images.downsized_medium.url;
        const titleImagen = objeto.title;
        const string = titleImagen.replace(/ /g, " #")
        const stringNumeral = "#" + string.slice(0, string.lenght);
        const stringFinal = stringNumeral.slice(0,30);
        
            resultsHtml += `
            <div class="divtendencias caja-gifs-resultados cajas-gifs-resultados__margin">
                <div class="marco-imagen ">
                </div>
                    <img
                        class="imagen-resutados"
                        src="${urlImagen}" 
                        alt="${titleImagen}"
                    >
                <div id="etiqueta" class="etiqueta-imagen">
                    <p class="pestaña-texto pestaña--texto__margin">${stringFinal}</p>
                </div>
                
            </div>`;
        
    });

    divInsertar.innerHTML = resultsHtml;


}).catch(error => {
        console.error(error.message);
    });


// --------------------------------------------------5---------------------------------------------------------
                                             //Vista MIS GUIFOS

function htmlToElements(html) {
    var template = document.createElement('template');
    html = html.trim(); //Quita todos los espacios en blanco
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
            misguifos.appendChild(htmlresult);
        });
    }

}

getMisGuifos();

                        //Vista MIS GUIFOS
   
   //Elementos vista mis guifos
    let misGuifos = document.getElementsByTagName("section")[3];
    misGuifos.style.display = "none";           
    let buscar = document.getElementsByTagName("section")[0];
    let sugeridos = document.getElementsByTagName("section")[1];
    let tendencias = document.getElementsByTagName("section")[2];
    let textoMsGuifos = document.querySelectorAll(".texto-mis-guifos")[0];
    
    console.log(document.getElementsByTagName("p")[2])
    document.getElementsByTagName("p")[2].onclick = function() {ocultarSugerimos()};

//Ocultammos section sugeridos y section buscar, traemos la vista de mis guifos.
function ocultarSugerimos () {
    sugeridos.style.display = "none";
    tendencias.style.display = "none";
    buscar.style.display = "none";  
    misGuifos.style.display = "flex";
    misGuifos.style.margin = "0px";
    textoMsGuifos.style.color = "#dbccdf"

    htmlToElements(html)
    getMisGuifos()  
}