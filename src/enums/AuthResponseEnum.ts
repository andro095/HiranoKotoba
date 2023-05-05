export enum AuthResponseEnum {
    Success,
    WrongPassword,
    EmailNotFound,
    TooManyRequests,
    NetworkRequestFailed,
    UserUnconfirmed,
    ErrorSendingConfirmationEmail,
    EmailAlreadyInUse,
    SuccessSendingConfirmationEmail,
    ErrorLogIn,
    ErrorRegister,
    ErrorSendPasswordResetEmail,
    ErrorSendingNewPassword,
    ErrorGoogleLogIn,
}