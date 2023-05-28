
const urlSearchParams = new URLSearchParams(window.location.search);
const reviewTitulo = urlSearchParams.get("titulo");
const reviews = sessionStorage.getItem(reviewTitulo);

let contenedor = document.getElementById('contenedor-review');
window.addEventListener('load',()=>{
    contenedor.innerHTML=`${reviewTitulo}: `
    const jsReviews = JSON.parse(reviews);
    for (let user of Object.keys(jsReviews)){
        let parrafo = document.createElement("p");
        parrafo.innerText=`${user}--> ${jsReviews[user]}`
        /* parrafo.className=`` USAR PARA DAR ESTILO */
        contenedor.appendChild(parrafo);
        /* console.log(jsReviews[user]); */
    }
})