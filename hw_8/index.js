window.addEventListener('DOMContentLoaded', () => {
    const userBirthYear = prompt('Введіть Ваш рік народження.', '');  
    const userCity = prompt('В якому місті Ви проживаєте?', '');
    const userSport = prompt('Введіть Ваш улюблений вид спорту.', '');

    const today = new Date().getFullYear();
    const userAge = today - +userBirthYear;

    if (isNaN(userAge)) {
        result = `Задане значення не коректне! Буль ласка, введіть Ваш рік народження у форматі чотиризначного числа.\n`
    } else if (userAge) {
        result = `Ваш вік: ${userAge} р.\n`; 
    } else {
        result = 'Шкода, що Ви не захотіли ввести свій рік народження :(\n';
    }

    const kyiv = 'київ';
    const washington = 'вашингтон';
    const london = 'лондон';

    const citiesCountries = {
        [kyiv]: 'України',
        [washington]: 'Америки',
        [london]: 'Великобританії',
    };

    const chess = 'шахи';
    const whiffWhaff = 'пінг-понг';
    const curling = 'керлінг';

    const sportsChamps = {
        [chess]: 'Магнус Карлсен',
        [whiffWhaff]: 'Фань Чженьдун',
        [curling]: 'Сільвана Тірінзоні',
    };

    if (userCity && citiesCountries[userCity.toLowerCase()]) {
        result += `Ви живете у столиці ${citiesCountries[userCity.toLowerCase()]}.\n`;
    } else if (userCity) {
        result += `Ви живете у місті ${userCity}.\n`;
    } else {
        result += 'Шкода, що Ви не захотіли ввести своє місто :(\n';
    }

    if (userSport && sportsChamps[userSport.toLowerCase()]) {
        result += `Круто! Хочеш стати як ${sportsChamps[userSport.toLowerCase()]}?`;
    } else if (userSport) {
        result += `Твій улюблений спорт ${userSport}.`;
    } else {
        result += 'Шкода, що Ви не захотіли ввести свій улюблений спорт :(';
    }

    alert(result);
});
