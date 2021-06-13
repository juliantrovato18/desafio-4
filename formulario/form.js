function formComponent(el) {
  const formEl = document.createElement("div");
  formEl.innerHTML = `<section class="form">
    <h3 class="form__title">Contacto</h3>
    <form class="formulario">
        <div class="fieldset">
        <label class="label">
            <h4 class="label__ti">ESCRIBIME</h4>
        </label>
        <input id="nombre" type="text">
    </div>
    <div class="fieldset">
        <label class="label">
            <h4 class="label__ti">EMAIL</h4>
        </label>
        <input id="email" type="text">
    </div>
    <div class="fieldset">
        <label class="label">
            <h4 class="label__ti">MENSAJE</h4>
        </label>
            <textarea id="textarea" >

            </textarea>
        </div>
        <div class="container__button">
            <button class="form__button">Enviar</button>
        </div>
    </form>
</section>`;
  el.appendChild(formEl);

  
}

function contacto(){
    const form = document.querySelector(".formulario")
    form.addEventListener("submit",(res)=>{
        
        res.preventDefault();
        let targ = res.target;
        let nombre = targ.nombre.value;
        let email = targ.email.value;
        let textarea = targ.textarea.value;
        console.log(nombre,email,textarea);
        let mensaje = `nombre: ${nombre} 
        email: ${email}
        mensaje:${textarea}`
        postData("https://apx-api.vercel.app/api/utils/dwf",{

            "to":"julian.trovato@hotmail.com",
       
            "message": mensaje
            
       
       })
        

    });

}

// Ejemplo implementando el metodo POST:
async function postData(url = '', data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }