//variables
//current display values
const display = document.getElementById("display");
let displayValue = "";
//last value - to use during operations.
//Last value will be the value clicked before an operation, when
//the value after that will be one currently displayed
let lastValue = "";

//initially display 0
display.textContent = 0;
const numbers = [];
//fill the numbers array with references to the respective buttons
for(let i=0; i<10; i++){
    numbers[i] = document.getElementById(`b${i}`);
    numbers[i].addEventListener('click', selectNumber);
}
const clearButton = document.getElementById("clear");
clearButton.addEventListener('click', clear);

const equalsButton = document.getElementById("equals");
equalsButton.addEventListener('click', equals);

//operator buttons
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

addButton.addEventListener('click', operation);
subtractButton.addEventListener('click', operation);
multiplyButton.addEventListener('click', operation);
divideButton.addEventListener('click', operation);

//decimal button
decimalButton = document.getElementById('decimal');
decimalButton.addEventListener('click', enterDecimal);

//store last pressed operator button
let currentOperator = "";

//functions
//function for each number button
function selectNumber(){//if no previous operator selected
    if(currentOperator === ""){
    updateDisplay(this.textContent);
    }else{
        displayValue = this.textContent;
        display.textContent = displayValue;
        operate(currentOperator, lastValue, displayValue);
    }
}

//'.' button for entering decimals
function enterDecimal(){
    //check it doesn't already have a decimal point
    if(!display.textContent.includes('.')){
        updateDisplay('.');
    }else{//if it already has one, don't do anything
        return;
    }
}

function updateDisplay(enteredValue){
    if(displayValue == 0){//removes the 0 at start of display
        displayValue = enteredValue;
    }else{
    displayValue += enteredValue;
    }
    display.textContent = (displayValue);
}

//basic functions
function add(num1, num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    if(num2 === 0){
        return "OOPS, can't be doing that!"
    }
    return num1/num2;
}

function clear(){
    //reset the display value, and display a 0
    displayValue = 0;
    display.textContent = 0;
    lastValue = "";
    currentOperator = "";
}

//operator function - apply selected operator to the current value
//displayed on calculator, to the next entered number.
function operate(operator, storedNum, nextNum){
    storedNum = parseFloat(storedNum);
    nextNum = parseFloat(nextNum);
    return operator(storedNum, nextNum);
}

//operator button functions 
//-check if an operation has already been selected, evaluate if so
//-store the last value
//-update the current operator as appropriate
function operation(){
    if(currentOperator!==""){
        //carry out that operation first 
        equals();
    }
    //save previous display value
    lastValue = displayValue;
    //update the operator based on clicked button
    operatorValue = this.textContent;
    
    switch (operatorValue){
        case '+':
            currentOperator = add;
            break;
        case '-':
            currentOperator = subtract;
            break;
        case 'x':
            currentOperator = multiply;
            break;
        case '÷':
            currentOperator = divide;
            break;
    } 
}

//equals function
//-take the stored operation, stored value and current values
//-carry out that operation and update the display screen
function equals(){
    if(lastValue !== "" && displayValue !== "" && currentOperator !== ""){
    let answer = operate(currentOperator, lastValue, displayValue);
    displayValue = answer;
    display.textContent = displayValue;
    //reset currentOperator, update lastValue
    currentOperator = "";
    lastValue = answer;
    }
    else{
        return;
    }
}
