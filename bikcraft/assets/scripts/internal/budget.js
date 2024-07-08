const checkBudgetInput = inputId => {
    const input = document.getElementById(inputId);
    if (!input) return;

    input.checked = true;
}

export { checkBudgetInput }