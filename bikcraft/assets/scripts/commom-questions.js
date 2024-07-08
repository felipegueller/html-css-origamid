const toggleAccordion = event => {
    const clickedElement = event.target;
    if (clickedElement.tagName.toLowerCase() !== "button") return;

    const questionID = clickedElement.getAttribute('aria-controls');
    const question = document.getElementById(questionID);
    question.classList.toggle('ativo');
    const isExpanded = question.classList.contains('ativo');
    clickedElement.setAttribute('aria-expanded', isExpanded);
}

export { toggleAccordion };