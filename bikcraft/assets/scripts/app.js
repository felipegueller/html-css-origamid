import { toggleAccordion } from './commom-questions.js';
import { activeLink } from './active-link.js';

const perguntasContainer = document.querySelector('.perguntas-frequentes dl');
perguntasContainer?.addEventListener('click', toggleAccordion);

const menuLinks = document.querySelectorAll('nav .header-menu a');
activeLink(menuLinks);