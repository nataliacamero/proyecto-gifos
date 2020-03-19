  

    const apikey = 'api_key=dsuYjjUPEjD2uXAjeNzlsGO0OFmUrqQ5';
    const url = `https://api.giphy.com/v1/gifs/search?`;

    const jonathan = "&q=Jonathan%20%vanness";
    const sailor = "&q=sailor%20%mercury";
    const fabFive = "&q=fab%20%five";
    const unicorns = "&q=unicorns%20%&%20%rainbows";
    const ruta = url+apikey
   

    fetch(ruta+jonathan).then(respuesta => {
        return respuesta.json();
    }).then(json => {
        console.log(json.data[13].images.fixed_width.url);
            
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

    
    
    fetch(ruta+sailor).then(respuesta2 => {
        return respuesta2.json();
    }).then(json => {
                // console.log(json.data);
                    
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



    console.log(ruta+fabFive);

    fetch(ruta+fabFive).then(respuesta3 => {
                return respuesta3.json();
    }).then(json => {
            console.log(json.data);
        
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




    fetch(ruta+unicorns).then(respuesta4 => {
                return respuesta4.json();
    }).then(json => {
            console.log(json.data);
        
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
       