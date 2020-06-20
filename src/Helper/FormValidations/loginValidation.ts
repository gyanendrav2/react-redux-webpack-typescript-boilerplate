import * as yup from 'yup';
export const loginValidation = {
    validationSetting: yup.object().shape({
        loginAs: yup.string().required(),
        email: yup.string().required().email(),
        password: yup.string().required(),
    }),
    errorMsg:{
        loginAs: "This field is required.",
        email: "Please enter correct email.",
        password: "Please type your password."
    }
}

