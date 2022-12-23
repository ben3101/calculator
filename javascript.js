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

addButton.addEventListener('click', addition);
subtractButton.addEventListener('click', subtraction);
multiplyButton.addEventListener('click', multiplication);
divideButton.addEventListener('click', division);

//decimal button
decimalButton = document.getElementById('decimal');
decimalButton.addEventListener('click', enterDecimal);

//store last pressed operator button
let currentOperator = "";

//functions
/*
function sum(){
    //create an array from the arguments
    let values = Array.from(arguments);
    //cycle through array and add the elements
    let sum = 0;
    for(let i=0; i<values.length; i++){
        sum += values[i];
    }
    return sum;
}*/

//function for each number button
function selectNumber(){//if no previous operator selected
    if(currentOperator === ""){
    updateDisplay(this.textContent);
    console.log(displayValue);
    }else{
        displayValue = this.textContent;
        display.textContent = displayValue;
        operate(currentOperator, lastValue, displayValue);
    }
}

/*
function equals(){
    if(lastValue !== "" && displayValue !== "" && currentOperator !== ""){
    console.log(currentOperator, lastValue, displayValue);
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
*/

//'.' button for entering decimals
function enterDecimal(){
    //console.log('enter decimal');
    //check it doesn't already have a decimal point
    if(!display.textContent.includes('.')){
        //currentOperator = '.';
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

//TODO: move all 4 into the operation function for cleaner code--------------------------------
//operator button functions 
function operation(){/*
    //select correct operator function
    currentOperator = this.id;
 
    */
}

//code for each button. 
//-Update the currentOperator variable
//-Save the prev display value 
function addition(){
    //if the current operator is not blank, 
    if(currentOperator!==""){
        //carry out that operation first 
        equals();
    }
    //save previous display value
    lastValue = displayValue;
    //update the operator
    currentOperator = add; 
}
function subtraction(){
        //if the current operator is not blank, 
        if(currentOperator!==""){
            //carry out that operation first 
            equals();
        }
        //save previous display value
        lastValue = displayValue;
        //update the operator
        currentOperator = subtract;
}
function multiplication(){
        //if the current operator is not blank, 
        if(currentOperator!==""){
            //carry out that operation first 
            equals();
        }
        //save previous display value
        lastValue = displayValue;
        //update the operator
        currentOperator = multiply;
}
function division(){
        //if the current operator is not blank, 
        if(currentOperator!==""){
            //carry out that operation first 
            equals();
        }
        //save previous display value
        lastValue = displayValue;
        //update the operator
        currentOperator = divide;
}
//-----------------------------------------------------------------------

//equals function
//-take the stored operation, stored value and current values
//-carry out that operation and update the display screen
function equals(){
    if(lastValue !== "" && displayValue !== "" && currentOperator !== ""){
    console.log(currentOperator, lastValue, displayValue);
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
