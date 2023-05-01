// React Libraries

// Third Party Libraries

// Interfaces
import { ErrorTypes } from "@interfaces";

// Hooks

// Enums
import { AuthResponseEnum as error } from "@enums";

export const errorTypes : ErrorTypes = {
    [error.WrongPassword]: 'wrongPassword',
    [error.EmailNotFound]: 'emailNotFound',
    [error.TooManyRequests]: 'tooManyRequests',
    [error.NetworkRequestFailed]: 'networkRequestFailed',
    [error.UserUnconfirmed]: 'userUnconfirmed',
    [error.ErrorSendingConfirmationEmail]: 'errorSendingConfirmationEmail',
    [error.EmailAlreadyInUse]: 'emailAlreadyInUse',
    [error.ErrorLogIn]: 'errorLogIn',
    [error.ErrorRegister]: 'errorRegister',
    [error.ErrorSendPasswordResetEmail]: 'errorSendPasswordResetEmail',
    [error.ErrorSendingNewPassword]: 'errorSendingNewPassword',
}