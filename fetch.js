<script>


// console.log(document.getElementsByTagName("div"));

const busquedaForm = document.getElementsByTagName("form")[0];
const input = document.getElementsByTagName("input")[0];

const divResultados = document.getElementsByTagName("div")[1];//aqui vienen los reusltados



busquedaForm.addEventListener('submit',event => {
    event.preventDefault();
    const q = input.value;
    search(q);


});

function search(q) {

    const apikey = 'dsuYjjUPEjD2uXAjeNzlsGO0OFmUrqQ5';
    const ruta = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`;
    

    fetch(ruta).then(respuesta => {
        return respuesta.json();
    })
    .then(json => { 
        console.log(json.data[0].images.fixed_width.url);
        
        // let resultadosHTML = ''; 
/*         
        
        json.data.forEach(objeto => {
            // console.log(objeto);

            const url = objeto.images.fixed_width.url;
            const width = objeto.images.fixed_width.width;
            const height = objeto.images.fixed_width.height;
            const title = objeto.title
            resultadosHTML += `<img
                class="item" 
                src="${url}" 
                width="${width}" 
                height="${height}"
                alt="${title}"
                >`;
                
        });

        divResultados.innerHTML = resultadosHTML; */


    }).catch(error => {
        console.error(error.message);
    });
}

</script>