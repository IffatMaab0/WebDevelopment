let num1 = 8;
let num2 = 2;
let result = document.getElementById("res");

let num1El = document.getElementById("num1-el");
let num2El = document.getElementById("num2-el");
num1El.textContent = num1;
num2El.textContent = num2;

function add(){
    result.textContent = "Result:" + " "
    let sum = num1 + num2;
    result.textContent = result.textContent + sum;
}
function subtract(){
    result.textContent = "Result:" + " "
    let sub = num1- num2;
    result.textContent = result.textContent + sub;
}
function multiply(){
    result.textContent = "Result:" + " "
    let product = num1 * num2;
    result.textContent = result.textContent + product;
}
function divide(){
    result.textContent = "Result:" + " "
    let division = num1/num2;
    result.textContent = result.textContent + division;
}

