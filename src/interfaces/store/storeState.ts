import { AuthState, ConfigState } from "../slices";

export interface RootState {
    auth: AuthState;
    config: ConfigState;

}