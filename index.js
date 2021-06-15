function addWorkCard(params = {}) {
  const template = document.querySelector("#cards-template");
  const container = document.querySelector(".services");
  template.content.querySelector(".services__subtitle").textContent =
    params.title;
  template.content.querySelector(".services__parrafo").textContent =
    params.description;
  template.content.querySelector(".services__logo").src = params.image;
  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getServices() {
  return fetch(
    "https://cdn.contentful.com/spaces/yyhq41s3erjd/environments/master/entries?access_token=rWy961fmmcNo02pnC14J3ZDeiR-gaZmDgNxLzJbFAbc&content_type=services"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const fieldsCollection = data.items.map((item) => {
        let link = "";
        data.includes.Asset.filter((res)=>{
          
          if(res.sys.id == item.fields.imagen.sys.id){
            
              link = res.fields.file.url
          }

        })
        return {
          title: item.fields.titulo,
          description: item.fields.descripcion.content[0].content[0].value,
          image: link,
        };
      });
      return fieldsCollection;
    });
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

function main() {
  getServices().then(function (services) {
    for (const s of services) {
      addWorkCard(s);
      
    }
  });

  console.log(document.querySelector(".portfolio__header"));
  headerComponent(document.querySelector(".index__header"));
  formComponent(document.querySelector(".form"));
  footerComponent(document.querySelector(".index__redes"))
  abreVentana();
  
  
  
}

main();
