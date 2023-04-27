// React Libraries

// Third Party Libraries

// Interfaces
import { UserInterface } from "../models";

// Enums
import { AuthResponseEnum, AuthStatus } from "@enums";

// Hooks


export interface AuthState {
    status: AuthStatus;
    user: UserInterface | null;
    errorType: AuthResponseEnum | null;
    confirmationEmailSent: boolean;
}