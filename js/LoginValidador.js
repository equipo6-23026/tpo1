function login(){
    sessionStorage.removeItem('logueado');
    sessionStorage.removeItem('userName');
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    if ((usuario === 'vairo') && (contrasena === '1234') || 
    (usuario === 'cris') && (contrasena === '1234')){
        sessionStorage.setItem('logueado',true);
        sessionStorage.setItem('userName',usuario)
    } else {
        sessionStorage.setItem('logueado',false);
        document.getElementById('warning').innerHTML=`Error: Usuario/Contraseña incorrectos`;
    }

}