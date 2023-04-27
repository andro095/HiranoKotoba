export enum AuthResponseEnum {
    Success,
    WrongPassword,
    EmailNotFound,
    TooManyRequests,
    NetworkRequestFailed,
    UserUnconfirmed,
    ErrorSendingConfirmationEmail,
    EmailAlreadyInUse,
}