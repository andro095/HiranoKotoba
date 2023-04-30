// React Libraries
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Third Party Libraries
import { Button } from "primereact/button";

// Components

// Interfaces

// Hooks
import { useBreakpoints, useMessage } from "@hooks";

// Constants
import { registerSteps } from "../../constants";

// Layouts
import { AuthCardLayout, AuthLayout } from "../../layout";

// Styles
import { RegisterStep2PageStyle as styles } from "../../styles";

export const RegisterStep2Page = () => {
    
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { isXs, isSm } = useBreakpoints();
    const location = useLocation();
    const navigate = useNavigate();
    const formatMessage = useMessage();

    const email : string = location.state?.email;

    useEffect(() => {
        if (!email) {
            navigate('/auth/login');
        }
    }, [])

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
            steps={registerSteps(formatMessage)}
        >
            <AuthCardLayout
                hasBackArrow
                isSubmitting={isSubmitting}
                title={formatMessage('register.secondTitle', 'Confirma')}
            >
                <div
                    className="w-full flex flex-column align-items-center text-center gap-3"
                >
                    <p
                        className="w-full m-0"
                    >
                        {formatMessage('register.confirmationEmailSent', 'Se ha enviado un correo de confirmación a:')}
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
                        {formatMessage('register.confirmationEmailSent2', 'Por favor, revisa tu bandeja de entrada y sigue las instrucciones para completar el registro.')}
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
