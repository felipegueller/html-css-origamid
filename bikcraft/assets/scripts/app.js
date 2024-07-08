import { toggleAccordion } from './commom-questions.js';

const perguntasContainer = document.querySelector('.perguntas-frequentes dl');
perguntasContainer?.addEventListener('click', toggleAccordion)