
    document.getElementById("divTema").addEventListener("click", myFunction);
    
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("mostrar");
    }
    

    // Cierra el dropdown si el usuario esta fuera de las opciones
    window.onclick = function(event) {
        if (!event.target.matches('.tema')) {
            var dropdowns = document.getElementsByClassName("dropdown-contenedor");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('mostrar')) {
                    openDropdown.classList.remove('mostrar');
                }
            }
        }
    }
