const perguntasContainer = document.querySelector('.perguntas-frequentes dl');
const perguntas = Array.from(perguntasContainer.children);

const toggleAccordion = event => {
    let clickedElement = event.target;
    const childrenElements = ["DT", "DD"];

    if (childrenElements.includes(clickedElement.tagName))
        clickedElement = clickedElement.parentElement;

    perguntas.forEach(perguntaElement => {
        if (perguntaElement !== clickedElement) {
            perguntaElement.classList.remove('ativo');
        } else {
            perguntaElement.classList.toggle('ativo');
        }
    });
}

perguntasContainer.addEventListener('click', toggleAccordion)