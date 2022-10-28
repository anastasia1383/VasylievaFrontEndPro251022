window.addEventListener('DOMContentLoaded', (event) => {
    const operator = prompt("Please choose an operation (add, sub, mult, div)")
    const firstNumber = Number(prompt("Enter 1st number"));
    const secondNumber = Number(prompt("Enter 2nd number"));

    let result = "Wrong operation selected!";

    if (operator === "add") {
        result = `${firstNumber}+${secondNumber} = ${firstNumber + secondNumber}`;
    } 
    if (operator === "sub") {
        result = `${firstNumber}-${secondNumber} = ${firstNumber - secondNumber}`;
    } 
    if (operator === "mult") {
        result = `${firstNumber}*${secondNumber} = ${firstNumber * secondNumber}`;
    } 
    if (operator === "div") {
        result = `${firstNumber}/${secondNumber} = ${firstNumber / secondNumber}`;
    } 

    alert(result);
});

