// React Libraries

// Third Party Libraries

// Interfaces
import { UserInterface } from "../models";

// Enums
import { AuthStatus } from "@enums";

// Hooks


export interface AuthState {
    status: AuthStatus;
    user: UserInterface | null;
    errorMessage: string | null;
}