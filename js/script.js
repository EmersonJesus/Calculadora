const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.calculator-keys');
const specialChars = ['%', "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    if(btnValue === "=" && btnValue !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === '±' && output !== "") {
        output = `-${output}`;
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}

buttons.forEach((button) => {
    button.addEventListener('click', e => calculate(e.target.dataset.value));
})