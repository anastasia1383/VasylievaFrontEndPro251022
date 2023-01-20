window.addEventListener('DOMContentLoaded', () => {

    class Product {
        #calories;
        #price;
        #category;
        constructor(category, calories, price) {
            this.#category = category;
            this.#calories = calories;
            this.#price = price;
        }

        get calories() {
            return this.#calories;
        }

        get price() {
            return this.#price;
        }

        get category() {
            return this.#category;
        }
    }

    class Menu {
        #products = {};

        addProduct(name, category, calories, price) {
            this.#products[name] = new Product(category, calories, price);
        }

        getProduct(name) {
            return this.#products[name];
        }

        getProductByCategory(category) {
            let products = [];

            for (const product in this.#products) {
                if (this.#products[product].category === category) {
                    products.push({
                        value: product,
                        label: product.charAt(0).toUpperCase() + product.slice(1).replace('_', ' '),
                    });
                }
            }

            return products;
        }
    }

    const menu = new Menu();

    const CHEESE = 'cheese';
    const SALAD = 'salad';
    const POTATO = 'potato';
    const SMALL_BURGER = 'small_burger';
    const BIG_BURGER = 'big_burger';
    const SPICES = 'spices';
    const MAYO = 'mayo';

    const BURGER_CATEGORY = 'burger';
    const STUFFING_CATEGORY = 'stuffing';
    const TOPPING_CATEGORY = 'topping';

    menu.addProduct(CHEESE, STUFFING_CATEGORY, 20, 10);
    menu.addProduct(SALAD, STUFFING_CATEGORY, 5, 20);
    menu.addProduct(POTATO, STUFFING_CATEGORY, 10, 15);
    menu.addProduct(SMALL_BURGER, BURGER_CATEGORY, 20, 50);
    menu.addProduct(BIG_BURGER, BURGER_CATEGORY, 40, 100);
    menu.addProduct(SPICES, TOPPING_CATEGORY, 0, 15);
    menu.addProduct(MAYO, TOPPING_CATEGORY, 5, 20);

    menu.getProductByCategory(TOPPING_CATEGORY);

    class Burger extends Product {
        #stuffing;
        #toppings;
        constructor(category, calories, price, stuffing) {
            super(category, calories, price);
            this.#stuffing = stuffing;
            this.#toppings = [];
        }

        addTopping(topping) {
            if (!topping) return;
            this.#toppings.push(topping);
        }

        calculateCalories() {
            return this.calories + this.#stuffing.calories + this.#toppings.reduce((prev, cur) => {
                return prev + cur.calories;
            }, 0);
        }

        calculatePrice() {
            return this.price + this.#stuffing.price + this.#toppings.reduce((prev, cur) => {
                return prev + cur.price;
            }, 0);
        }

    }

    const createBurger = (burgerType, stuffing, toppings = []) => {
        const CALORIES = menu.getProduct(burgerType).calories;
        const PRICE = menu.getProduct(burgerType).price;

        const burger = new Burger(BURGER_CATEGORY, CALORIES, PRICE, stuffing);
        if (toppings.length) {
            toppings.forEach(toppingName => {
                const topping = menu.getProduct(toppingName);
                burger.addTopping(topping);
            });
        }

        return burger;
    }

    //

    const form = document.querySelector('#burger-form');
    const resultContainer = document.querySelector('#result-container');

    const burgerInputContainer = form.querySelector('[name="type"]');
    const burgerList = menu.getProductByCategory(BURGER_CATEGORY);
    burgerInputContainer.innerHTML = burgerList.map((burger) => `<option value="${burger.value}">${burger.label}</option>`).join('');

    const stuffingInputContainer = form.querySelector('[name="stuffing"]');
    const stuffingList = menu.getProductByCategory(STUFFING_CATEGORY);
    stuffingInputContainer.innerHTML = stuffingList.map((stuffing) => `<option value="${stuffing.value}">${stuffing.label}</option>`).join('');

    const toppingInputContainer = form.querySelector('#topping-container');
    const toppingList = menu.getProductByCategory(TOPPING_CATEGORY);
    toppingInputContainer.innerHTML = toppingList.map((topping) => `
        <label>
            <span>${topping.label}</span>
            <input type="checkbox" name="topping" value="${topping.value}">
            <span class="custom-checkbox"></span>
        </label>`
    ).join('');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        const burgerType = formData.get('type')
        const stuffing = formData.get('stuffing');
        const toppings = formData.getAll('topping');

        const burger = createBurger(burgerType, menu.getProduct(stuffing), toppings);

        resultContainer.innerHTML = `
        <span>Result</span>
        <div class="result-row">
            <p>Calories</p>
            <span class="divider"></span>
            <span>${burger.calculateCalories()}</span> 
        </div>
        <div class="result-row">
            <p>Price</p>
            <span class="divider"></span>
            <span>${burger.calculatePrice()}</span>
        </div>`;
    });
});