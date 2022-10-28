window.addEventListener('DOMContentLoaded', (event) => {
    const hours = prompt("How many hours would you like to convert to seconds?");
    const result = hours * 60 * 60;
    alert(result); 
});