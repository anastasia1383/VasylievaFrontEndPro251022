import ValidationError from "./validation-error.js";

const PASSWORD_ERROR_TYPE = 'password'
const CONFIRM_PASSWORD_ERROR_TYPE = 'confirmation'

export const Validator = {
    errors: {},

    validators: {
        isNotEmpty: {
            validate: (value) => value !== '',
            message: "The field can't be a blank",
            errorType: 'required'
        },
        rangeLength(min, max) {
            return {
                validate: (value) => value.length >= min && value.length <= max,
                message: `This field must be between ${min} and ${max} characters`,
                errorType: 'length'
            }
        },
        isEmail: {
            validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).toLowerCase()),
            message: "Invalid email",
            errorType: 'email'
        },
        password: {
            validate: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(value),
            message: "Password must contain at least 8 characters that include at lest 1 lowercase character, 1 uppercase character, 1 number, and 1 special character in (!@#$%^&*)",
            errorType: PASSWORD_ERROR_TYPE,
        },
        confirmPassword: {
            validate: (password, confirmation) => password === confirmation,
            message: "Please enter the password again",
            errorType: CONFIRM_PASSWORD_ERROR_TYPE,
        }
    },

    validate(form, config) {
        if(!(form instanceof HTMLFormElement)) {
            throw new ValidationError('You should provide HTML form');
        }

        let elements = form.elements;
        this.errors[form.name] = {};

        for (const [inputName, inputValidators] of Object.entries(config)) {
            if(!inputValidators.length) {
                continue;
            }

            if(!elements[inputName]) {
                throw new ValidationError(`The "${inputName}" field doesn't exist in the "${form.name}"`);
            }

            const value = elements[inputName].value;
            let errors = this.errors[form.name];

            inputValidators.forEach( ({ validate, message, errorType }) => {
                const errorsData = {
                    ...errors[inputName],
                    [errorType]: message,
                };
                
                if (errorType === CONFIRM_PASSWORD_ERROR_TYPE) {
                    if(!validate(elements['password'].value, value)) {
                        errors[inputName] = errorsData;
                    }
                    return;
                }

                if(!validate(value)) {
                    errors[inputName] = errorsData;
                }

            });
        }
        
        return !this._hasError(form.name);
    },

    getErrors(formName) {
        return this.errors[formName];
    },

    _hasError(formName) {
        return !!Object.keys(this.errors[formName]).length;
    },
}

export const { isNotEmpty, rangeLength, isEmail, password, confirmPassword } = Validator.validators;