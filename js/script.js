const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
const dispay = document.querySelector('.calculator-display');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
    }
});