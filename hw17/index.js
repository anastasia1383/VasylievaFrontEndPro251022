window.addEventListener('DOMContentLoaded', () => {

    const numberToDegree = (number, degree) => {
        if (degree === 0) {
            return 1;
        }
        return degree > 0 
            ? number * numberToDegree(number, degree - 1) 
            : numberToDegree(number, degree + 1) / number;
    }

    console.log(numberToDegree(5, -2));
});