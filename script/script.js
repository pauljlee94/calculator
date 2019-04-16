let output = document.querySelector('.output')
let previousCalcDisplay = document.querySelector('.calculation')
let number = document.querySelectorAll('.number')
let operator = document.querySelectorAll('.operator')
let previousCalc = ''
let calculation = ''
let a = ''
let b = ''
let operand = ''


// Operations-----------------------------------------------------------------------
function add (a, b) {
    return a + b
    console.log(a + b)
}

function subtract (a, b) {
    return a - b
    console.log(a - b)
}

function multiply (a, b) {
    return a * b
    console.log(a * b)
}

function divide (a, b) {
    return a / b
    console.log(a / b)
} 

function percentage (a) {
    return a / 100
}

function operation (a, b, operator) {
    return operator(a,b)
    console.log(operator(a,b))
}

function clear() {
    output.textContent = ''
    calculation = ''
    previousCalcDisplay.textContent = ''
    a = ''
    b = ''
}

function backspace() {
    output.textContent = output.textContent.slice(0,-1)
    calculation = calculation.slice(0,-1)
}

// Calculations----------------------------------------------------------------------
number.forEach(function(ele) {
    ele.addEventListener('click', function(e) {
        if (output.textContent.length < 9) {
            output.textContent += e.target.textContent
            calculation += e.target.textContent
        }
    })
})


operator.forEach(function(ele) {
    ele.addEventListener('click', function(e) {
        if (output.textContent.length < 9) {
            switch (e.target.textContent) {
                case 'C':
                    clear();
                    break;
                case '⌫':
                    backspace();
                    break;
                case '+':
                    operand = add;
                    output.textContent += '+';
                    calculation += ' '
                    break;
                case '-':
                    operand = subtract;
                    output.textContent += '-';
                    calculation += ' '
                    break;
                case '×':
                    operand = multiply;
                    output.textContent += '*';
                    calculation += ' '
                    break;
                case '÷':
                    operand = divide
                    output.textContent += '/';
                    calculation += ' '
                    break;
                case '%':
                    previousCalcDisplay.textContent = output.textContent + "/100"
                    a = output.textContent = output.textContent/100;
                    calculation = String(a); 
                    break;
                case '=':
                    previousCalc = output.textContent
                    previousCalcDisplay.textContent = previousCalc
                    a = Number(calculation.split(' ')[0])
                    b = Number(calculation.split(' ')[1])
                    a = output.textContent = Math.round(operation(a, b, operand) * 10000)/10000
                    calculation = String(a)                    
            }
        }
    })
})
