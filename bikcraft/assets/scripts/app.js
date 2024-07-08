import { toggleAccordion } from './internal/commom-questions.js'
import { activeLink } from './internal/active-link.js'
import { checkBudgetInput } from './internal/budget.js'
import { SimpleAnime } from './plugins/simple-anime.js'

// Alternar as perguntas frequentes
const perguntas = document.querySelector('.perguntas-frequentes dl')
perguntas?.addEventListener('click', toggleAccordion)

// Ativar os menus de navegação
const menuLinks = document.querySelectorAll('nav .header-menu a')
activeLink(menuLinks)

// Selecionar o produto para o orçamento
const urlParams = new URLSearchParams(window.location.search);
urlParams.forEach(param => checkBudgetInput(param))

const gallery = document.querySelector(".bicicleta-imagens")

gallery?.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const gallery = event.currentTarget;
    const invalidOperation = clickedElement.tagName !== "IMG" ||
        gallery.children[0] === clickedElement ||
        window.matchMedia("(max-width: 1000px)").matches;

    if (invalidOperation) return;

    const img = document.createElement("img");
    img.src = clickedElement.src;
    img.alt = clickedElement.alt;
    gallery.insertAdjacentElement("afterbegin", img);

    clickedElement.remove();
})

// Importando o plugin SimpleAnime
window.SimpleAnime = SimpleAnime;
const simpleAnime = new SimpleAnime();
console.log(simpleAnime)

