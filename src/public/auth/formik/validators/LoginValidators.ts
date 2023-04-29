// React Libraries

// Third Party Libraries
import * as Yup from 'yup';

// Interfaces
import { FormatMessage } from '@interfaces';

// Hooks


export const logInSchema = (formatMessage : FormatMessage) => Yup.object().shape({
    email: Yup.string()
        .email(formatMessage('auth.invalidEmail', 'Ingrese un correo válido'))
        .required(formatMessage('auth.requiredEmail', 'Ingrese un correo')),
    password: Yup.string()
        .required(formatMessage('auth.requiredPassword', 'Ingrese una contraseña'))
});