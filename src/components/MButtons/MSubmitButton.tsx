// Librerias de React

// Librerias de Terceros
import { Button } from 'primereact/button';

// Archivos propios
import { MSubmitButtonProps } from "../../interfaces"

// Funcionalidad
import { useBreakpoints } from "../../hooks";

// Assets


export const MSubmitButton = ( { label, formik, classname, css } : MSubmitButtonProps ) => {
    
    const { isXs, isSm } = useBreakpoints();
    
    return (
        <Button
            label={label}
            type="submit"
            disabled={ formik.isSubmitting || !formik.isValid || !formik.dirty }
            size={ (isXs || isSm) ? 'small' : undefined }
            className={classname}
            css={css}
        />
    )
}
