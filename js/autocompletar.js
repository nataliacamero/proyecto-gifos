let data = {
    terminos: [
        {
            term: "perro", 
            rel: "mascota",
            otro: "perro bonito"
        },

        {
            term: "gato", 
            rel:  "mascota",
            otro: "felino"

        }
    ]
};


let campoInput = document.getElementsByTagName("input")[0];
    // console.log(input);

let divLista = document.getElementById("myDropdown-resultados");
    // console.log(divLista);

let elementoLista = '';



function historialBusqueda(){
    if (campoInput.value) {
        //insertar en arreglo
        //Insertar en localStorage
        //Pintarlo en home:
            //Como?
            //cree un div padre
            //cree div hijo con su estilo
            // por medio de un for rrecorra el arreglo
            // por cada item del arreglo pinte la caja y agreguela al padre
            //maximo hasta 10 botones
            // haga cola://crear
                         //Encolar push
                         //Desencolar pop
                         // Frente

        
    }
}


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

