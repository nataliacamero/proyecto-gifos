
const btnBuscar = document.getElementsByTagName("a")[7];
const input = document.getElementsByTagName("input")[0];
const divResultados = document.getElementsByTagName("div")[47];

    function cerrarX() {
       
        let btnCerrarJonathan = document.getElementsByTagName("img")[3].onclick = function () {resetBusquedaSugeridos()};
        let btnCerrarSailor = document.getElementsByTagName("img")[4].onclick = function () {resetBusquedaSugeridos()};
        let btnCerrarFab = document.getElementsByTagName("img")[5].onclick = function () {resetBusquedaSugeridos()};
        let btnCerrarUnicorns = document.getElementsByTagName("img")[6].onclick = function () {resetBusquedaSugeridos()};

        function resetBusquedaSugeridos() {
            location.reload();
        }
    };

    cerrarX();

    function botonVermas() {
        //Traemos todos los botones ver mas
        
        let btnJonathan = document.getElementsByTagName("a")[11].onclick = function() {enviarTag("jonathan")};
        let btnSailor = document.getElementsByTagName("a")[12].onclick = function() {enviarTag("sailor")};
        let btnFab = document.getElementsByTagName("a")[13].onclick = function() {enviarTag("fab")};
        let btnUnicorns = document.getElementsByTagName("a")[14].onclick = function() {enviarTag("unicorns")};


        //Cada boton ver mas, envia su innerText a la busqueda   
        function enviarTag(boton) {

            if (boton === "jonathan") {
                   
                let textoJonathan = document.getElementsByTagName("h2")[0].innerText;
                
                //separo palabras
                let jonathan = textoJonathan.slice(1,9);
                let vanness = textoJonathan.slice(9,textoJonathan.length);
                
                enviarJonathan = jonathan + " " + vanness;
                textoJonathan.slice(1, textoJonathan.length);
                input.value = enviarJonathan;
                search(enviarJonathan);
                let textoTendencias = document.getElementsByTagName("h1")[3].innerText = enviarJonathan;
                window.scrollTo(0, 700);

            }   else if (boton === "sailor") {
              
                    
                    let textoSailor = document.getElementsByTagName("h2")[1].innerText;
                       
                    //Separo palabras
                    let sailor =  textoSailor.slice(1,7);
                    let mercury = textoSailor.slice(7,textoSailor.length);
                    enviarSailor = sailor + " " + mercury; 
                    input.value = enviarSailor;
                    search(enviarSailor);
                    let textoTendencias = document.getElementsByTagName("h1")[3].innerText = enviarSailor;
                      
                    window.scrollTo(0, 700);

                }   else if (boton === "fab") {
                        //Separo palabras
                        let textoFab = document.getElementsByTagName("h2")[2].innerText;
                        let fab = textoFab.slice(1,4);
                        let five = textoFab.slice(4,textoFab.length);
                        enviarFab = fab + " " + five;
                        input.value = enviarFab;
                        search(enviarFab);
                        let textoTendencias = document.getElementsByTagName("h1")[3].innerText = enviarFab;
                           
                        window.scrollTo(0, 700);

                    }   else if (boton === "unicorns") {
                            //Separo palabras
                            let textoUnicorns = document.getElementsByTagName("h2")[3].innerText;
                            let unicorns = textoUnicorns.slice(1,9);
                            let y = textoUnicorns.slice(9,10);
                            let rainbows = textoUnicorns.slice(10, textoUnicorns.length);
                            enviarUnicorns = unicorns + " " + y + " " + rainbows;
                            input.value = enviarUnicorns;
                            search(enviarUnicorns);
                            let textoTendencias = document.getElementsByTagName("h1")[3].innerText = enviarUnicorns;
                                console.log(textoTendencias);
                            window.scrollTo(0, 700);
    
                        }    
            };

    };

    botonVermas();



btnBuscar.addEventListener('click', event => {
    event.preventDefault();
    const q = input.value;
    console.log(q);
    search(q);
    let tendencias = document.getElementsByTagName("h1")[3].innerText = q;
    console.log(tendencias);
})

function search(q) {

    const apikey = 'dsuYjjUPEjD2uXAjeNzlsGO0OFmUrqQ5';
    const ruta = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`;
     


    fetch(ruta).then(respuesta => {
        return respuesta.json();
    })
        .then(json => {
            // console.log(json.data[0].images.downsized_medium.url);

            let resultadosHTML = '';


            json.data.forEach(objeto => {
                // console.log(objeto);

                const url = objeto.images.downsized_medium.url;
                const title = objeto.title;
                const stringBuscar = title.replace(/ /g, " #")
                const stringNumeralBuscar = "#" + stringBuscar.slice(0, stringBuscar.lenght);
                const stringFinalBuscar = stringNumeralBuscar.slice(0,30);
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

