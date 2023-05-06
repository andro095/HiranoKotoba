// React Libraries

// Third Party Libraries

// Components

// Interfaces

// Hooks
import { useMessage } from "@hooks";

// Styles
import { PhotoPickerStyle as styles } from "./styles";


export const PhotoPicker = () => {

    const formatMessage = useMessage();

    // TODO: Cambiar el fondo gris por un color rojo más claro  y el color del ícono a blanco

    return (
        <>
            <div
                className="w-10rem h-10rem md:w-12rem md:h-12rem border-circle border-2 overflow-hidden flex flex-column justify-content-end"
                css={ styles.container }
            >
                <p
                    className="w-full text-center"
                >
                    {
                        formatMessage('photoPickerTitle', 'Carga una foto de perfil')
                    }
                </p>
                <div
                    className="w-full bg-gray-200 flex justify-content-center align-items-center"
                    css={ styles.cameraWrapper }
                >
                    <i 
                        className="pi pi-camera" 
                        css={ styles.camera }
                    />
                </div>
            </div>
        </>
    )
}
