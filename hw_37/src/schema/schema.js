import * as yup from "yup";

const phoneNamberRules = /^\d+$/;

export const registrationSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    phone: yup.string().matches(phoneNamberRules, {message: "Please enter your phone number"}).min(12).max(12).required("Required")
})