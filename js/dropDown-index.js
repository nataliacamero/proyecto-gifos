document.getElementById("divTema").addEventListener("click", myFunction1);

function myFunction1() {
    document.getElementById("myDropdown").classList.toggle("mostrar");
}



document.getElementById("div-resultados").addEventListener("click", myFunction2);
    
function myFunction2() {
    document.getElementById("myDropdown-resultados").classList.toggle("mostrar-resultados");

}





// Cierra el dropdown si el usuario hace click afuera de el
window.onclick = function(event) {
            //Traer los div de la busqeda por default.
    document.getElementsByTagName("div")[21].onclick = function () {textoAInput(this.innerText)};
    document.getElementsByTagName("div")[22].onclick = function () {textoAInput(this.innerText)};
    document.getElementsByTagName("div")[23].onclick = function () {textoAInput(this.innerText)};


    if (!event.target.matches('.resultados')) {
        var dropdowns = document.getElementsByClassName("dropdown-resultados-contenedor");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('mostrar-resultados')) {
            openDropdown.classList.remove('mostrar-resultados');
        }
        }
    }

    if (!event.target.matches('.tema')) {

        

        var dropdowns = document.getElementsByClassName("dropdown-contenedor");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('mostrar')) {
                openDropdown.classList.remove('mostrar');
            }
        }
        document.querySelectorAll(".boton_buscar")[0].style.background = "#F7C9F3";
        document.querySelectorAll(".boton_buscar")[0].style.backgroundImage = "url(../assets/lupa.svg)";
        document.querySelectorAll(".boton_buscar")[0].style.backgroundRepeat= "no-repeat";
        document.querySelectorAll(".boton_buscar")[0].style.backgroundPosition = "left 5px top 10px";
        document.querySelectorAll(".boton-texto--buscar")[0].style.color = "#110038";


    }
}

