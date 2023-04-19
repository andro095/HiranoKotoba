// Librerias de React
import { ReactNode } from 'react';

// Librerias de Terceros
import { Image } from 'primereact/image';
import { Steps } from 'primereact/steps';
        
        
// Archivos propios
import { AuthLayoutProps } from '../../../interfaces';

// Funcionalidad

// Assets
import Logo from '../../../assets/logo.png';


export const AuthLayout = ( { hasStepper = false, hasDialog = false, steps = [{}, {}], activeIndex, dialogTitle, hasSnackbar, children } : AuthLayoutProps ) => {
    return (
        <div className='w-full surface-ground h-full flex align-items-center flex-column'>
            <div className='w-11rem h-11rem md:w-13rem md:h-13rem lg:w-15rem lg:h-15rem my-3 md:my-4 lg:my-5'>
                <Image src={ Logo } alt='Logo' className='w-full h-full flex justify-content-center' width='97.56%' height='100%'/>
            </div>
            {
                hasStepper && (
                    <div className='w-11 md:w-9 lg:w-7 xl:w-5 mb-5'>
                        <Steps model={steps} activeIndex={activeIndex} className='py-0'/>
                    </div>
                )
            }
            { children }
        </div>
    )
}
