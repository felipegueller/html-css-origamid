import { toggleAccordion } from './internal/commom-questions.js'
import { activeLink } from './internal/active-link.js'
import { checkBudgetInput } from './internal/budget.js'
import { toggleGalleryImage } from './internal/gallery.js'
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

gallery?.addEventListener("click", toggleGalleryImage)

// Importando e incializando o plugin SimpleAnime
window.SimpleAnime = SimpleAnime;
new SimpleAnime();

