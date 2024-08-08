let currentInput = '';
let operator = null;
let previousInput = '';


function appendNumber(number) {
 currentInput += number;
 updateScreen();
}


function setOperator(op) {
 if (currentInput === '' && previousInput === '') return;
 if (currentInput !== '') {
   calculate();
 }
 operator = op;
 previousInput = currentInput;
 currentInput = '';
}


function calculate() {
 if (operator === null || currentInput === '') return;
 const a = parseFloat(previousInput);
 const b = parseFloat(currentInput);
 switch (operator) {
   case '+':
     previousInput = (a + b).toString();
     break;
   case '-':
     previousInput = (a - b).toString();
     break;
   case '*':
     previousInput = (a * b).toString();
     break;
   case '/':
     previousInput = (a / b).toString();
     break;
 }
 currentInput = '';
 operator = null;
 updateScreen();
}


function clearScreen() {
 currentInput = '';
 previousInput = '';
 operator = null;
 updateScreen();
}


function updateScreen() {
 document.getElementById('calculator-screen').value = currentInput || previousInput || '0';
}



