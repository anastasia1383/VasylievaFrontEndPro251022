window.addEventListener('DOMContentLoaded', () => {

//  task1 Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const array = [6, 4, 'ghj', {}, 10, NaN];

const getNumbersFromArray = (arr) => arr.filter((item) => typeof item === 'number' && !isNaN(item));
const getAvg = (arr) => arr.reduce((prevValue, currentValue) => prevValue + currentValue, 0) / arr.length;

console.log(getNumbersFromArray(array));
console.log(getAvg(getNumbersFromArray(array)));

/* task2 Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
У змінній znak може бути: +, -, *, /, %, ^ (ступінь).
Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача. */

const messages = [
    'Enter first number',
    'Enter operation',
    'Enter second number',
]
const [firstNumber, operation, secondNumber] = messages.map((message) => prompt(message));

const OPERATORS = {
    PLUS: '+',
    MIN: '-',
    MULTY: '*',
    DIV: '/',
    INTEGER_DIV: '%',
    EXP: '^'
};

const operations = {
    [OPERATORS.PLUS]: (a, b) => +a + +b,
    [OPERATORS.MIN]: (a, b) => a - b,
    [OPERATORS.MULTY]: (a, b) => a * b,
    [OPERATORS.DIV]: (a, b) => {
        if (+b === 0) {
            throw new Error('We can not divide by zero!')
        } 
        return a / b 
    },
    [OPERATORS.INTEGER_DIV]: (a, b) => {
        if (+b === 0) {
            throw new Error('We can not divide by zero!')
        } 
        return a % b 
    },
    [OPERATORS.EXP]: (a, b) => a ** b,
}

const validate = (x, znak, y) => {
    if (znak === OPERATORS.DIV || znak === OPERATORS.INTEGER_DIV) {
        if (y === 0) {
            throw new Error('We can not divide by zero!')
        }
    }
}
 
const doMath = (x, znak, y) => {
    const operation = operations[znak];
    if (operation) {
        return operation(x, y);
    }
    return 'No such operation';
}

console.log(doMath(firstNumber, operation, secondNumber));

/* task3 Написати функцію заповнення даними користувача двомірного масиву. 
Довжину основного масиву і внутрішніх масивів задає користувач. 
Значення всіх елементів всіх масивів задає користувач. */

const createArray = (length) => [...new Array(length)];
const requestSubarrayValues = (index) => prompt(`Please enter values for array #${index + 1} separated by comma (,)`);
const fillArray = (array) => array.map((item, index) => requestSubarrayValues(index).split(',').filter((i) => i));

const createUserArray = () => {
    const arrayLength = +prompt('enter length');
    return fillArray(createArray(arrayLength));
}

console.log(createUserArray());

/* task4 Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
Вихідний рядок та символи для видалення задає користувач. */

    const userLine = prompt('Enter your line');
    const userLetters = prompt('Enter what youd like to remove');

    const stringToArray = (string) => [...string];

    const getCleanLine = (firstString, excludeString) => {
        const lettersArray = stringToArray(firstString);
        const excludeLettersArray = stringToArray(excludeString);
        return lettersArray.filter((letter) => !excludeLettersArray.includes(letter)).join('');
    }

    console.log(getCleanLine(userLine, userLetters))
});
