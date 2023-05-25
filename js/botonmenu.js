function menuAbreCierra() {
    let menu=document.getElementById("contenedor-enlaces");
    if ((menu.style.display == "none") || (!menu.style.display)){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

for (var s of document.querySelectorAll("a.opcion-menu")){
    s.addEventListener(
        "click", function() {
            document.getElementById("contenedor-enlaces").style.display = "none"}
    );
}

