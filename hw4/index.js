window.addEventListener('DOMContentLoaded', (event) => {
    const firstNumber = prompt("Enter 1st number");
    const secondNumber = prompt("Enter 2nd number");
    
    alert(`
        ${firstNumber}+${secondNumber} = ${+firstNumber + +secondNumber} \n
        ${firstNumber}-${secondNumber} = ${firstNumber - secondNumber} \n
        ${firstNumber}*${secondNumber} = ${firstNumber * secondNumber} \n
        ${firstNumber}/${secondNumber} = ${firstNumber / secondNumber} \n
    `);
})


