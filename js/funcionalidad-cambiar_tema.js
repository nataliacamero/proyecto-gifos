let anclaDay = document.getElementsByTagName("a")[4].onclick = function() {cambiarTema("day")};
console.log(anclaDay);

let anclaNight = document.getElementsByTagName("a")[5].onclick = function() {cambiarTema("night")};
console.log(anclaNight);


function cambiarTema(theme){
    if(!sessionStorage.getItem("tema") || theme === "day") {
        sessionStorage.setItem("tema","estilos/sailor-day.css");
    } else {
        sessionStorage.setItem("tema","estilos/sailor-night.css");
    }
    document.getElementsByTagName("link")[0].setAttribute("href", sessionStorage.getItem("tema"));
    
}

function setTema() {
    if(!sessionStorage.getItem("tema")) {
        sessionStorage.setItem("tema","estilos/sailor-day.css");
    }
    document.getElementsByTagName("link")[0].setAttribute("href", sessionStorage.getItem("tema"));
}

setTema();









//let anclaDay = document.getElementsByTagName("a")[4].onclick = function() {cambiarTemaDay()};
//console.log(anclaDay);
//
//let anclaNight = document.getElementsByTagName("a")[5].onclick = function() {cambiarTemaNight()};
//console.log(anclaNight);
//
//
//function cambiarTemaDay(){
//    let link = document.getElementsByTagName("link")[0].setAttribute("href", "estilos/sailor-day.css");
//    return sailor-day;
//}
//
//function cambiarTemaNight(){
//    let link = document.getElementsByTagName("link")[0].setAttribute("href", "estilos/sailor-night.css");
//    return sailor-night;
//}
//
//cambiarTema();