window.addEventListener('DOMContentLoaded', () => {

    //task1
    let task1 = 'Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5: ';
    for (let i = 20; i <= 30; i += 0.5) {
        const addString = i === 30 ? `${i};` : `${i},`;
        task1 += addString;
    }
    const result1 = document.getElementById('task1');
    result1.innerHTML = task1;

    //task2
    let task2 = 'Один долар коштує 27 гривень.Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів: \n';
    const dollarRate = 27;
    for (let i = 10; i <= 100; i += 10) {
        task2 += `${i} USD = ${i * dollarRate} UAH \n`;
    }
    const result2 = document.getElementById('task2');
    result2.innerHTML = task2;

    //task3
    let task3 = 'Дане ціле число.Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N: '
    const naturalNumber = 200;
    for (let i = 1; i <= 100; i++) {
        const square = i * i;
        if (square <= naturalNumber) {
            const addString = i === Math.round(Math.sqrt(naturalNumber)) || i === 100 ? `${square};` : `${square},`;
            task3 += addString;
        }
    }
    const result3 = document.getElementById('task3');
    result3.innerHTML = task3;

    //task4
    let task4 = 'Дане ціле число. З\'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе): '
    const naturalNumber2 = Number(prompt('Для завдання 4 вкажіть число, щоб перевірити чи є воно простим.'));
    let isSimple = true;
    for (let i = 2; i < naturalNumber2; i++) {
        if (naturalNumber2 % i === 0) {
            isSimple = false;
            break;
        }
    }
    const result4 = document.getElementById('task4');
    result4.innerHTML = task4 + `${naturalNumber2} ${isSimple ? 'є простим числом' : 'не є простим числом'}.`;

    //task5
    let task5 = 'Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна): '
    const naturalNumber3 = Number(prompt('Для завдання 5 вкажіть число, щоб перевірити чи можна його здобути шляхом зведення числа 3 у деякий ступінь.'));;
    let isExponentOfThree = false;
    let exponentRate;
    for (let i = 1; i < naturalNumber3; i++) {
        if (Math.pow(3, i) === naturalNumber3) {
            isExponentOfThree = true;
            exponentRate = i;
            break;
        }
    }
    const result5 = document.getElementById('task5');
    result5.innerHTML = task5 + `${naturalNumber3} ${isExponentOfThree ? `можна здобути шляхом зведення числа 3 у ${exponentRate} ступінь` : 'не можна здобути шляхом зведення числа 3 у деякий ступінь'}.`;
    ;  
});