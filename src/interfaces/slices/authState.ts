import { AuthStatus } from "../../enums";
import { UserInterface } from "../models";



export interface AuthState {
    status: AuthStatus;
    user: UserInterface | null;
    errorMessage: string | null;
}