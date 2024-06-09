const perguntasContainer = document.querySelector('.perguntas-frequentes dl');
const perguntas = Array.from(perguntasContainer.children);

const toggleActiveClass = (currentElement, clickedElement) => {
    if (currentElement === clickedElement)
        return currentElement.classList.toggle('ativo');

    currentElement.classList.remove('ativo');
}

const toggleAccordion = event => {
    let clickedElement = event.target;
    const childrenElements = ["DT", "DD"];

    if (childrenElements.includes(clickedElement.tagName))
        clickedElement = clickedElement.parentElement;

    perguntas.forEach(
        currentElement => toggleActiveClass(currentElement, clickedElement));
}

perguntasContainer.addEventListener('click', toggleAccordion)