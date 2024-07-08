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

    const perguntas = Array.from(event.currentTarget.children);
    perguntas.forEach(
        currentElement => toggleActiveClass(currentElement, clickedElement));
}

export { toggleAccordion };