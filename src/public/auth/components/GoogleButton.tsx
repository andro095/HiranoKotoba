// React Libraries
import { useState } from "react"

// Third Party Libraries
import { Button } from "primereact/button"

// Components

// Interfaces

// Hooks
import { useBreakpoints, useMessage } from "@hooks";


export const GoogleButton = () => {

    const [disabled, setDisabled] = useState(false);

    const formatMessage = useMessage();
    const { isXs, isSm } = useBreakpoints();

    // TODO: Implementar lógica de Google

    const onClick = () => {

        setDisabled(true);

        setTimeout(() => {
            setDisabled(false);
        }, 2000);

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
