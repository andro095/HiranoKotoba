// React Libraries
import { useNavigate } from "react-router-dom";

// Third Party Libraries
import { useFormik } from "formik";

// Components
import { MPassword, MSubmitButton } from "@components";

// Interfaces

// Hooks
import { useMessage } from "@hooks";

// Layouts
import { AuthCardLayout, AuthLayout } from "../../layout"

// Constants
import { resetSteps } from "../../constants";

// Formik
import { resetStep3Fields, resetStep3Schema } from "../../formik";

export const ResetStep3Page = () => {

    const formatMessage = useMessage();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: resetStep3Fields,
        validationSchema: resetStep3Schema(formatMessage),
        onSubmit: (values, {setSubmitting}) => {

            console.log(values)

            setTimeout(() => {
                setSubmitting(false);
                navigate('/auth/reset/step4');
            }, 2000);

            // navigate('/auth/reset/step4');
        }
    })

    return (
        <AuthLayout
            hasDialog
            hasStepper
            dialogTitle={formatMessage('reset.dialogTitle.step3', 'Error al restablecer la contraseña')}
            activeIndex={2}
            steps={resetSteps(formatMessage)}
        >
            <AuthCardLayout
                isSubmitting={formik.isSubmitting}
                title={formatMessage('reset.title.step3', 'Contraseña nueva')}
            >
                <form
                    className="w-full flex flex-column align-items-center gap-3"
                    onSubmit={formik.handleSubmit}
                >
                    <MPassword 
                        hasFeedback
                        label={formatMessage('auth.password', 'Contraseña')}
                        name="password"
                        formik={formik}
                    />
                    <MPassword 
                        label={formatMessage('auth.confirmPassword', 'Confirmar contraseña')}
                        name="confirmPassword"
                        formik={formik}
                    />
                    <MSubmitButton 
                        label={formatMessage('reset.reset', 'Restablecer contraseña')}
                        formik={formik}
                    />
                </form>
            </AuthCardLayout>
        </AuthLayout>
    )
}
