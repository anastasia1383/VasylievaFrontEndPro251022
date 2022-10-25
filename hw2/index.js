const str1 = prompt('Enter something...');
const str2 = prompt('And something more...');
const str3 = prompt('And more!');
const result = `${str1} ${str2} ${str3}`

console.log(result);

//OR

alert(result);

//OR

const resultContainer = document.getElementById('result');
resultContainer.innerHTML = result;

//Homework part 2

const number = prompt('Enter 5-digit number');
const first = number[0];
const second = number[1];
const third = number[2]; 
const fourth = number[3]; 
const fifth = number[4];

alert(`${first} ${second} ${third} ${fourth} ${fifth}`)