var boton = document.getElementById("boton-hamburguesa");
var contenedorEnlaces = document.getElementById("contenedor-enlaces");


boton.addEventListener("click", function (){
    if (contenedorEnlaces.classList.contains("contenedor-enlaces--oculto")){
        contenedorEnlaces.classList.remove("contenedor-enlaces--oculto");
        setTimeout(function(){
            contenedorEnlaces.classList.remove("contenedor-enlaces--visualmenteoculto");
        }, 20);
    } else {
        contenedorEnlaces.classList.add('contenedor-enlaces--visualmenteoculto');
        contenedorEnlaces.addEventListener('transitionend', function(e) {
            contenedorEnlaces.classList.add("contenedor-enlaces--oculto");
        }, {
            capture: false,
            once: true,
            passive: false
        });
    }
}, false);


for (let s of document.querySelectorAll("a.opcion-menu")){
    s.addEventListener("click", function (){
        if (!contenedorEnlaces.classList.contains("contenedor-enlaces--oculto")){
            contenedorEnlaces.classList.add('contenedor-enlaces--visualmenteoculto');
            contenedorEnlaces.addEventListener('transitionend', 
                function(e) {contenedorEnlaces.classList.add("contenedor-enlaces--oculto");
                }, {capture: false, once: true, passive: false
                    }
            );
        }
    }, false);
}
