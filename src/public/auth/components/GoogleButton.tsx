// React Libraries
import { useState } from "react"

// Third Party Libraries
import { Button } from "primereact/button"

// Components

// Interfaces

// Hooks
import { useAppDispatch, useBreakpoints, useMessage } from "@hooks";

// Store
import { startGoogleSignIn } from "@store";


export const GoogleButton = () => {

    const [disabled, setDisabled] = useState(false);

    const dispatch = useAppDispatch();
    const formatMessage = useMessage();
    const { isXs, isSm } = useBreakpoints();

    // TODO: Implementar creación de usuario cuando se loguea con Google por primera vez

    const onClick = async() => {

        setDisabled(true);

        dispatch( startGoogleSignIn() )

        setDisabled(false);

    }


    return (
        <Button 
            label={ formatMessage('login.google', 'Ingresar con Google') }
            type="button"
            icon="pi pi-google"
            severity="secondary"
            disabled={ disabled }
            onClick={ onClick }
            size={ (isXs || isSm) ? 'small' : undefined }
        />
    )
}
