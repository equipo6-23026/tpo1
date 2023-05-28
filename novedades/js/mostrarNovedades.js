let tituloActual=0;
function novedadesController(movimiento,actual=tituloActual){
    masNuevos('../database.json',3).then(array => insertarTitulo(array,actual,movimiento))
    .then(e=>{
        tituloActual=e[0];
        let titulo = document.getElementById('titulo');
        let portada = document.getElementById('portada-highlight');
/*         console.log(e); */
        titulo.innerHTML=`${e[1].titulo}`;
        
        /* ACA SE RELLENA NOVEDADES, FALTAN IMAGENES DE JUEGOS PARA EDITAR SRC
        DE PORTADA */
    })
}
window.addEventListener('load',novedadesController(movimiento=0))