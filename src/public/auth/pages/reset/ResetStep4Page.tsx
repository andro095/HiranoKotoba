// React Libraries
import { useNavigate } from "react-router-dom";

// Third Party Libraries
import { Button } from "primereact/button";

// Components

// Interfaces

// Hooks
import { useMessage } from "@hooks";

// Constants
import { resetSteps } from "../../constants"

// Layouts
import { AuthCardLayout, AuthLayout } from "../../layout"

export const ResetStep4Page = () => {

    const formatMessage = useMessage();
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/auth/login');
    }

    return (
        <AuthLayout
            hasStepper
            activeIndex={3}
            steps={resetSteps(formatMessage)}
        >
            <AuthCardLayout
                title={formatMessage('reset.title.step4', 'Contraseña restablecida')}
            >
                <div
                    className="w-full flex flex-column align-items-center text-center gap-3"
                >
                    <p
                        className="w-full m-0"
                    >
                        {
                            formatMessage(
                                'reset.passwordReseted',
                                'Tu contraseña ha sido restablecida con éxito. Puedes iniciar sesión con tu nueva contraseña.'
                            )
                        }
                    </p>
                    <Button 
                        label={formatMessage('logIn.title', 'Iniciar sesión')}
                        onClick={onClick}
                    />
                </div>
            </AuthCardLayout>
        </AuthLayout>
    )
}
