const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButtons = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    calculate() {
        let result;

        const  _previousOperand = parseFloat(this.previousOperand);
        const _currentOperand = parseFloat(this.currentOperand);

        if (isNaN(_previousOperand) || isNaN(_currentOperand)) return;
        switch (this.operation) {
            case '+':
                result = _previousOperand + _currentOperand;
                break;
            case '-':
                result = _previousOperand - _currentOperand;
                break;
            case 'x':
                result = _previousOperand * _currentOperand;
                break;
            case '÷':
                if (_currentOperand === 0) {
                    alert("Não é possível dividir por zero");
                    this.clear();
                    return;
                }
                result = _previousOperand / _currentOperand;
                break;
            default:
                return;
        }

        this.previousOperand = '';
        this.currentOperand = result;
        this.operation = undefined;
        this.isResultDisplayed = true;
    }

    chooseOperation(operation) {
        if  (this.currentOperand === '') return;

        if (this.previousOperand !== "") {
            this.calculate();
        }

        this.operation = operation;

        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    appendNumber(number)  {
        if (this.isResultDisplayed) {
            this.clear();
            this.isResultDisplayed = false;
        }

        if (this.currentOperand.includes(".")&& number === ".") return;
        this.currentOperand  = `${this.currentOperand}${number.toString()}`;
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }

    updateDisplay(){
        this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation || ""}`;
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
}

const  calculator = new Calculator(
    previousOperandTextElement, 
    currentOperandTextElement
);

for (const numberButton of numberButtons) {
    numberButton.addEventListener('click', () => {
        calculator.appendNumber(numberButton.innerText);
        calculator.updateDisplay();
    });
}

for (const operationButton of operationButtons) {
    operationButton.addEventListener('click', () => {
        calculator.chooseOperation(operationButton.innerText);
        calculator.updateDisplay();
    });
} 

allClearButtons.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

equalsButton.addEventListener("click", ()=>  {
    calculator.calculate();
    calculator.updateDisplay();
});