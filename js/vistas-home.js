   
   
   
   //Elementos vista mis guifos
    let misGuifos = document.getElementsByTagName("section")[3];
    misGuifos.style.display = "none";           
    let buscar = document.getElementsByTagName("section")[0];
    let sugeridos = document.getElementsByTagName("section")[1];
    let tendencias = document.getElementsByTagName("section")[2];
    let article = document.getElementsByTagName("article")[0];
  
    let textoMsGuifos = document.querySelectorAll(".texto-mis-guifos")[0];
    
    

    
    document.getElementsByTagName("p")[2].onclick = function() {ocultarSugerimos()};

    
   //Ocultammos section sugeridos y section buscar, traemos la vista de mis guifos.
    function ocultarSugerimos () {
        sugeridos.style.display = "none";
        tendencias.style.display = "none";
        buscar.style.display = "none";
        article.style.display = "none";
        misGuifos.style.display = "flex";
        misGuifos.style.margin = "0px";
        textoMsGuifos.style.color = "#dbccdf"

        htmlToElements(html)
        getMisGuifos()
    }
 