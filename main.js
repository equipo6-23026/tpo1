function menu_burger(){
    let menu = document.getElementById('enlaces-cabecera');

    menu.style.visibility = 'visible';
    menu.style.opacity = 1;
}

function salir(){
    let menu = document.getElementById('enlaces-cabecera');

    menu.style.visibility = 'hidden';
    menu.style.opacity = 0;
}