import classNames from 'classnames';
import { Button } from 'primereact/button';
import { useBreakpoints } from '../hooks';
        

export const BackArrow = () => {

    // TODO : Terminar de implementar el componente BackArrow

    const { isXs, isSm } = useBreakpoints();

    const divClasses : string = classNames(
        'w-full',
        { 'flex justify-content-center mt-2' : isXs || isSm }
    )
    
    const buttonClasses : string = classNames(
        {
            'w-3rem h-3rem' : isXs || isSm,
        }
    )

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
            />
        </div>
    )
}
