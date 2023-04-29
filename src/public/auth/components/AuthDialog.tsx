// React Libraries
import { useEffect, useState } from 'react';

// Third Party Libraries
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

// Components

// Interfaces
import { AuthDialogProps } from '@interfaces';

// Hooks
import { useAppDispatch, useAppSelector, useMessage } from '@hooks';

// Store
import { cleanErrors, startSendConfirmationEmail } from '@store';

// Enums
import { AuthResponseEnum } from '@enums';

// Constants
import { errorTypes } from '../constants';

// Styles
import { AuthDialogStyle as styles } from "../styles";


export const AuthDialog = ( { dialogTitle, setSubmitting } : AuthDialogProps ) => {

    const [visible, setVisible] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const { errorType, user } = useAppSelector(state => state.auth);

    const formatMessage = useMessage();

    useEffect(() => {
        setVisible(Boolean(errorType));
    }, [errorType])
    
    const handleOnHide = () => {
        setVisible(false);
        cleanErrors();
    }

    const handleSendConfirmationEmail = () => {
        setVisible(false);

        cleanErrors();

        if (setSubmitting) setSubmitting(true);


        dispatch( startSendConfirmationEmail(user?.email) );

        if (setSubmitting) setSubmitting(false);
    }

    const footer = (
        <div>
            <Button 
                label={ formatMessage('ok', 'Ok') } 
                icon="pi pi-check" 
                onClick={ handleOnHide }
                text={ errorType == AuthResponseEnum.UserUnconfirmed }
                autoFocus={ errorType != AuthResponseEnum.UserUnconfirmed }
            /> 
            {
                errorType == AuthResponseEnum.UserUnconfirmed && (
                    <Button 
                        label={ formatMessage('auth.resendConfirmationEmail', 'Reenviar correo') }
                        icon="pi pi-envelope"
                        onClick={ handleSendConfirmationEmail }
                        autoFocus
                    />
                )
            }
        </div>
    );

    return (
        <Dialog
            header={ dialogTitle }
            footer={ footer }
            visible={ visible }
            onHide={ handleOnHide }
            css={ styles.card }
        >
            <p>
                { formatMessage(`errorTypes.auth.${errorTypes[errorType as AuthResponseEnum]}`, 'Error en la autenticación')}
            </p>
        </Dialog>
    )
}
