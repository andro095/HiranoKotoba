export interface IRegister {
    name: string;
    lastName: string;
    email: string;
    password: string;
    image?: string;
}

export interface IRegisterResponse {
    ok: boolean;
    errorCode?: string;
}