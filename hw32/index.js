
import { Validator } from './js/validator.js';
import { humanFormConfig } from './js/form-configs.js';

let form = document.human;

let elements = form.elements;

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    
    [...elements].forEach( element => {
        if(element.type !== 'submit') {
            let errorBox = form.querySelector(`[data-for="${element.name}"]`);
            errorBox.innerHTML = '';
            element.classList.remove('error');
        }
    });

    let isValid = Validator.validate(form, humanFormConfig);

    if(!isValid) {
        let errors = Validator.getErrors(form.name);

        Object.entries(errors).forEach(([name, errorObject]) => {
            let errorBox = form.querySelector(`[data-for="${name}"]`);
            elements[name].classList.add('error');

            let fullMessage = Object.values(errorObject).map( message => `<span>${message}</span>`).join('<br>');
            errorBox.innerHTML = fullMessage;
        });
    }
});


form.addEventListener('input', (e) => {
    let target = e.target;
    let errorBox = form.querySelector(`[data-for="${target.name}"]`);

    let isValid = Validator.validate(
        form, 
        { [target.name]: humanFormConfig[target.name] },
    );

    if(!isValid) {
       
        let errors = Validator.getErrors(form.name)?.[target.name];
        let fullMessage = Object.values(errors).map( message => `<span>${message}</span>`).join('<br>');
        console.log(errors);
        target.classList.remove('valid');
        target.classList.add('error');
        errorBox.innerHTML = fullMessage;

        return;
    } 

    errorBox.innerHTML = '';
    target.classList.add('valid');
    target.classList.remove('error');
})