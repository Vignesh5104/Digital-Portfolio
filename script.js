function appendtoDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    const display = document.getElementById("display").value;

    try {
        const result = eval(display);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}