//Transicion entre paginas
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.backgroundColor = "#000";
        document.querySelector("#loader").style.visibility = "visible";
        console.log('sitio web cargando...');
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector(".menu-responsive").style.visibility = "visible";
        document.querySelector("#id_start").style.visibility = "visible";
        console.log('¡Todo listo!');
    }
};