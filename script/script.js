
// Variable Assigns-------------------------------------------------
let output = document.querySelector('.output');
let previousCalcDisplay = document.querySelector('.calculation');
let number = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operator');

let a = '';
let b = '';
let calculation = '';
let calculated = false;
let operand = '';
let previousCalc = '';

// Operations-------------------------------------------------------
function add (a, b) {
    return a + b;
    console.log(a + b);
}

function subtract (a, b) {
    return a - b;
    console.log(a - b);
}

function multiply (a, b) {
    return a * b;
    console.log(a * b);
}

function divide (a, b) {
    return a / b;
    console.log(a / b);
} 

function percentage (a) {
    return a / 100;
}

function operation (a, b, operator) {
    return operator(a,b);
    console.log(operator(a,b));
}

function clear() {
    a = '';
    b = '';
    calculation = '';
    calculated = false
    output.textContent = '';
    previousCalcDisplay.textContent = '';
}

function backspace() {
    output.textContent = output.textContent.slice(0,-1);
    calculation = calculation.slice(0,-1);
}

// Calculations-----------------------------------------------------
function clearBackspace(symbol) {
    switch (symbol) {
        case 'C':
            clear();
            break;
            case '⌫':
            backspace();
            break;
    }
}

function operations(symbol) {
    if (calculation.length < 9) {
        if (!calculation.includes(" ")) {
            switch (symbol) {
                case '+':
                    operand = add;
                    output.textContent += '+';
                    calculation += ' ';
                    break;
                case '-':
                    operand = subtract;
                    output.textContent += '-';
                    calculation += ' ';
                    break;
                case '×':
                    operand = multiply;
                    output.textContent += '*';
                    calculation += ' ';
                    break;
                case '÷':
                    operand = divide
                    output.textContent += '/';
                    calculation += ' ';
                    break;
                case '%':
                    if (calculation.split(' ')[0] == undefined || calculation.split(' ')[0] == ''){
                        output.textContent = "ERROR";
                    } else {
                        previousCalcDisplay.textContent = output.textContent + "%";
                        a = output.textContent = output.textContent/100;
                        calculation = String(a); 
                        break;
                    }
                
            }
        }
    }
}

function calculate() {
    a = Number(calculation.split(' ')[0]);
    b = Number(calculation.split(' ')[1]);
    a = output.textContent = Math.round(operation(a, b, operand) * 1000)/1000;
    calculation = String(a);
    calculated = true;
}

function equals(symbol) {        
    if (symbol == '=') {
        if (!calculation.includes(' ')) {
            previousCalcDisplay.textContent = output.textContent = calculation;
            output.textContent = calculation;
        } else {
            if (calculation.split(' ')[1] == undefined || calculation.split(' ')[1] == ''|| calculation.split(' ')[0] == undefined || calculation.split(' ')[0] == ''){
                output.textContent = "ERROR";
                calculated = true
            } else {
                previousCalcDisplay.textContent = output.textContent;
                calculate()
            }
        }
    }
}

function point(symbol) {
    if (calculation.length < 9) {
        if (symbol == '.') {
            if (!calculation.includes(' ')) {
                if (!calculation.split(' ')[0].includes('.')) {
                    output.textContent += '.';
                    calculation += '.';
                } 
            } else if (!calculation.split(' ')[1].includes('.')) {
                output.textContent += '.';
                calculation += '.';
            }  
        }
    }
}

function numbers(symbol) {
    if (calculated == true) {
        calculated = false;
        output.textContent = '';
        output.textContent += symbol;
        calculation = '';
        calculation += symbol;
    } else {
        if (calculation.length < 9) {
            output.textContent += symbol;
            calculation += symbol;
        }
    }
}

number.forEach(function(ele) {
    ele.addEventListener('click', (e) => {
        let symbol = e.target.textContent
        numbers(symbol)
    })
})

operator.forEach(function(ele) {
    ele.addEventListener('click', (e) => {
        let symbol = e.target.textContent
        calculated = false;
        clearBackspace(symbol);
        operations(symbol);
        equals(symbol);
        point(symbol);
    })
})

window.addEventListener('keypress', (e) => {
    const button = document.querySelector(`button[data-key="${e.keyCode}"]`);
    let symbol = button.textContent
    console.log(symbol)
})
