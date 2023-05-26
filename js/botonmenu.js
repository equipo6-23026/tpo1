const boton = document.getElementById("boton-hamburguesa");
const contenedorEnlaces = document.getElementById("contenedor-enlaces");
const estaOculto = () => contenedorEnlaces.classList.contains("contenedor-enlaces--oculto");

contenedorEnlaces.addEventListener("transitionend", function() {
    if (estaOculto()) {
        contenedorEnlaces.style.display = "none";
    }
});

boton.addEventListener("click", function (){
    if(estaOculto()){
        contenedorEnlaces.style.removeProperty("display");
        setTimeout(() => contenedorEnlaces.classList.remove("contenedor-enlaces--oculto"), 0);
    } else {
        contenedorEnlaces.classList.add("contenedor-enlaces--oculto");
    }
});
for (let s of document.querySelectorAll("a.opcion-menu")){
    s.addEventListener("click", function() {
            if(estaOculto()){
                contenedorEnlaces.style.removeProperty("display");
                setTimeout(() => contenedorEnlaces.classList.remove("contenedor-enlaces--oculto"), 0);
            } else {
                contenedorEnlaces.classList.add("contenedor-enlaces--oculto");
            }
        });
    }



// function menuAbreCierra() {
//     let menu=document.getElementById("contenedor-enlaces");
//     if ((menu.style.display == "none") || (!menu.style.display)){
//         menu.style.display = "block";
//         menu.style.opacity = 1;
//     } else {
//         menu.style.display = "none";
//     }
// }


// for (var s of document.querySelectorAll("a.opcion-menu")){
//     s.addEventListener(
//         "click", function() {
//             document.getElementById("contenedor-enlaces").style.display = "none"}
//     );
// }


