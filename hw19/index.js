window.addEventListener('DOMContentLoaded', () => {
    const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

    // Знайти суму та кількість позитивних елементів.

    const findAboveZero = (el) => el > 0;

    const filteredAbove = array.filter(findAboveZero);
    console.log(filteredAbove.length);

    const aboveZeroSum = (arr) => arr.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
    console.log(aboveZeroSum(array));
    
    // Знайти мінімальний елемент масиву та його порядковий номер.

    function findMin(arr) {
        return Math.min.apply(null, arr);
    }

    console.log(array.indexOf(findMin(array)));

    // Знайти максимальний елемент масиву та його порядковий номер.

    function findMax(arr) {
        return Math.max.apply(null, arr);
    }

    console.log(array.indexOf(findMax(array)));

    // Визначити кількість негативних елементів.

    const findBelowZero = (el) => el < 0;
    const filteredBelow = array.filter(findBelowZero);
    console.log(filteredBelow.length);

    // Знайти кількість непарних позитивних елементів.

    const oddNumbers = (el) => el % 2 !== 0;

    const filteredOddNumAboveZero = array.filter((item) => {
        return findAboveZero(item) && oddNumbers(item);
    });
    console.log(filteredOddNumAboveZero.length);

    // Знайти кількість парних позитивних елементів.

    const evenNumbers = (el) => el % 2 === 0;

    const filteredEvenNumAboveZero = array.filter((item) => {
        return findAboveZero(item) && evenNumbers(item);
    });
    console.log(filteredEvenNumAboveZero.length);

    // Знайти суму парних позитивних елементів.

    console.log(aboveZeroSum(filteredEvenNumAboveZero));

    // Знайти суму непарних позитивних елементів.

    console.log(aboveZeroSum(filteredOddNumAboveZero));

    // Знайти добуток позитивних елементів.

    const aboveZeroMult = (arr) => arr.reduce((prevValue, currentValue) => prevValue * currentValue, 1);
    console.log(aboveZeroMult(array.filter(findAboveZero)));

    // Знайти найбільший серед елементів масиву, остальні обнулити.

    const maxEl = findMax(array);
    const arrayWithMaxOnly = array.map((el) => el === maxEl ? maxEl : 0);
    console.log(arrayWithMaxOnly);
})