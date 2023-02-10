window.addEventListener('DOMContentLoaded', () => {

    class ListItem {
        constructor(text) {
            this.text = text;
            this.isSelected = false;
        }

        setSelected(value) {
            this.isSelected = value;
            if (this.isSelected) {
                this.elem.classList.add('selected');
            } else {
                this.elem.classList.remove('selected');
            }
        }

        setElement(element) {
            this.elem = element;
        }

        remove() {
            this.element.remove();
        }

        get element() {
            return this.elem;
        }
    }

    class List {
        items = [];

        constructor() {
            const list = document.createElement('ol');
            this.element = list;
            this.#registerEvents(this.element);
        }

        #registerEvents(element) {
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.container')) {
                    this.clearSelected();
                }
            })
            element.addEventListener('mousedown', function (e) {
                e.preventDefault();
            });

            element.addEventListener('click', (e) => {

                if (e.target === element) {
                    return false;
                }

                if (e.metaKey || e.ctrlKey) {
                    const selected = this.getListItem(e.target);
                    const newState = !selected.isSelected;
                    selected.setSelected(newState);
                    return;
                }

                if (!e.shiftKey) {
                    this.clearSelected();
                }

                if (e.shiftKey) {
                    const currentlySelected = this.getSelected();

                    if (!currentlySelected) {
                        const children = this.items;
                        for (let index = 0; index < children.length; index++) {
                            const listItem = children[index];
                            listItem.setSelected(true);
                            if (e.target === listItem.element) {
                                break;
                            }
                        }
                        return;
                    }

                    const targetIndex = this.items.findIndex((listItem) => listItem.element === e.target);
                    const currentlySelectedIndex = this.items.findIndex((listItem) => listItem.element === currentlySelected[0].element);
                    this.clearSelected();
                    const [start, end] = targetIndex < currentlySelectedIndex ? [targetIndex, currentlySelectedIndex] : [currentlySelectedIndex, targetIndex];

                    for (let index = start; index <= end; index++) {
                        this.items[index].setSelected(true);
                    }
                    return;
                }

                this.clearSelected();
                const selected = this.getListItem(e.target);
                selected.setSelected(true);
            });

        }

        clearSelected() {
            this.items.forEach((elem) => {
                elem.setSelected(false);
            });
        }

        getSelected() {
            const selectedItems = this.items.filter((listItem) => listItem.isSelected);
            return selectedItems.length ? selectedItems : null;
        }

        getListItem(target) {
            return this.items.find((listItem) => listItem.element === target);
        }

        addListItem(text, position) {
            const listItem = new ListItem(text);
            const listItemElement = this.createListElement(listItem);

            if (position === 'start') {
                this.items.unshift(listItem);
                this.element.insertAdjacentElement('afterbegin', listItemElement);
            } else {
                this.items.push(listItem);
                this.element.insertAdjacentElement('beforeend', listItemElement);
            }
            return listItem;
        }

        removeListItem(listItem) {
            listItem.remove();
            this.items = this.items.filter((item) => item !== listItem);
        }

        createListElement(item) {
            const listItemElement = document.createElement('li');
            listItemElement.innerText = item.text;
            item.setElement(listItemElement);
            return listItemElement;
        }

        renderList(container) {
            const list = this.element;
            container.appendChild(list);
        }

        get listItems() {
            return this.items;
        }
    }

    class Menu {
        constructor(elem, taskInput) {
            this.input = taskInput;
            this._elem = elem;
            elem.onclick = this.onClick.bind(this);
        }

        validateTask() {
            const value = this.input.value;
            if (!value) alert('Please specify the task');
            return value;
        }


        start() {
            if (this.validateTask()) {
                list.addListItem(this.input.value, 'start');
                this.input.value = '';
            }
        }

        end() {
            if (this.validateTask()) {
                list.addListItem(this.input.value);
                this.input.value = '';
            }
        }

        delete() {
            const itemsToRemove = list.getSelected();
            if (itemsToRemove) {
                itemsToRemove.forEach((listItem) => list.removeListItem(listItem));
            }
        }

        sort() {
            const itemsToMove = list.getSelected();
            if (itemsToMove) {
                itemsToMove.forEach((listItem) => list.removeListItem(listItem));
            }

            itemsToMove.reverse().forEach((listItem) => list.addListItem(listItem.text, 'start').setSelected(true));
        }

        onClick(event) {
            let action = event.target.dataset.action;
            if (action) {
                this[action]();
            }
        };
    }

    const list = new List();
    const items = [
        'Go to a shop',
        'Read a book',
        'Phone to a friend',
        'Get some work',
        'Meet guests',
    ];

    items.forEach((item) => {
        list.addListItem(item, 'end');
    })

    const listWrapper = document.querySelector('#list-wrapper');
    list.renderList(listWrapper);

    let menuContainer = document.querySelector('#menu');
    let taskInput = document.querySelector('#task-name');

    new Menu(menuContainer, taskInput);
});