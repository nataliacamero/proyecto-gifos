

    // let anclaDay = document.getElementsByTagName("a")[4].onclick = function() {cambiarTema("day")};

        // let anclaNight = document.getElementsByTagName("a")[5].onclick = function() {cambiarTema("night")};


        // let likCrerGuifo = document.getElementsByTagName("a")[1].onclick = function() {setTema()};



    function cambiarTema(theme){
        console.log(!sessionStorage.getItem("tema"));
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
        
        if(sessionStorage.getItem("tema") === "estilos/sailor-day.css"){
            document.getElementsByTagName("img")[0].setAttribute("src", "./assets/gifOF_logo.png" );
        } else {
            document.getElementsByTagName("img")[0].setAttribute("src", "./assets/gifOF_logo_dark.png" );
        }  
        document.getElementsByTagName("link")[0].setAttribute("href", sessionStorage.getItem("tema"));
    }
    setTema();

