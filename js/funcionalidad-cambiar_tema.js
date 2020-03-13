let anclaDay = document.getElementsByTagName("a")[4].onclick = function() {cambiarTemaDay()};
console.log(anclaDay);

let anclaNight = document.getElementsByTagName("a")[5].onclick = function() {cambiarTemaNight()};
console.log(anclaNight);


function cambiarTemaDay(){
    let link = document.getElementsByTagName("link")[0].setAttribute("href", "estilos/sailor-day.css");
    return sailor-day;
}

function cambiarTemaNight(){
    let link = document.getElementsByTagName("link")[0].setAttribute("href", "estilos/sailor-night.css");
    return sailor-night;
}