console.log("hola");

/* const btnBuscar = document.getElementsByTagName("a")[7];
console.log("hola"+btnBuscar);

const input = document.getElementsByTagName("input")[0];

const divResultados = document.getElementsByTagName("div")[47];



btnBuscar.addEventListener('click', event => {
    event.preventDefault();
    const q = input.value;
    search(q);
   

    
    


})


function search(q) {
   
    

    const apikey = 'dsuYjjUPEjD2uXAjeNzlsGO0OFmUrqQ5';
    const ruta = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`;
    


    fetch(ruta).then(respuesta => {
        return respuesta.json();
    })
        .then(json => {
           
            console.log(json.data[0].images.fixed_width.url);

            let resultadosHTML = '';


            json.data.forEach(objeto => {
                console.log(objeto);

                const url = objeto.images.fixed_width.url;
                const title = objeto.title;
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
                        <p class="pestaña-texto pestaña--texto__margin">${title}</p>
                    </div>
                    
                </div>
      
      
            `;

            });

            divResultados.innerHTML = resultadosHTML;
         



        }).catch(error => {
            console.error(error.message);
        });

       



 
}


 */