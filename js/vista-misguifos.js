
    let btnMisguifos = document.getElementsByTagName("p")[0].onclick = function() {ocultarSugerimos()};
    let section = document.getElementById("sugeridos");
    let tendencias = document.getElementById("tendencias");
    console.log(btnMisguifos);

    function ocultarSugerimos () {
        section.style.display = "none";
        tendencias.style.display = "none";
        htmlToElements(html)
        getMisGuifos()
        
    }
 