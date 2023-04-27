// React Libraries

// Third Party Libraries

// Interfaces
import { ErrorTypes } from "@interfaces";

// Hooks

// Enums
import { AuthResponseEnum } from "@enums";

export const errorTypes : ErrorTypes = {
    [AuthResponseEnum.WrongPassword]: 'wrongPassword',
    [AuthResponseEnum.EmailNotFound]: 'emailNotFound',
    [AuthResponseEnum.TooManyRequests]: 'tooManyRequests',
    [AuthResponseEnum.NetworkRequestFailed]: 'networkRequestFailed',
    [AuthResponseEnum.UserUnconfirmed]: 'userUnconfirmed',
    [AuthResponseEnum.ErrorSendingConfirmationEmail]: 'errorSendingConfirmationEmail',
    [AuthResponseEnum.EmailAlreadyInUse]: 'emailAlreadyInUse',
}