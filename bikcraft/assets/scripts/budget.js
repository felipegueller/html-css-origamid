const checkBudgetInput = inputId => {
    debugger
    const input = document.getElementById(inputId);
    if (!input) return;

    input.checked = true;
}

export { checkBudgetInput }