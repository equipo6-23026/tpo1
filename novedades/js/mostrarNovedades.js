let tituloActual=0;
function novedadesController(movimiento,actual=tituloActual){
    masNuevos('../database.json',3).then(array => insertarTitulo(array,actual,movimiento))
    .then(e=>{
        tituloActual=e[0];
        let titulo = document.getElementById('titulo');
        let portada = document.getElementById('portada-highlight');
        let review = document.getElementById('review');

        titulo.innerHTML=`${e[1].titulo}`;
        portada.setAttribute("src",`${e[1].portada}`);
        review.innerHTML=``;
        for (usuario in e[1].reviews){
            console.log(`${usuario} : ${e[1].reviews[usuario]}`);
            review.innerHTML=`${review.innerHTML}<br><span class="username">${usuario}</span> : ${e[1].reviews[usuario]}`
        }
    })
}
window.addEventListener('load',novedadesController(movimiento=0))