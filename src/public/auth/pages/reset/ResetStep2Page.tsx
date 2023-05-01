// React Libraries
import { useState } from "react";
import { useLocation } from "react-router-dom";

// Third Party Libraries
import { Button } from "primereact/button";

// Components

// Interfaces

// Hooks
import { useBreakpoints, useMessage } from "@hooks";

// Styles
import { ResetStep2PageStyle as styles } from "../../styles";

// Constants
import { resetSteps } from "../../constants"

// Layouts
import { AuthCardLayout, AuthLayout } from "../../layout"


export const ResetStep2Page = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const { isXs, isSm } = useBreakpoints();
    const formatMessage = useMessage();
    const location = useLocation();

    const email: string = location.state?.email;

    const onClick = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
        }, 2000);
    }

    return (
        <AuthLayout
            hasSnackbar
            hasStepper
            activeIndex={1}
            steps={resetSteps(formatMessage)}
        >
            <AuthCardLayout
                hasBackArrow
                title={formatMessage('reset.title.step2', 'Correo enviado')}
                isSubmitting={isSubmitting}
            >
                <div
                    className="w-full flex flex-column align-items-center text-center gap-3"
                >
                    <p
                        className="w-full m-0"
                    >
                        {
                            formatMessage(
                                'reset.emailSent',
                                'Se ha enviado un correo a:'
                            )
                        }
                    </p>
                    <p 
                        className="w-full m-0"
                        css={styles.textColor}
                    >
                        <strong>{email}</strong>
                    </p>
                    <p
                        className="w-full m-0"
                    >
                        {
                            formatMessage(
                                'reset.emailSent2',
                                'Por favor, revisa tu bandeja de entrada y sigue las instrucciones para restablecer tu contraseña.'
                            )
                        }
                    </p>
                    <Button 
                        label={formatMessage('auth.resendConfirmationEmail', 'Reenviar el correo')}
                        size={ (isXs || isSm) ? 'small' : undefined }
                        onClick={onClick}
                    />
                </div>
            </AuthCardLayout>
        </AuthLayout>
    )
}
