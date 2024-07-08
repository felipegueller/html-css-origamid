import { toggleAccordion } from './commom-questions.js'
import { activeLink } from './active-link.js'
import { checkBudgetInput } from './budget.js'

// Alternar as perguntas frequentes
const perguntas = document.querySelector('.perguntas-frequentes dl')
perguntas.addEventListener('click', toggleAccordion)

// Ativar os menus de navegação
const menuLinks = document.querySelectorAll('nav .header-menu a')
activeLink(menuLinks)

// Selecionar o produto para o orçamento
const urlParams = new URLSearchParams(window.location.search);
urlParams.forEach(param => checkBudgetInput(param))
