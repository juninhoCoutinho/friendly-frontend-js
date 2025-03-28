"use strict"
const resultElement = document.getElementById("result");
const submitButton = document.getElementById("submit");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const backspaceButton = document.getElementById("backspace");
const operatorElement = document.getElementById("operator");

let result

const num1 = document.getElementById("first_number")
const num2 = document.getElementById("second_number")


let operator = operatorElement.textContent
console.log(typeof num1.value, num2.value)

plusButton.onclick = function () {
    operator = "+"
    operatorElement.textContent = operator

}
minusButton.onclick = function () {
    operator = "-"
    operatorElement.textContent = operator

}
multiplyButton.onclick = function () {
    operator = "*"
    operatorElement.textContent = operator
}
backspaceButton.onclick = function () {
    num1.value = 0
    num2.value = 0
    operator = "+"
    operatorElement.textContent = operator

}
divideButton.onclick = function () {
    operator = "/"
    operatorElement.textContent = operator
}

submitButton.onclick = function () {
    switch (operator) {
        case "+":
            result = +num1.value + +num2.value
            break;
        case "-":
            result = +num1.value - +num2.value
            break;
        case "*":
            result = +num1.value * +num2.value
            break;
        case "/":
            result = +num1.value / +num2.value
            break;

    }

    console.log("result:", typeof result, result)
    resultElement.textContent = result
    console.log(typeof resultElement.textContent)
}



