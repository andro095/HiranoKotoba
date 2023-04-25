// React Libraries
import { useNavigate } from 'react-router-dom';

// Third Party Libraries
import classNames from 'classnames';
import { Button } from 'primereact/button';

// Components

// Interfaces

// Hooks
import { useBreakpoints } from '@hooks';


export const BackArrow = () => {

    const { isXs, isSm } = useBreakpoints();
    const navigate = useNavigate();

    const divClasses : string = classNames(
        'w-full',
        { 'flex justify-content-center mt-3' : isXs || isSm }
    )
    
    const buttonClasses : string = classNames(
        {
            'w-3rem h-3rem' : isXs || isSm,
        }
    )

    const onClick = () => navigate(-1);

    return (
        <div
            className={ divClasses }
        >
            <Button 
                label={ isXs || isSm ? '' : 'Regresar'} 
                icon='pi pi-arrow-left'
                severity='secondary'
                text={ !(isXs || isSm) }
                rounded={ isXs || isSm }
                className={ buttonClasses }
                onClick={ onClick }
            />
        </div>
    )
}
