// React Libraries

// Third Party Libraries
import { useFormik } from "formik"

// Components

// Interfaces

// Hooks
import { useMessage } from "@hooks"

// Layouts
import { AuthCardLayout, AuthLayout } from "../../layout"

// Constants
import { registerSteps } from "../../constants"
import { registerFields, registerSchema } from "../../formik"

export const RegisterStep1Page = () => {

    const formatMessage = useMessage()

    const formik = useFormik({
        initialValues: registerFields,
        validationSchema: registerSchema,
        onSubmit: (values, { setSubmitting }) => {
            console.log(values)

            setTimeout(() => {
                setSubmitting(false)
            }, 2000);
            // setSubmitting(false)
        },
    })

    return (
        <AuthLayout
            hasDialog
            hasStepper
            hasSnackbar
            activeIndex={0}
            steps={registerSteps(formatMessage)}
            dialogTitle={formatMessage('register.dialogTitle', 'Error al registrar tu cuenta')}
        >
            <AuthCardLayout
                title={formatMessage('register.title', 'Nuevo usuario')}
                isSubmitting={formik.isSubmitting}
            >
                <div 
                    className="w-full"
                >
                    <form
                        className="w-full flex flex-column align-items-center"
                    >
                        <div
                            className="w-full flex flex-column gap-4 mt-2"
                        >
                            
                        </div>

                    </form>
                </div>
            </AuthCardLayout>
        </AuthLayout>
    )
}
