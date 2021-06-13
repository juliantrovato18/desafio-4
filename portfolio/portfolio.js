function addCard(params = {}) {
  console.log(params, "soyparams");
  const templateCards = document.querySelector("#template__portfolio");
  const containerCards = document.querySelector(".portfolio__card__cont");
   templateCards.content.querySelector(".card__img").src = params.image;
  templateCards.content.querySelector(".card__title").textContent =
    params.title;
  templateCards.content.querySelector(".card__parrafo").textContent =
    params.parrafo;
  templateCards.content.querySelector(".card__link").url = params.url;
  const clonar = document.importNode(templateCards.content, true);
  containerCards.appendChild(clonar);
}
function getCards(){
  return fetch("https://cdn.contentful.com/spaces/yyhq41s3erjd/environments/master/entries?access_token=rWy961fmmcNo02pnC14J3ZDeiR-gaZmDgNxLzJbFAbc&content_type=cardsPort")
  .then((res)=>{
    return res.json();

  })
  .then((data)=>{
    console.log(data);
    const collection = data.items.map((item)=>{
      let url = "";
      data.includes.Asset.filter((res)=>{
        if(res.sys.id == item.fields.imagen.sys.id){
          url = res.fields.file.url
        }
      
      })
      return {
        image:url,
        title:item.fields.titulo,
        parrafo:item.fields.parrafo,
        link:item.fields.link
      }

    })
    return collection;

  })
}

function main() {
  headerComponent(document.querySelector(".portfolio__header"));
  footerComponent(document.querySelector(".footer__cont"));
  getCards().then(function (cards) {
    for (const c of cards) {
      addCard(c);
      
    }
  });
}
main();
