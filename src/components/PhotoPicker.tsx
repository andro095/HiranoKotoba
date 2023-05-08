// React Libraries
import { useEffect, useState } from 'react';

// Third Party Libraries
import { Image } from 'primereact/image';
import { FilePickerReturnTypes, useFilePicker } from 'use-file-picker';

// Components

// Interfaces
import { PhotoPickerProps } from "@interfaces";

// Hooks
import { useBreakpoints, useMessage } from "@hooks";

// Styles
import { PhotoPickerStyle as styles } from "./styles";


export const PhotoPicker = ( { imageSrc = '', image = '', setImage = () => {}, viewOnly = false } : PhotoPickerProps) => {

    const [showHover, setShowHover] = useState(false);

    const formatMessage = useMessage();
    const { isXs, isSm } = useBreakpoints();

    const [openFileSelector, {filesContent}] : FilePickerReturnTypes = useFilePicker({
        accept: 'image/*',
        maxFileSize: 10,
        multiple: false,
        readAs: 'DataURL',
    })

    useEffect(() => {
        if (filesContent.length) {
            setImage(filesContent[0].content)
        }
    }, [filesContent])
    
    const handleClick = () => {
        if (viewOnly) return;
        openFileSelector();
    }

    return (
        <div
            className="w-10rem h-10rem md:w-12rem md:h-12rem border-circle border-2 overflow-hidden"
            onClick={ handleClick }
            css={ styles.container }
            onMouseEnter={ () => setShowHover(true) }
            onMouseLeave={ () => setShowHover(false) }
        >
            {
                !imageSrc && !image && (
                    <div
                        className='w-full h-full flex flex-column justify-content-end align-items-center relative'
                    >
                        <p
                            className="w-full text-center my-1 md:my-3"
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
                                css={ styles.camera( isXs || isSm ) }
                            />
                        </div>
                    </div>
                )
            }
            {
                (imageSrc || image) && (
                    <Image 
                        src={ imageSrc || image }
                        alt="profile"
                        className='w-full h-full flex justify-content-center align-items-center'
                        imageClassName="w-full"
                    /> 
                ) 
            }
            {
                (imageSrc || image) && showHover && !viewOnly && (
                    <div
                        className='w-full h-full flex justify-content-center align-items-center relative bottom-100'
                        css={ styles.hoverWrapper }
                    >
                        <i 
                            className='pi pi-camera'
                            css={ styles.camera( isXs || isSm ) }
                        />
                    </div>
                )
            }
        </div>
    )
}
