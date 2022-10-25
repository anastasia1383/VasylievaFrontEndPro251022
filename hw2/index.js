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


