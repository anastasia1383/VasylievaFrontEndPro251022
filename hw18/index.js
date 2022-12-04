window.addEventListener('DOMContentLoaded', () => {

    function createCounter() {
        let counter = 0;
        const getSum = function(number) {
            counter += number;
            return counter;
        }
        return getSum;
    }

   const sum = createCounter();
   const number1 = sum(3);
   const number2 = sum(5);
   const number3 = sum(20);

   console.log(number1, number2, number3);
});