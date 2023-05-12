function login(){
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    if ((usuario === 'vairo') && (contrasena === '1234') || 
    (usuario === 'cris') && (contrasena === '1234')){
        bool = true;
        sessionStorage.setItem('logueado',bool);
    } else {
        bool=false;
        sessionStorage.setItem('logueado',bool);
    }
}