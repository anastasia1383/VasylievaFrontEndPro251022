window.addEventListener('DOMContentLoaded', () => {

    // 1. Example

    let numOrStr = prompt('input number or string');

    if (numOrStr === null) {
        console.log('ви скасували')
    } else if (numOrStr.trim() === '') {
        console.log('Empty String');
    } else if (isNaN(+numOrStr)) {
        console.log(' number is Ba_NaN')
    } else {
        console.log('OK!')
    }

    // 2. First solution

    let numOrStr = prompt('input number or string');
    let numOrStrTrim = numOrStr ? numOrStr.trim() : numOrStr;

    switch (isNaN(numOrStrTrim) || numOrStrTrim) {
        case true:
            console.log('number is Ba_NaN');
            break;
        case null:
            console.log('ви скасували');
            break;
        case '':
            console.log('Empty String');
            break;
        default: console.log('OK!');
    }

    // 3. Second one 

    let numOrStr = prompt('input number or string');

    switch (isNaN(+numOrStr) || String(numOrStr).trim()) {
        case true:
            console.log('number is Ba_NaN');
            break;
        case 'null':
            console.log('ви скасували');
            break;
        case '':
            console.log('Empty String');
            break;
        default: console.log('OK!');
    }

    // 4. Nicer one 

    let numOrStr = prompt('input number or string');

    switch (true) {
        case numOrStr === null:
            console.log('ви скасували');
            break;
        case isNaN(+numOrStr):
            console.log('is NAN');
            break;
        case numOrStr.trim() === '':
            console.log('empty');
            break;
        default:
            console.log('OK!');
    }
});
