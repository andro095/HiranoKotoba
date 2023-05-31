// React Libraries
import { useMemo } from "react"

// Third Party Libraries
import { Button } from "primereact/button"

// Components

// Interfaces

// Hooks
import { useAppDispatch, useBreakpoints, useCheckAuth, useMessage } from "@hooks";

// Store
import { startGoogleSignIn } from "@store";
import { AuthStatus } from "@enums";


export const GoogleButton = () => {

    const dispatch = useAppDispatch();
    const status = useCheckAuth();
    const formatMessage = useMessage();
    const { isXs, isSm } = useBreakpoints();

    // TODO: Implementar creación de usuario cuando se loguea con Google por primera vez

    const isAuthenticating = useMemo(() => status === AuthStatus.Checking, [status]);

    const onClick = async() => {
        await dispatch( startGoogleSignIn() );
    }


    return (
        <Button 
            label={ formatMessage('login.google', 'Ingresar con Google') }
            type="button"
            icon="pi pi-google"
            severity="secondary"
            disabled={ isAuthenticating }
            onClick={ onClick }
            size={ (isXs || isSm) ? 'small' : undefined }
        />
    )
}
