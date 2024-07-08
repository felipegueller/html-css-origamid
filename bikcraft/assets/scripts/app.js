import { toggleAccordion } from './commom-questions.js'
import { activeLink } from './active-link.js'
import { checkBudgetInput } from './budget.js'

const perguntasContainer = document.querySelector('.perguntas-frequentes dl')
perguntasContainer?.addEventListener('click', toggleAccordion)

const menuLinks = document.querySelectorAll('nav .header-menu a')
activeLink(menuLinks)

const urlParams = new URLSearchParams(window.location.search);
urlParams.forEach(param => checkBudgetInput(param))
