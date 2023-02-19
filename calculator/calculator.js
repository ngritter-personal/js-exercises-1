//UNDERLYING CALCULATOR FUNCTIONS

const addTwo = function(a,b) {
	return a+b;  
};

const subtractTwo = function(a,b) {
	return a-b;
};

const multiplyTwo = function(a,b) {
    return a*b;
};

const divideTwo = function(num, denom) {
    if (denom === 0) {
        tempNum = '';
        firstNum = '';
        tempOperator = undefined;
        result = '';
        display.textContent = '';
        alert("Nice try buddy.  Don't divide by zero");
    } else {
        return num / denom;
    }
}


console.log(addTwo(2, 2));
console.log(subtractTwo(2, 2));
console.log(multiplyTwo(2, 2));
console.log(divideTwo(2, 2));

const operate = function(operator, a, b) {
    return operator(a, b);
}

console.log(operate(addTwo, 2, 2));
console.log(operate(subtractTwo, 2, 2));
console.log(operate(multiplyTwo, 2, 2));
console.log(operate(divideTwo, 2, 2));

//BUTTON FUNCTIONALITY
const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

let tempNum = '';
let firstNum = '';
let tempOperator;
let result;

numbers.forEach(number => number.addEventListener('click', () => {
    tempNum += number.textContent;
    display.textContent = tempNum;
}));

operators.forEach(operator => operator.addEventListener('click', () => {
    if (tempNum === '') return;

    if (tempOperator !== undefined && firstNum !== '') {
        firstNum = tempOperator(Number(firstNum), Number(tempNum));
    } else {
        firstNum = tempNum;
    }

    if (operator.textContent === '+') {
        tempOperator = addTwo;
    } else if (operator.textContent === '-') {
        tempOperator = subtractTwo;
    } else if (operator.textContent === 'x') {
        tempOperator = multiplyTwo;
    } else if (operator.textContent === '/') {
        tempOperator = divideTwo;
    }

    display.textContent = firstNum;
    tempNum = '';

}));

equal.addEventListener('click', () => {
    if (tempNum === '') return;
    result = tempOperator(Number(firstNum), Number(tempNum));

    display.textContent = result;
    firstNum = result;
});

clear.addEventListener('click', () => {
    tempNum = '';
    firstNum = '';
    tempOperator = undefined;
    result = '';
    display.textContent = '';
})



