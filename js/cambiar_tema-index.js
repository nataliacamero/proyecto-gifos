let anclaDay = document.getElementsByTagName("a")[4].onclick = function() {cambiarTema("day")};


let anclaNight = document.getElementsByTagName("a")[5].onclick = function() {cambiarTema("night")};



function cambiarTema(theme){
    if(!sessionStorage.getItem("tema") || theme === "day") {
        sessionStorage.setItem("tema","estilos/sailor-day.css");
        document.getElementsByTagName("img")[0].setAttribute("src", "./assets/gifOF_logo.png" );
    } else {
        sessionStorage.setItem("tema","estilos/sailor-night.css");
        document.getElementsByTagName("img")[0].setAttribute("src", "./assets/gifOF_logo_dark.png" );
    }
    let link = document.getElementsByTagName("link")[0].setAttribute("href", sessionStorage.getItem("tema"));
    
    
}


function setTema() {
    if (!sessionStorage.getItem("tema")) {
        sessionStorage.setItem("tema", "estilos/sailor-day.css");
    }
    document.getElementsByTagName("link")[0].setAttribute("href", sessionStorage.getItem("tema"));
}
setTema();

