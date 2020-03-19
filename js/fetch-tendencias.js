const divInsertar = document.getElementsByTagName("div")[47];
const apikeyTen = 'dsuYjjUPEjD2uXAjeNzlsGO0OFmUrqQ5';
const limit = 24;
const offset = 5;
const rutatendencias = `https://api.giphy.com/v1/gifs/trending?api_key=${apikeyTen}&imit=${limit}&offset=${offset}`;


fetch(rutatendencias).then(respuesta => {
    return respuesta.json();
}).then(json => {
        // console.log(json.data[0].images.downsized_medium.url);
        
        let resultsHtml = '';

        json.data.forEach(objeto => {
            // console.log(objeto);

            const urlImagen = objeto.images.downsized_medium.url;
            const titleImagen = objeto.title;
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
                    <p class="pestaña-texto pestaña--texto__margin">${titleImagen}</p>
                </div>
                
            </div>
  
  
        `;
    });

    divInsertar.innerHTML = resultsHtml;


}).catch(error => {
        console.error(error.message);
    });