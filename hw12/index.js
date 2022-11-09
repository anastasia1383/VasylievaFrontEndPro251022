window.addEventListener('DOMContentLoaded', () => {

    //creating an array

    const usersArr = [];
    let userIsAddingElements = true;
    do {
        const arrElement = prompt('Enter data for array');
        if (arrElement) {
            usersArr.push(arrElement)
        } else {
            userIsAddingElements = confirm('Do you want to add more?');
        }
    } while (userIsAddingElements)
    
    document.getElementById("arr").innerHTML = `${usersArr} \n`;

    //sort an array

    const chars = [];
    const nums = [];
    usersArr.forEach((el) => {
        if (isNaN(+el)) {
            chars.push(el);
        } else {
            nums.push(+el);
        }
    });

    const sortedArr = chars.sort().concat(nums.sort(function(a, b){return a - b}));
    document.getElementById("arr").innerHTML += `${sortedArr} \n`;

    //dealete elements

    sortedArr.splice(1,3)
    document.getElementById("arr").innerHTML += `${sortedArr}`;
});