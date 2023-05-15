/* LOGICA SWITCH FORMULARIOS ENTRE LOGIN/REVIEW */
let formReview = `
        <label for="username">Tu usuario Sarasa</label>
          <div class="form-review-item">
            <input
              type="text"
              name="usuario"
              id="username"
              disabled
              value=`+sessionStorage.getItem('userName')+`
            />
          </div>
          <br>
          <label for="basic-url">
            Tu perfil de Steam/PS/Xbox/Nintendo
          </label>
          <div class="form-review-item">
            <span for="basic-url">
              http://steamcommunity.com/profiles/
            </span>
            <input
              type="text"
              id="basic-url"
              placeholder="12341234"
              required
            />
          </div>
          <br>
          <label for="titulo">Titulo del Videojuego</label>
          <div class="form-review-item">
            <input id="titulo" type="text" required>
          </div>
          <br>
          <label for="inputGroupFile02">
            Añadi tus capturas de pantalla
          </label>
          <div class="form-review-item">
            <input type="file" id="inputGroupFile02" />
          </div>
          <br>

          <div class="form-review-item">
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
          </div>
            <br>
          <div class="form-review-item">
            <p>Reseña</p>
            <textarea
              cols=40
              rows=10
              id="resena"
            ></textarea>
          </div>
          <br>
          <button type="submit">Enviar</button>
`
let loginError = `
<div class="form-login-item">
    <label for="usuario">Usuario:</label>
    <input type="text" name="usuario" id="usuario" required>
</div>

<div class="form-login-item">
    <label for="contrasena">Contraseña:</label>
    <input type="password" name="contrasena" id="contrasena" required>
</div>
<button onclick=login()>Enviar</button>
`
let log = false;
let bool = false;
function switchingForm(){
  let principal = document.getElementById("formReview");
  principal.innerHTML="";
  log = sessionStorage.getItem('logueado');
    if (log === 'true'){
      principal.innerHTML=formReview;
      validando();
     } else{
      principal.innerHTML=loginError;
    }
  }
window.addEventListener("load", switchingForm());

