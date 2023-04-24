// Librerias de React
import { useState } from "react"

// Librerias de Terceros
import { Button } from "primereact/button"

// Archivos propios

// Funcionalidad
import { useBreakpoints, useMessage } from "../../../hooks"

// Assets


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
