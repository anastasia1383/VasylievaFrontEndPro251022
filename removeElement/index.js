window.addEventListener('DOMContentLoaded', () => {
    const array = [1, 2, 3, 4, 5, 6, 5, 7];

    // Dirty

    function removeElementDirty(arr, element) {
        while (arr.findIndex((el) => el === element) !== -1) {
            const index = arr.findIndex((el) => el === element);
            arr.splice(index, 1);
        }
    }
    removeElementDirty(array, 5);
    console.log(array);

    // Clean

    const array2 = [1, 2, 3, 4, 5, 6, 5, 7];

    function removeElementClean(arr, element) {
        return arr.filter((el) => el !== element);
    }
    const filteredArray = removeElementClean(array2, 5)
    console.log(filteredArray);
});