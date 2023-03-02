import { isNotEmpty, rangeLength, isEmail, password, confirmPassword } from './validator.js';

export const humanFormConfig = {
    'username': [isNotEmpty, rangeLength(3, 25)],
    'email': [isNotEmpty, isEmail],
    'password': [isNotEmpty, password],
    'confirm-password': [isNotEmpty, confirmPassword]
};