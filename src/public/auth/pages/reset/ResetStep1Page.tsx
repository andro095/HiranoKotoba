// React Libraries
import { useNavigate } from "react-router-dom";

// Third Party Libraries
import { useFormik } from "formik";
import { Button } from "primereact/button";

// Components
import { MInputText, MSubmitButton } from "@components";

// Interfaces

// Hooks
import { useMessage } from "@hooks";

// Layouts
import { AuthCardLayout, AuthLayout } from "../../layout";

// Constants
import { resetSteps } from "../../constants";

// Formik
import { resetStep1Fields, resetStep1Schema } from "../../formik";

export const ResetStep1Page = () => {

    const formatMessage = useMessage();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: resetStep1Fields,
        validationSchema: resetStep1Schema(formatMessage),
        onSubmit: (values, { setSubmitting }) => {
            console.log(values);

            setTimeout(() => {
                setSubmitting(false);
                navigate('/auth/reset/step2', { state: { email: values.email } })
            }, 2000);
        },
    });

    return (
        <AuthLayout
            hasDialog
            hasStepper
            activeIndex={0}
            steps={resetSteps(formatMessage)}
            dialogTitle={formatMessage('reset.dialogTitle.step1', 'Error al enviar el correo')}
        >
            <AuthCardLayout
                hasBackArrow
                title={formatMessage('reset.title.step1', 'Restablecer contraseña')}
                isSubmitting={formik.isSubmitting}
            >
                <form
                    className="w-full flex flex-column align-items-center gap-3"
                    onSubmit={formik.handleSubmit}
                >
                    <MInputText 
                        label={ formatMessage('auth.email', 'Correo electrónico') }
                        name="email"
                        type="email"
                        formik={formik}
                    />

                    <MSubmitButton 
                        label={ formatMessage('reset.send', 'Enviar correo') }
                        formik={formik}
                    />
                </form>
            </AuthCardLayout>
        </AuthLayout>
    )
}
