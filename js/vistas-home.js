   //Elementos vista mis guifos
    let misGuifos = document.getElementsByTagName("section")[3];
    misGuifos.style.display = "none";           
    let buscar = document.getElementsByTagName("section")[0];
    let sugeridos = document.getElementsByTagName("section")[1];
    let tendencias = document.getElementsByTagName("section")[2];
    let article = document.getElementsByTagName("article")[0];
    
    

    
    document.getElementsByTagName("p")[0].onclick = function() {ocultarSugerimos()};

    
   //Ocultammos section sugeridos y section buscar, traemos la vista de mis guifos.
    function ocultarSugerimos () {
        sugeridos.style.display = "none";
        tendencias.style.display = "none";
        buscar.style.display = "none";
        article.style.display = "none";
        misGuifos.style.display = "flex";
        misGuifos.style.margin = "0px";
        htmlToElements(html)
        getMisGuifos()
        
    }
 