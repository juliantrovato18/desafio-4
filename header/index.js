function headerComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `<header class="header">
  <h2 class="nombre">Julian</h2>
  <div class="contiene__links2">
      <a class="header__links2" href="http://127.0.0.1:8080/portfolio/portfolio.html">portfolio</a>
      <a class="header__links2" href="http://127.0.0.1:8080/index.html">servicios</a>
      <a class="header__links2" href="http://127.0.0.1:8080/contacto/contact.html">contacto</a>
  </div>
  <button class="abre-ventana">abrir menu</button>
  <div class="ventana">
      <button class="cerrar-ventana">X</button>
      <div class="contiene__links">
          <a class="header__links" href="http://127.0.0.1:8080/portfolio/portfolio.html">portfolio</a>
          <a class="header__links" href="http://127.0.0.1:8080/index.html">servicios</a>
          <a class="header__links" href="http://127.0.0.1:8080/contacto/contact.html">contacto</a>
      </div>
  </div>

</header>
`;

  el.appendChild(componentEl);
 
 
}

function abreVentana(){
  const abreVentanaEl = document.querySelector(".abre-ventana");
  const ventanaEl = document.querySelector(".ventana");
  const cerrarVentanaEl = document.querySelector(".cerrar-ventana");
  abreVentanaEl.addEventListener("click", (e)=>{
      ventanaEl.style.display = "inherit";
  });
      cerrarVentanaEl.addEventListener("click", (e)=>{
      ventanaEl.style.display = "";
  })
}