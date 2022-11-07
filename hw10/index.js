window.addEventListener('DOMContentLoaded', () => {

    //task1
    let task1 = 'Вивести на сторінку в один рядок через кому числа від 10 до 20: ';
    for (let i = 10; i <= 20; i++) {
        const addString = i === 20 ? `${i};` : `${i},`;
        task1 += addString;
    }
    const result1 = document.getElementById('task1');
    result1.innerHTML = task1;

    //task2
    let task2 = 'Вивести квадрати чисел від 10 до 20: ';
    for (let i = 10; i <= 20; i++) {
        const addString = i === 20 ? `${i*i};` : `${i*i},`;
        task2 += addString;
    }
    const result2 = document.getElementById('task2');
    result2.innerHTML = task2;

    //task3
    let task3 = 'Вивести таблицю множення на 7:\n';
    for (let i = 1; i <= 10; i++) {
        const addString = `${i} * 7 = ${i*7} \n`;
        task3 += addString;
    }
    const result3 = document.getElementById('task3');
    result3.innerHTML = task3;

    //task4
    let task4 = 'Знайти суму всіх цілих чисел від 1 до 15: ';
    let counter = 0;
    for (let i = 1; i <= 15; i++) {
        counter += i;
    }
    const result4 = document.getElementById('task4');
    result4.innerHTML = task4 + counter;
   
    //task5
    let task5 = 'Знайти добуток усіх цілих чисел від 15 до 35: ';
    let counter2 = 0;
    for (let i = 15; i <= 35; i++) {
        counter2 = i * counter2 || i;
    }
    const result5 = document.getElementById('task5');
    result5.innerHTML = task5 + counter2;

    //task6
    let task6 = 'Знайти середнє арифметичне всіх цілих чисел від 1 до 500: ';
    let counter3 = 0;
    for (let i = 1; i <= 500; i++) {
        counter3 += i;
    }
    const result6 = document.getElementById('task6');
    result6.innerHTML = task6 + counter3 / 500;

    //task7
    let task7 = 'Вивести суму лише парних чисел в діапазоні від 30 до 80: ';
    let counter4 = 0;
    for (let i = 30; i <= 80; i+=2) {
        counter4 += i;
    }
    const result7 = document.getElementById('task7');
    result7.innerHTML = task7 + counter4;

    //task8
    let task8 = 'Вивести всі числа в діапазоні від 100 до 200 кратні 3: ';
    const arr = new Array(200);
    for (let i = 100; i <= arr.length; i++) {
        if (i % 3 === 0){
            const addString = i >= arr.length - 3 ? `${i};` : `${i},`; 
            task8 += addString;
        }
    }
    const result8 = document.getElementById('task8');
    result8.innerHTML = task8;

    //task9
    let task9 = 'Дано натуральне число. Знайти та вивести на сторінку всі його дільники: ';
    let naturalNumber = 100;
    for (let i = 0; i <= naturalNumber; i++) {
        if (naturalNumber % i === 0){
            const addString = i === naturalNumber ? `${i};` : `${i},`;
            task9 += addString;
        }
    }
    const result9 = document.getElementById('task9');
    result9.innerHTML = task9;

    //task10
    let task10 = 'Дано натуральне число. Визначити кількість його парних дільників: ';
    let naturalNumber2 = 100;
    for (let i = 0; i <= naturalNumber2; i++) {
        if (naturalNumber2 % i === 0 && i % 2 === 0){
            const addString = i === naturalNumber2 ? `${i};` : `${i},`;
            task10 += addString;
        }
    }
    const result10 = document.getElementById('task10');
    result10.innerHTML = task10;


    //task11
    let task11 = 'Дано натуральне число. Знайти суму його парних дільників: ';
    let naturalNumber3 = 100;
    let counter5 = 0;
    for (let i = 0; i <= naturalNumber3; i++) {
        if (naturalNumber3 % i === 0 && i % 2 === 0){
            counter5 += i;
        }
    }
    const result11 = document.getElementById('task11');
    result11.innerHTML = task11 + counter5;

    //task12
    let task12 = 'Надрукувати повну таблицю множення від 1 до 10:\n';
    for (let i = 1; i <= 10; i++) {
        const container = document.getElementById(`multiply-${i}`);
        let table = '';
        for (let k = 1; k <= 10; k++) {
            table += `${i} * ${k} = ${i*k} \n`;
        };
        container.innerHTML = table;
    }
    document.getElementById('task12').prepend(task12);
});
