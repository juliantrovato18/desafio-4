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
async function postData(url = '', data = {}) {
    
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
        
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) 
    });
    return response.json(); 
  }



function contacto(){
    const form = document.querySelector(".formulario")
    form.addEventListener("submit",(res)=>{
        res.preventDefault();
        let objetoForm = res.target;
        let nombre = objetoForm.nombre.value;
        let email = objetoForm.email.value;
        let textarea = objetoForm.textarea.value;
        
        let mensaje = `nombre: ${nombre} 
        email: ${email}
        mensaje:${textarea}`
        
        let datos = {
            "to":"julian.trovato@hotmail.com",
            "message": mensaje
        }
        postData("https://apx-api.vercel.app/api/utils/dwf", datos).then(data =>{
            console.log(data);
        })
        

    });

}


