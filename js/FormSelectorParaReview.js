/* LOGICA SWITCH FORMULARIOS ENTRE LOGIN/REVIEW */
let formReview = `
        
        <form action="" method="post" id="formReview">
        <label for="usuario">Tu usuario Sarasa</label>
            <div>
            <input
              type="text"
              name="usuario"
              placeholder="Usuario"
              id="usuario"
              required
            />
          </div>
            <br>
          <label for="basic-url">
            Tu perfil de Steam/PS/Xbox/Nintendo
          </label>
          <div>
            <span for="basic-url">
              http://steamcommunity.com/profiles/
            </span>
            <input
              type="text"
              id="basic-url"
              placeholder="12341234"
            />
          </div>
          <br>
          <label for="titulo">Titulo del Videojuego</label>
          <div>
            <input id="titulo" type="text">
          </div>
          <br>
          <label for="inputGroupFile02">
            Añadi tus capturas de pantalla
          </label>
          <div>
            <input type="file" id="inputGroupFile02" />
          </div>
          <br>

          <p>Plataformas: </p>
          <div>
            <input
              type="checkbox"
              id="plataform-opt1"
              value="option1"
              checked
            />
            <label for="plataform-opt1">Steam</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="plataform-opt2"
              value="option2"
            />
            <label for="plataform-opt2">Playstation</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="plataform-opt3"
              value="option3"
            />
            <label for="plataform-opt3">Xbox </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="plataform-opt4"
              value="option4"
            />
            <label for="plataform-opt4"
              >Nintendo
            </label>
          </div>
            <br>
          <div class="input-group">
            <p>Reseña</p>
            <textarea
              cols=40
              rows=10
              id="resena"
              required
            ></textarea>
          </div>
          <br>
          <button type="submit">Enviar</button>
          
          </form> 
          <p id="alerta"></p>
        
`
let loginError = `
<form onsubmit="../formReview.html" id="formLogin" method="post">
<div>
    <label for="usuario">Usuario:</label>
    <input type="text" name="usuario" id="usuario">
</div>
<div>
    <label for="contrasena">Contraseña:</label>
    <input type="password" name="contrasena" id="contrasena">
</div>
<button onclick=login()>Enviar</button>
</form>
`
let bool = new Boolean();


window.addEventListener('load', switchingForm());

function switchingForm(){
let log = new Boolean(sessionStorage.getItem('logueado'));
  if (log == true){
    document.getElementById('contenedor-review').innerHTML=formReview;
  } else{
    document.getElementById('contenedor-review').innerHTML=loginError;
  }
}
