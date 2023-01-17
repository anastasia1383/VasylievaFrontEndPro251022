window.addEventListener('DOMContentLoaded', () => {

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        showInfo() {
            const info = `${this.name}, ${this.age}`;
            console.log(info);
            return info;
        }
    }

    class Car {
        constructor(brand, model, year, license) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.license = license;
        }

        owner;

        setOwner(person) {
            const isPerson = person instanceof Person;
            if (!isPerson) {
                console.error('Owner must be an instance of class Person');
                return;
            } 
            if (+person.age < 18) {
                console.error('Owner\'s age must be over 18');
                return;
            }
            this.owner = person;
        }

        showInfo() {
            let info = `${this.brand} ${this.model} ${this.year} ${this.license}`;
            if (this.owner) {
                info += ` ${this.owner.showInfo()}`
            }
            console.log(info);
            return info;
        }
    }

    const user1 = new Person('Alex', '19');
    const user2 = new Person('Maria', 15);
    const user3 = 'Victoria';
    const bmw = new Car('bmw', '4r534', '2009', '769708');
    const audi = new Car('Audi', '76ok8', 2023, '657889');
    const honda = new Car('Honda', 'erg544', 2010, '534930')

    bmw.setOwner(user1);
    bmw.showInfo();

    audi.setOwner(user2);
    audi.showInfo();

    honda.setOwner(user3);
    
    user2.showInfo();

});