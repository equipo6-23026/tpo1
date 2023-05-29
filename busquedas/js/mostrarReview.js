
const urlSearchParams = new URLSearchParams(window.location.search);
const reviewTitulo = urlSearchParams.get("titulo");
const portada = urlSearchParams.get("portada");
const precio = parseFloat(urlSearchParams.get("precio"));
const reviews = sessionStorage.getItem(reviewTitulo);



let contenedor = document.getElementById('contenedor-review');
window.addEventListener('load',()=>{
    const dolarizado = consultaDolar().then((c)=>{
        let dolarizado = precio*parseFloat(c);
        contenedor.innerHTML=`<h2>${reviewTitulo} </h2>
        <img class="portada-highlight" src=${portada}>
        <h3>Precio en dolares: $${precio}</h3>
        <h3>Precio en pesos argentinos: $${dolarizado} (mas impuestos)</h3>
        <h3>Reviews:</h3>
        `
        let cajaReviews = document.createElement("div");
        cajaReviews.className='caja-reviews';
        const jsReviews = JSON.parse(reviews);
        for (let user of Object.keys(jsReviews)){
            let parrafo = document.createElement("p");
            parrafo.innerText=`${user}--> ${jsReviews[user]}`
            parrafo.className=`review`
            cajaReviews.appendChild(parrafo);
            }
        contenedor.appendChild(cajaReviews);
        });
});