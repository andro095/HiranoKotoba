// React Libraries

// Third Party Libraries
import * as Yup from 'yup';

// Interfaces
import { FormatMessage } from '@interfaces';

// Hooks


export const registerSchema = (formatMessage : FormatMessage) => Yup.object().shape({
    email: Yup.string()
        .email(formatMessage('auth.invalidEmail', 'Ingrese un correo válido'))
        .required(formatMessage('auth.requiredEmail', 'Ingrese un correo')),
    password: Yup.string()
        .required(formatMessage('auth.requiredPassword', 'Ingrese una contraseña'))
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!_%*?&]{8,}/,
            formatMessage('register.passwordFormat', 'La contraseña debe tener al menos 8 caracteres y debe incluir por lo menos mayúsculas, minúsculas y números')
        ),
    passwordConfirm: Yup.string()
        .required(formatMessage('register.requiredConfirmPassword', 'Confirme su contraseña'))
        .oneOf([Yup.ref('password')], formatMessage('register.passwordsDontMatch', 'Las contraseñas no coinciden')),
    name: Yup.string()
        .required(formatMessage('register.requiredName', 'Ingrese su nombre')),
    lastname: Yup.string()
        .required(formatMessage('register.requiredLastName', 'Ingrese su apellido')),
})