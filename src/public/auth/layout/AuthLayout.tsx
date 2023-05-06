// React Libraries

// Third Party Libraries
import { Image } from 'primereact/image';
import { Steps } from 'primereact/steps';
import classNames from 'classnames';

// Components
import { AuthDialog, AuthToast, MobileStepper } from '../components';

// Interfaces
import { AuthLayoutProps } from '@interfaces';

// Hooks
import { useBreakpoints } from '@hooks';

// Assets
import Logo from '@assets/logo.png';


export const AuthLayout = ( { hasStepper = false, hasDialog = false, steps = [{}, {}], activeIndex = 0, dialogTitle, hasSnackbar, children, setSubmitting } : AuthLayoutProps ) => {

    const { isXs, isSm, isMd } = useBreakpoints();

    const wrapperStyle : string = classNames(
        'w-full surface-ground flex align-items-center flex-column',
        {
            'pb-4': isXs || isSm || isMd,
        }
    )

    return (
        <div className={ wrapperStyle }>
            {
                hasDialog && (
                    <AuthDialog
                        dialogTitle={dialogTitle}
                        setSubmitting={setSubmitting}
                    />
                )
            }
            {
                hasSnackbar && <AuthToast />
            }
            
            <div className='w-11rem h-11rem md:w-13rem md:h-13rem lg:w-15rem lg:h-15rem mt-3 mb-4 md:mb-0'>
                <Image src={ Logo } alt='Logo' className='w-full h-full flex justify-content-center' width='97.56%' height='100%'/>
            </div>
            {
                hasStepper && (
                    isXs ? (
                        <MobileStepper 
                            activeStep={activeIndex + 1}
                            label={steps[activeIndex].label}
                            stepsLength={steps.length}
                        />
                    ) : (
                        <div className='w-11 md:w-9 lg:w-7 xl:w-5'>
                            <Steps model={steps} activeIndex={activeIndex} className='py-0'/>
                        </div>
                    )
                )
            }
            { children }
        </div>
    )
}
