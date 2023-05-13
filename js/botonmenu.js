function menuAbreCierra() {
    var menu=document.getElementById("contenedor-enlaces");
    if ((menu.style.display == "none") || (!menu.style.display)){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

