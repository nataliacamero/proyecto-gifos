let anclaDay = document.getElementsByTagName("a")[4].onclick = function() {cambiarTemaDay()};
console.log(anclaDay);

let anclaNight = document.getElementsByTagName("a")[5].onclick = function() {cambiarTemaNight()};
console.log(anclaNight);


function cambiarTemaDay(){
    let link = document.getElementsByTagName("link")[0].setAttribute("href", "Koala/estilo-day.css");
}

function cambiarTemaNight(){
    let link = document.getElementsByTagName("link")[0].setAttribute("href", "Koala/estilo-night.css");
}