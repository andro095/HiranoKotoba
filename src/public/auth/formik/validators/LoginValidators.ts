// React Libraries

// Third Party Libraries
import * as Yup from 'yup';

// Interfaces
import { FormatMessage } from '@interfaces';

// Hooks


export const logInSchema = (formatMessage : FormatMessage) => Yup.object().shape({
    email: Yup.string()
        .email(formatMessage('logIn.invalidEmail', 'Correo electrónico inválido'))
        .required(formatMessage('logIn.requiredEmail', 'Correo electrónico requerido')),
    password: Yup.string()
        .required(formatMessage('logIn.requiredPassword', 'Contraseña requerida'))
});