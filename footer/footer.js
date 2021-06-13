function footerComponent(el) {
  const footerEl = document.createElement("div");
  footerEl.innerHTML = `<footer class="redes">
    <h2 class="redes__title section__title">Julian</h2>
    <div class="redes__links">
        <div class="links">
            <a class="all-links" href="">Instagram</a>
            <img class="redes__logo" src="./images/instagram.svg" alt="">
        </div>
        <div class="links">
            <a class="all-links" href="">Github</a>
            <img class="redes__logo" src="./images/github.svg" alt="">
        </div>
        <div class="links">
            <a class="all-links" href="">Linkedin</a>
            <img class="redes__logo"  src="./images/linkedin.svg" alt="">
        </div>
    </div>

</footer>`;
  el.appendChild(footerEl);
}
