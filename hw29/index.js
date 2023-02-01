window.addEventListener('DOMContentLoaded', () => {

    function getUniqueItems(list) {
        const arrFromList = Array.from(list.querySelectorAll('li'), node => node.textContent);
        return arrFromList.filter((el, id) => arrFromList.indexOf(el) === id);
    }

    function renderFilteredList() {
        const list = document.querySelector('#drinks-list');
        const uniqueListItems = getUniqueItems(list);
        list.innerHTML = uniqueListItems.map(el => `<li>${el}</li>`).join('');
    }

    renderFilteredList();
});