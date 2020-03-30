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
    // console.log(input);

let divLista = document.getElementById("myDropdown-resultados");
    // console.log(divLista);

let elementoLista = '';


// ponemos el innerText del resultado de busqueda en el input.
function textoAInput(e){    
    // console.log(e);
    document.getElementsByTagName("input")[0].value = e;
};





campoInput.addEventListener('input', function(){
    let value = input.value;
    // console.log(value); 
    




    
    // Limpiar divList
    while (divLista.firstChild) {
        divLista.removeChild(divLista.lastChild);
    }

    elementoLista = ''
    for (let i = 0;  i <= data.terminos.length-1; i++) {
        // console.log(data.terminos[i]);

        if(!value) {
            break;
        }
        
        if(data.terminos[i].term.substr(0, value.length) === value){
            // console.log(data.terminos[i].term);
            
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
        divLista.innerHTML = 'No hay resultados';


          
    }
    

});

