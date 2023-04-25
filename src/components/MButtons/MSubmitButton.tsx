// React Libraries

// Third Party Libraries
import { Button } from 'primereact/button';

// Components

// Interfaces
import { MSubmitButtonProps } from '@interfaces';

// Hooks
import { useBreakpoints } from '@hooks';


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
