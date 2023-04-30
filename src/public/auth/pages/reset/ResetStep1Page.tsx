// React Libraries

// Third Party Libraries

// Components

// Interfaces

// Hooks
import { useMessage } from "@hooks";

// Layouts
import { AuthCardLayout, AuthLayout } from "../../layout";

// Constants
import { resetSteps } from "../../constants";
import { useFormik } from "formik";
import { resetStep1Fields, resetStep1Schema } from "../../formik";

export const ResetStep1Page = () => {

    const formatMessage = useMessage();

    const formik = useFormik({
        initialValues: resetStep1Fields,
        validationSchema: resetStep1Schema(formatMessage),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    // TODO: Agregar campos del formulario y funcionalidad

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

            </AuthCardLayout>
        </AuthLayout>
    )
}
