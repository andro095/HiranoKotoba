// React Libraries
import { useEffect, useRef } from 'react';

// Third Party Libraries
import { Toast } from 'primereact/toast';

// Components

// Interfaces

// Hooks
import { useAppSelector, useBreakpoints, useMessage } from '@hooks';

// Store
import { resetConfirmationEmailSent } from '@store';


export const AuthToast = () => {

    const toast = useRef<Toast>(null);

    const { isXs, isSm, isMd, isLg, isXl } = useBreakpoints();
    const { confirmationEmailSent } = useAppSelector(state => state.auth);
    const formatMessage = useMessage();

    useEffect(() => {
        if (confirmationEmailSent) {
            toast.current?.show({
                severity: 'success', 
                life: 3000,
                summary: formatMessage('logIn.resendConfirmationEmailSummary', 'Correo enviado'),
                detail: formatMessage('logIn.resendConfirmationEmailDetail', 'Correo reenviado con éxito. Por favor revise su bandeja de entrada.')
            })

            resetConfirmationEmailSent();
        }
    }, [confirmationEmailSent])
    

    const getToastPosition = () => {
        if (isXs || isSm) {
            return 'top-center'
        } else if (isMd) {
            return 'top-left'
        } else if (isLg || isXl) {
            return 'top-right'
        }
    }

    return (
        <Toast 
            ref={toast}
            position={getToastPosition()}
        />
    )
}
