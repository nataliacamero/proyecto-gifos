let arreglo = ['perro bonito','perro durmiendo','perro bailando','gato enojado','gato feliz','gato dueño','pez dorado','pez nadando','pez nemo','paloma blanca','paloma volando','paloma ','conejo blanco','conejo y tortuga','conejo alicia','caballo','caballo salvaje','caballo corriendo','culebra cobra','culebra desierto','culebra piedra','cangrejo rojo','cangrejo arcoiris','cangrejo bob','cangrejo mar','Jonathan vanness dancing','Jonathan vanness singing','Jonathan vanness sleep'];
    // console.log(arreglo);



let campoInput = document.getElementsByTagName("input")[0];
    // console.log(input);

let divLista = document.getElementById("myDropdown-resultados");
    // console.log(divLista);

let elementoLista = '';
    
campoInput.addEventListener('input', function(){
    let value = input.value;
    // console.log(value);        
    
   // Limpiar divList
   while (divLista.firstChild) {
    divLista.removeChild(divLista.lastChild);
  }

    let contador = 4;
    elementoLista = ''
    arreglo.forEach(item => {

        if(!value) {
            return false
        }
        
        if(item.substr(0, value.length) === value){
            console.log(item.substr(0, value.length))
            elementoLista += `
            <div class=" boton-general boton--grande boton-blanco boton-buscar-largo-buscar-resultados align-center">
                <a class="boton-texto boton-texto-blanco boton-texto-largo-buscar-resultados marco-boton-dotted boton-texto-margenes" href="#">
                    ${item.substr(0, value.length)}${item.substr(value.length)}
                </a>
            </div>
            `;
            
               
            contador--;
            console.log(contador);
            if (contador <= 0) {return false};

            
            
        };  
      
        
        divLista.innerHTML = elementoLista;

        
    });

});