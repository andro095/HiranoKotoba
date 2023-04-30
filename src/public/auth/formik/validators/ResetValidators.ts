// React Libraries

// Third Party Libraries
import * as Yup from 'yup';

// Interfaces
import { FormatMessage } from '@interfaces';

// Hooks

export const resetStep1Schema = (formatMessage : FormatMessage) => Yup.object().shape({
    email: Yup.string()
        .email(formatMessage('auth.invalidEmail', 'Ingrese un correo válido'))
        .required(formatMessage('auth.requiredEmail', 'Ingrese un correo'))
});

export const resetStep3Schema = (formatMessage : FormatMessage) => Yup.object().shape({
    password: Yup.string()
        .required(formatMessage('auth.requiredPassword', 'Ingrese una contraseña'))
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!_%*?&]{8,}/,
            formatMessage('auth.passwordFormat', 'La contraseña debe tener al menos 8 caracteres y debe incluir por lo menos mayúsculas, minúsculas y números')
        ),
    confirmPassword: Yup.string()
        .required(formatMessage('auth.requiredConfirmPassword', 'Confirme su contraseña'))
        .oneOf([Yup.ref('password')], formatMessage('auth.passwordsDontMatch', 'Las contraseñas no coinciden'))
});