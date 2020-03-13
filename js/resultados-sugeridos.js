document.getElementById("div-resultados").addEventListener("click", myFunction);
    
function myFunction() {
    document.getElementById("myDropdown-resultados").classList.toggle("mostrar-resultados");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
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
}

